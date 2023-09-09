import axios from "axios";
import { Sign } from "valuesObject/Sign";
import { SignInAction } from "./types/user/SignInAction";
import { SignUpAction } from "./types/user/SignUpAction";

export const SIGN_IN = "SIGN_IN";
export const SIGN_UP = "SIGN_UP";
export const GET_USER_BY_ID = "GET_USER_BY_ID";

export const user = () => {
  return async () => {
    await axios.get(`http://localhost:3000/user/`);
  };
};

export const signin = async (data: Sign): Promise<SignInAction> => {
  try {
    const response = await axios.post(
      `http://localhost:3000/user/signin`,
      data
    );
    const payload = {
      email: response.data.email,
      password: "",
      token: response.data.token,
      name: response.data.name,
      role: response.data.role,
      isSignIn: true,
    };
    return {
      type: SIGN_IN,
      payload: payload,
    };
  } catch (e) {
    console.log(e);
  }
};

export const signup = async (data: Sign): Promise<SignUpAction> => {
  try {
    const response = await axios.post(
      `http://localhost:3000/user/create`,
      data
    );
    const payload = {
      email: response.data.email,
      password: response.data.password,
      token: response.data.token,
      name: response.data.name,
      role: response.data.role,
      isSignIn: response.data.isSignIn,
    };
    return {
      type: SIGN_UP,
      payload: payload,
    };
  } catch (e) {
    return {
      type: SIGN_UP,
      payload: {
        email: "",
        password:"" ,
        token:"",
        name: "",
        role: "",
        isSignIn: false,
      }
    }
  }
};

export const getUserById = async (id:string) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${id}`);
      dispatch({
        type: GET_USER_BY_ID,
        payload: response.data,
      });
      return response;
    } catch (e) {
      console.log(e);
    }
  };
};
