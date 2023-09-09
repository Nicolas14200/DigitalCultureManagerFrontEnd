import { signin } from "redux/actions/user.action";
import { store } from "redux/store";

export interface SignInProps {
    email: string;
    password: string;
  }
  export class SignInUseCase {
    constructor(
      private readonly _store = store
    ) {}
  
    async execute(payload: SignInProps) {
      try {
        const data = {
          email: payload.email,
          password: payload.password,
          token:"",
          name:"",
          role:"",
          isSignIn: false
        }
        return this._store.dispatch(await signin(data))
      } catch (e) {
          throw new Error("BAD SIGNIN => USECASE")
      }
    }
  }