import * as FlexLayout from "flexlayout-react";
import { rootModel } from "./constants/defaultModel";

const getModel = (panelSetName) => {
  if (!panelSetName) return;

  return {
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
              name: `${panelSetName} Panel 1`,
              component: "panel",
              config: { panelSetName }
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
              name: `${panelSetName} Panel 2`,
              component: "panel",
              config: { panelSetName }
            }
          ]
        }
      ]
    }
  };
};

export const createModel = (panelSetName) =>
  FlexLayout.Model.fromJson(getModel(panelSetName) || rootModel);
