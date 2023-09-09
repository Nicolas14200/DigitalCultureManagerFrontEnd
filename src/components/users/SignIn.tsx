import React, { useRef, useState } from "react";
import { Sign } from "../../valuesObject/Sign";
import {SignInUseCase} from "../../useCases/SignIn"

const signInUseCase = new SignInUseCase()

export function SignIn() {

  const form = useRef<HTMLFormElement>(null);

  const [state, setState] = useState<Sign>({
    email:"3d048a07-c23e-42ba-9b0d-8067335d57e9@email.com",
    password:"AZErty132456878",
    token:"",
    name:"",
    role:"",
    isSignIn: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    try{
      e.preventDefault()
      if (form.current){
        const emailInput = form.current[0] as HTMLInputElement;
        const passwordInput = form.current[1] as HTMLInputElement;
        
        const response = await signInUseCase.execute({
          email:  emailInput.value,
          password: passwordInput.value
        })
  
        if (response.payload.token){
          setState({
            email: response.payload.email,
            password:response.payload.password,
            token:response.payload.token,
            name:response.payload.name,
            role:response.payload.role,
            isSignIn: true
          })
        }
      }
    }catch(error){}
  }

  return (
    <div className="form-container">

      <form ref={form} onSubmit={e=>handleForm(e)}>

        <label htmlFor="email">My Email: </label>
        <input
          type="text"
          id="email"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <label htmlFor="password">My password: </label>
        <input
          type="text"
          id="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button className="sign-button">SignIn</button>
      </form>
    </div>
  );
}
