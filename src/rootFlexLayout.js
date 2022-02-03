import * as FlexLayout from "flexlayout-react";
import { createModel } from "./flexLayoutFactory";
import FlexLayout1 from "./flexLayout1";
import FlexLayout2 from "./flexLayout2";

const rootModel = {
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
            name: "Root FlexLayout",
            component: "panel"
          }
        ]
      }
    ]
  }
};

const factory = (node) => {
  console.log("node", node);
  return (
    <>
      <FlexLayout1 />
      <FlexLayout2 />
    </>
  );
};

export default function RootFlexLayout() {
  return (
    <div className="rootFlexLayout">
      {/* test2 */}
      <FlexLayout.Layout model={createModel(rootModel)} factory={factory} />
    </div>
  );
}
