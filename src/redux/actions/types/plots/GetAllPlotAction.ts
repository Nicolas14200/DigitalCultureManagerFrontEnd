import { GET_ALL_PLOT } from "redux/actions/plot.action";
import { PlotState } from "valuesObject/PlotState";

export interface GetAllPlotAction {
    type: typeof GET_ALL_PLOT;
    payload: PlotState[];
  }