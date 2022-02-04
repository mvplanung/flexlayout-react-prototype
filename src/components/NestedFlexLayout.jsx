import * as FlexLayout from "flexlayout-react";
import { render } from "react-dom";
import { createModel } from "../flexLayoutFactory";
import CustomTabHeader from "./CustomTabHeader";
import Panel from "./Panel";

const factory = (node) => {
  var component = node.getComponent();
  if (component === "panel") {
    console.log("component", component);

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
  renderValues.content = <CustomTabHeader name={renderValues.content} />;
};
const handleExternalDrag = (e) => {
  console.log("Root -> onExternaldrag ", e.dataTransfer.types);
};
export default function NestedFlexLayout({ panelSetName }) {
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
