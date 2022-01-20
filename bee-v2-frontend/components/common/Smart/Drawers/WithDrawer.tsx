import { useDrawerDispatch } from "helpers/context/DrawerContext";
import { useCallback } from "react";

export const dispatchDrawer = useDrawerDispatch();

export const closeDrawer = useCallback(() => dispatchDrawer({ type: 'CLOSE_DRAWER' }), [
  dispatchDrawer,
]);

export const openDrawer = useCallback(
  (variables) => dispatchDrawer({
    type: 'OPEN_DRAWER',
    title: variables.title,
    cancelButtonTitle: variables.cancelButtonTitle,
    cancelButton: variables.cancelButton,
    content: variables.content,
    onCancel: variables.onCancel,
  }),
  [dispatchDrawer]
)