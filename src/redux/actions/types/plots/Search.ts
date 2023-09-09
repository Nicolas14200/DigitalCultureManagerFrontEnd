import { SEARCH } from "redux/actions/plot.action";

export interface Search {
    type: typeof SEARCH;
    payload: string;
  }