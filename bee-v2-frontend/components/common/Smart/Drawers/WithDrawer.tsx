import { DrawerStateContext, DrawerUpdaterContext } from "helpers/context/DrawerContext";
import { useDrawerState } from "helpers/hooks/hooks";
import { GlobalDrawer } from "./GlobalDrawer";
import { FC, ReactNode } from 'react'

export interface IWithDrawerProps {
	children?: ReactNode
}

export const WithDrawer: FC<IWithDrawerProps> = ({ children }: IWithDrawerProps) => {
  const [drawerOptions, setDrawerOptions] = useDrawerState({
    isOpen: false,
    drawerProps: {}
  });

  return (
    <DrawerUpdaterContext.Provider value={setDrawerOptions}>
      <DrawerStateContext.Provider value={drawerOptions}>
        <GlobalDrawer />
        {children}
      </DrawerStateContext.Provider>
    </DrawerUpdaterContext.Provider>
  );
};