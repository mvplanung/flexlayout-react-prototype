import * as FlexLayout from "flexlayout-react";
import { createModel } from "../flexLayoutFactory";
import PanelSet from "./PanelSet";

const factory = (node) => {
  // console.log("node", node);
  const name = node.getName();
  return <PanelSet panelSetName={name} />;
};
const handleExternalDrag = (e) => {
  // console.log("PanelSet -> onExternaldrag  -> panelSetName", panelSetName);
  return {
    dragText: "Drag To New Tab",
    json: {
      type: "tab",
      component: "multitype"
    },
    onDrop: (node, event) => {
      if (!node || !event) return; // aborted drag
    }
  };
};

export default function RootFlexLayout() {
  return (
    <FlexLayout.Layout
      model={createModel()}
      factory={factory}
      onExternalDrag={handleExternalDrag}
    />
  );
}
