import { UserAction } from "redux/actions/types/user/UserAction";
import { SIGN_UP, SIGN_IN } from "redux/actions/user.action";

const initialState ={
    email: "",
    password: "",
};

export default function userReducer(state = initialState, action: UserAction){
    switch (action.type) {
        case SIGN_IN: 
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
                token: action.payload.token,
                role: action.payload.role,
                isSignIn: action.payload.isSignIn
              }
        case SIGN_UP:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                name: action.payload.name,
                token: action.payload.token,
                role: action.payload.role
              }
        default:
            return state;
    }
}