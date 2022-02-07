import DragBox from "./DragBox";
import DropBox from "./DropBox";
import styles from "./panel.module.css";

const { container } = styles;

const Panel = ({ node }) => {
  return (
    <div className={container}>
      <DragBox name="drag">Drag</DragBox>
      <DropBox />
      {/* <h4>{node.getName()}</h4> */}
    </div>
  );
};

export default Panel;
