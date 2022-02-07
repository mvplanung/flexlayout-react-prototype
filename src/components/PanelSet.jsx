import * as FlexLayout from "flexlayout-react";
import { useCallback, useMemo, useRef } from "react";
import { useExternalDrop } from "../hooks/useExternalDrop";
import { createModel } from "../utils/flexLayoutFactory";
import { onRenderTab } from "../utils/renderTab";
import Panel from "./Panel";

const styles = "./panelSet.module.css";

const { container } = styles;

export default function PanelSet({ panelSetId }) {
  const layoutRef = useRef();

  const factory = useCallback((node) => {
    var component = node.getComponent();
    if (component === "panel") {
      return <Panel layoutRef={layoutRef} node={node} />;
    }
  }, []);
  const model = useMemo(() => createModel(panelSetId), [panelSetId]);
  const { backgroundColor, dropRef } = useExternalDrop(layoutRef, panelSetId);

  return (
    <div className={container} ref={dropRef} style={{ backgroundColor }}>
      <FlexLayout.Layout
        factory={factory}
        model={model}
        onRenderTab={onRenderTab}
        ref={layoutRef}
      />
    </div>
  );
}
