import React, { useRef, useState } from "react";
import { v4 } from "uuid";
import { Sign } from "../../valuesObject/Sign";
import { store } from "redux/store";
import { signup } from "redux/actions/user.action";

export function SignUp() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<Sign>({
    name: "John",
    email: `${v4()}@email.com`,
    password: "AZErty132456878",
    role: "ADMIN",
    token:"",
    isSignIn:false
  });

  const handleForm = async (e) => {
    e.preventDefault()      
    const emailInput = form.current[0] as HTMLInputElement;
    const passwordInput = form.current[1] as HTMLInputElement;
    const nameInput = form.current[2] as HTMLInputElement;
    const data = {
      email: emailInput.value,
      password:passwordInput.value,
      token:"",
      name: nameInput.value,
      role: formData.role,
      isSignIn: false
    }
    store.dispatch(await signup(data))
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={e=>handleForm(e)}>
      <label htmlFor="email">My Email: </label>
      <input
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <label htmlFor="password">My password: </label>
      <input
        type="text"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <label htmlFor="name">My Name: </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <button className="sign-button">SignUp</button>
      </form>
    </div>
  );
}
