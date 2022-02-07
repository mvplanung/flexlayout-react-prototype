import { createContext, useContext, useMemo, useState } from "react";

const CanDragContext = createContext();

export const useCanDrag = () => useContext(CanDragContext);

export const CanDragProvider = ({ children }) => {
  const [canDrag, setCanDrag] = useState(true);
  const value = useMemo(() => ({ canDrag, setCanDrag }), [canDrag]);
  return (
    <CanDragContext.Provider value={value}>{children}</CanDragContext.Provider>
  );
};
