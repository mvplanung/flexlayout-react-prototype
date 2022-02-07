import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants/dndItemTypes";
import styles from "./dragBox.module.css";

const { container } = styles;

const DragBox = function Box({ area, children, name }) {
  // return <div className={container}>hello</div>;

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

  const handleMouseDown = (event) => {
    event.stopPropagation();
  };

  const style = { opacity };

  if (area) {
    style.width = style.height = area;
  }
  return (
    <div onMouseDown={handleMouseDown}>
      <div
        ref={drag}
        className={container}
        style={style}
        // data-testid={`box-${name}`}
      >
        {children}
      </div>
    </div>
  );
};

export default DragBox;
