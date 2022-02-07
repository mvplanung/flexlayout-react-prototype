import { useExternalDrop } from "../hooks/useExternalDrop";
import DragBox from "./DragBox";
import DropBox from "./DropBox";
import styles from "./panel.module.css";

const { container } = styles;

const Panel = ({ layoutRef, node }) => {
  const { panelSetId } = node.getConfig();
  const { backgroundColor, dropRef } = useExternalDrop(layoutRef, panelSetId);

  return (
    <div ref={dropRef} className={container} style={{ backgroundColor }}>
      <DragBox panelSetId={panelSetId}>Drag</DragBox>
      {/* <DropBox
        layoutRef={layoutRef}
        panelSetId={panelSetId}
      /> */}
      {/* <h4>{node.getName()}</h4> */}
    </div>
  );
};

export default Panel;
