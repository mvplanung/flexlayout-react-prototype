import * as FlexLayout from "flexlayout-react";
import { createModel } from "./flexLayoutFactory";
import Panel from "./Panel";
const modelJson = {
  global: {},
  layout: {
    type: "row",
    weight: 100,
    children: [
      {
        type: "tabset",
        weight: 50,
        selected: 0,
        children: [
          {
            type: "tab",
            name: "FlexLayout2 Panel 1",
            component: "panel"
          }
        ]
      },
      {
        type: "tabset",
        weight: 50,
        selected: 0,
        children: [
          {
            type: "tab",
            name: "FlexLayout2 Panel 2",
            component: "panel"
          }
        ]
      }
    ]
  }
};
const factory = (node) => {
  const component = node.getComponent();
  if (component === "panel") {
    return <Panel node={node} />;
  }
};

export default function FlexLayout2() {
  return (
    <div className="flexLayout2">
      {/* test2 */}
      <FlexLayout.Layout model={createModel(modelJson)} factory={factory} />
    </div>
  );
}
