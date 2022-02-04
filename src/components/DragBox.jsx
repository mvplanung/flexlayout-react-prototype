import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants/dndItemTypes";
import styles from "./dragBox.module.css";

const { container } = styles;

const DragBox = function Box({ name }) {
  // return <div className={container}>{name}</div>;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  }));
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      ref={drag}
      className={container}
      style={{ opacity }}
      // data-testid={`box-${name}`}
    >
      {name}
    </div>
  );
};

export default DragBox;
