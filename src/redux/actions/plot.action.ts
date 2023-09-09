import axios from "axios";

export const GET_ALL_PLOT = "GET_ALL_PLOT";
export const GET_PLOT_BY_ID = "GET_PLOT_BY_ID";
export const SEARCH = "SEARCH";
export const plots = () => {
  return async () => {
    await axios.get(`http://localhost:3000/plot/`);
  };
};

export const getAllPlots = async () => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/plot/all");
      dispatch({
        type: GET_ALL_PLOT,
        payload: response.data,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  };
};

export const getPlotById = async (id:string) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3000/plot/${id}`);
      dispatch({
        type: GET_PLOT_BY_ID,
        payload: response.data,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  };
};

export const search = async (s) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SEARCH,
        payload: s,
      });
      return s;
    } catch (e) {
      console.log(e);
    }
  };
};
