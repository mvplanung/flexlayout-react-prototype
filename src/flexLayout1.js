import FlexLayout from "flexlayout-react";
import { createModel } from "./flexLayoutFactory";

const factory = (node) => {
  var component = node.getComponent();
  if (component === "button") {
    console.log("component", component);
    return <button>{node.getName()}</button>;
  }
};

export default function FlexLayout1() {
  return (
    <div className="flexLayout1">
      <FlexLayout.Layout model={createModel()} factory={factory} />
    </div>
  );
}
