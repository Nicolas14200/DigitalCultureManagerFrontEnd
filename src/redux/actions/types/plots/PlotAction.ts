import { GetAllPlotAction } from "./GetAllPlotAction";
import { GetPLotByIdAction } from "./GetPLotByIdAction";
import { Search } from "./Search";

export type PlotAction = GetAllPlotAction | GetPLotByIdAction | Search;