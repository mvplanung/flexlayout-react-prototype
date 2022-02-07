export const rootModel = {
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
            name: "PanelSet1",
            component: "panelSet"
          },
          {
            type: "tab",
            name: "PanelSet2",
            component: "panelSet"
          }
          // {
          //   type: "tab",
          //   name: "Top-level panel",
          //   component: "panel"
          // }
        ]
      }
    ]
  }
};
