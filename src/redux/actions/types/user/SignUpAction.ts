import { SIGN_UP } from "redux/actions/user.action";
import { Sign } from "valuesObject/Sign";

export interface SignUpAction {
    type: typeof SIGN_UP;
    payload: Sign;
  }