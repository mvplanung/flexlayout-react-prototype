import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants/dndItemTypes";
import styles from "./dropBox.module.css";

const { container } = styles;

const DropBox = () => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));
  const isActive = canDrop && isOver;
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
