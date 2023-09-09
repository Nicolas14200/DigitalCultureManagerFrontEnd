import { Sign } from "valuesObject/Sign";
import { SIGN_IN } from "../../user.action";

export interface SignInAction {
    type: typeof SIGN_IN;
    payload: Sign;
  }