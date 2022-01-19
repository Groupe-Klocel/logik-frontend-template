import React, { createContext, Dispatch, Reducer, useContext } from 'react';

export function createCtx<S, A>(defaultValue: S, reducer: Reducer<S, A>) {
  const defaultDispatch: Dispatch<A> = () => defaultValue;
  const stateCtx = createContext(defaultValue);
  const dispatchCtx = createContext(defaultDispatch);

  function useStateCtx<K extends keyof S>() {
    const state = useContext(stateCtx);
    return state; // only one depth selector for comparison
  }

  function useDispatchCtx() {
    return useContext(dispatchCtx);
  }

  function Provider({ children }: React.PropsWithChildren<{}>) {
    const [state, dispatch] = React.useReducer(reducer, defaultValue);
    return (
      <dispatchCtx.Provider value={dispatch}>
        <stateCtx.Provider value={state}>{children}</stateCtx.Provider>
      </dispatchCtx.Provider>
    );
  }
  return [useStateCtx, useDispatchCtx, Provider] as const;
}

