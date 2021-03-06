import { useEffect } from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants/dndItemTypes";
import { useCanDrag } from "../contexts/canDrag";
import styles from "./dropBox.module.css";

const { container } = styles;

const DropBox = ({ layoutRef, panelSetId }) => {
  const { setCanDrag } = useCanDrag();

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: "Dustbin" }),
    canDrop: (item) => panelSetId !== item.panelSetId,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));
  const isActive = canDrop && isOver;

  useEffect(() => {
    if (!isActive || !layoutRef.current.addTabWithDragAndDrop) return;
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
    setCanDrag(false);
  }, [isActive, layoutRef, setCanDrag]);

  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <div ref={drop} className={container} style={{ backgroundColor }}>
      {isActive ? "Release to drop" : "Drag a box here"}
    </div>
  );
};

export default DropBox;
