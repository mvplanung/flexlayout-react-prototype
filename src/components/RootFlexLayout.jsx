import * as FlexLayout from "flexlayout-react";
import { useCallback, useMemo, useRef } from "react";
import { CanDragProvider } from "../contexts/canDrag";
import { createModel } from "../utils/flexLayoutFactory";
import { onRenderTab } from "../utils/renderTab";
import Panel from "./Panel";
import PanelSet from "./PanelSet";

export default function RootFlexLayout() {
  const layoutRef = useRef();
  const factory = useCallback((node) => {
    const { panelSetId } = node.getConfig();
    const component = node.getComponent();

    return component === "panelSet" ? (
      <PanelSet panelSetId={panelSetId} />
    ) : (
      <Panel layoutRef={layoutRef} node={node} />
    );
  }, []);

  const model = useMemo(() => createModel(), []);

  return (
    <CanDragProvider>
      <FlexLayout.Layout
        factory={factory}
        model={model}
        onRenderTab={onRenderTab}
        ref={layoutRef}
      />
    </CanDragProvider>
  );
}
