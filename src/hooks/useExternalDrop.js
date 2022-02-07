import { useEffect } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants/dndItemTypes";
import { useCanDrag } from "../contexts/canDrag";

export const useExternalDrop = (layoutRef, panelSetId) => {
  const { setCanDrag } = useCanDrag();
  const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: "Dustbin1" }),
    canDrop: (item) => panelSetId !== item.panelSetId,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "white";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  useEffect(() => {
    if (!isActive || !layoutRef.current.addTabWithDragAndDrop) return;
    setCanDrag(false);
    layoutRef.current.addTabWithDragAndDrop(
      "Ziehen Sie an die gewünschte Position.",
      {
        type: "tab",
        name: `Moved Panel 1`,
        component: "panel",
        config: { panelSetName: "Moved" }
      },
      () => setCanDrag(true)
    );
  }, [isActive, layoutRef, setCanDrag]);

  return {
    backgroundColor,
    canDrop,
    dropRef,
    isActive,
    isOver
  };
};
