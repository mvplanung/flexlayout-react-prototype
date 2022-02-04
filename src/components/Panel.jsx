import DragBox from "./DragBox";
import styles from "./panel.module.css";

const { container, dropZone } = styles;

const Panel = ({ node }) => {
  return (
    <div className={container}>
      <DragBox name="drag" />
      <div className={dropZone}>Drop Zone </div>
      {/* <h4>{node.getName()}</h4> */}
    </div>
  );
};

export default Panel;
