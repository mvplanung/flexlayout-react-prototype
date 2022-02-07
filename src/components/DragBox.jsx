import { useDrag } from "react-dnd";
import { ItemTypes } from "../constants/dndItemTypes";
import { useCanDrag } from "../contexts/canDrag";
import styles from "./dragBox.module.css";

const { container } = styles;

const DragBox = ({ area, children, panelSetId }) => {
  const { canDrag } = useCanDrag();
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { panelSetId },
      canDrag,
      end: (item, monitor) => {
        const dropResult = monitor.getDropResult();
        if (item && dropResult) {
          console.log(`You dropped ${item.name} into ${dropResult.name}!`);
        }
      },

      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId()
      })
    }),
    [canDrag]
  );

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
