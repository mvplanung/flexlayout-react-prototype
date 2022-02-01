import FlexLayout from "flexlayout-react";
import { createModel } from "./flexLayoutFactory";

const factory = (node) => {
  var component = node.getComponent();
  if (component === "button") {
    return <button>{node.getName()}</button>;
  }
};

export default function FlexLayout2() {
  return (
    <div className="flexLayout2">
      {/* test2 */}
      <FlexLayout.Layout model={createModel()} factory={factory} />
    </div>
  );
}
