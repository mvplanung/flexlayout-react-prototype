import DragBox from "./DragBox";
import { FaExternalLinkAlt } from "@react-icons/all-files/fa/FaExternalLinkAlt";

const CustomTabHeader = ({ name }) => {
  return (
    <DragBox name="d" area={20}>
      <FaExternalLinkAlt />
    </DragBox>
  );
};
export default CustomTabHeader;
