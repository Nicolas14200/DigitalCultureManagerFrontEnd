import { GET_ALL_PLOT, GET_PLOT_BY_ID, SEARCH } from "redux/actions/plot.action";
import { PlotAction } from "redux/actions/types/plots/PlotAction";

const initialState = {};

export default function plotReducer(state = initialState, action: PlotAction){
    switch (action.type) {
        case GET_ALL_PLOT: 
            return action.payload;
        case GET_PLOT_BY_ID: 
            return action.payload;
        case SEARCH: 
            return action;
        default:
            return state;
    }
}