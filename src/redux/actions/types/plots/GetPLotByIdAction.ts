import { GET_PLOT_BY_ID } from "redux/actions/plot.action";
import { PlotState } from "valuesObject/PlotState";

export interface GetPLotByIdAction {
    type: typeof GET_PLOT_BY_ID;
    payload: PlotState;
  }