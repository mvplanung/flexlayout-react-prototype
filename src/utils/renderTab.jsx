import CustomTabHeader from "../components/CustomTabHeader";

export const onRenderTab = (tabNode, renderValues) => {
  if (tabNode.getComponent() !== "panel") return;
  const { panelSetId } = tabNode.getConfig();

  renderValues.buttons.push(
    <CustomTabHeader key={"yo" + Math.random()} panelSetId={panelSetId} />
  );
};
