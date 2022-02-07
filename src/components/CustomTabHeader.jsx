import DragBox from "./DragBox";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";

const CustomTabHeader = ({ panelSetId }) => {
  return (
    <DragBox panelSetId={panelSetId} area={20}>
      <FaExternalLinkAlt />
    </DragBox>
  );
};
export default CustomTabHeader;
