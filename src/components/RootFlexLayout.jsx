import * as FlexLayout from "flexlayout-react";
import { createModel } from "../flexLayoutFactory";
import NestedFlexLayout from "./NestedFlexLayout";

const factory = (node) => {
  console.log("node", node);
  const name = node.getName();
  return <NestedFlexLayout panelSetName={name} />;
};
const handleExternalDrag = (e) => {
  console.log("Root -> onExternaldrag ", e.dataTransfer.types);
};

export default function RootFlexLayout() {
  return (
    <div className="rootFlexLayout">
      <FlexLayout.Layout
        model={createModel()}
        factory={factory}
        onExternalDrag={handleExternalDrag}
      />
    </div>
  );
}
