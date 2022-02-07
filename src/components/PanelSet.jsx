import * as FlexLayout from "flexlayout-react";
import { createModel } from "../flexLayoutFactory";
import CustomTabHeader from "./CustomTabHeader";
import Panel from "./Panel";

const factory = (node) => {
  var component = node.getComponent();
  if (component === "panel") {
    return <Panel node={node} />;
  }
};
// const handleTabDrag = (dragging, over, x, y, location, refresh) => {
//   console.log("1handleTabDrag -> dragging", dragging);
//   console.log("1handleTabDrag -> over", over);
//   console.log("1handleTabDrag -> x", x);
//   console.log("1handleTabDrag -> y", y);
//   console.log("1handleTabDrag -> location", location);
//   console.log("1handleTabDrag -> refresh", refresh);
// };

const onRenderTab = (tabNode, renderValues) => {
  // renderValues.buttons.push(
  //   <div
  //     onMouseDown={handleMouseDown}
  //     style={{ backgroundColor: "blue", width: 20, height: 20 }}
  //   >
  //     ha
  //   </div>
  // );
  renderValues.buttons.push(<CustomTabHeader name={renderValues.content} />);
  // renderValues.content = ;
};
export default function PanelSet({ panelSetName }) {
  const handleExternalDrag = (e) => {
    // console.log("PanelSet -> onExternaldrag  -> panelSetName", panelSetName);
    return {
      dragText: "Drag To New Tab",
      json: {
        type: "tab",
        name: `Moved Panel 1`,
        component: "panel",
        config: { panelSetName: "Moved" }
      },
      onDrop: (node, event) => {
        if (!node || !event) return; // aborted drag
      }
    };
  };
  return (
    <div className="flexLayout1">
      <FlexLayout.Layout
        model={createModel(panelSetName)}
        factory={factory}
        // onTabDrag={handleTabDrag}
        onRenderTab={onRenderTab}
        onExternalDrag={handleExternalDrag}
      />
    </div>
  );
}
