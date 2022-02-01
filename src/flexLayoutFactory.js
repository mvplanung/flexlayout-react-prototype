import FlexLayout from "flexlayout-react";
import { modelJson } from "./defaultModel";

export const createModel = (model) =>
  FlexLayout.Model.fromJson(model || modelJson);
