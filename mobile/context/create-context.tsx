import React, { createContext, Dispatch, Reducer, useContext, useMemo } from 'react';

export function createCtx<S, A>(defaultValue: S, reducer: Reducer<S, A>) {
    const defaultDispatch: Dispatch<A> = () => defaultValue;
    const stateCtx = createContext(defaultValue);
    const dispatchCtx = createContext(defaultDispatch);

    function useStateCtx() {
        const state = useContext(stateCtx);
        return state; // only one depth selector for comparison
    }

    function useDispatchCtx() {
        return useContext(dispatchCtx);
    }

    function Provider({ children }: React.PropsWithChildren<{}>) {
        const [state, dispatch] = React.useReducer(reducer, defaultValue);

        const contextValue = useMemo(() => {
            return { state, dispatch };
        }, [state, dispatch]);

        return (
            <dispatchCtx.Provider value={contextValue.dispatch}>
                <stateCtx.Provider value={contextValue.state}>{children}</stateCtx.Provider>
            </dispatchCtx.Provider>
        );
    }
    return [useStateCtx, useDispatchCtx, Provider] as const;
}
