import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "./FormControl";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export const Form = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
  return (
    <form action="" onSubmit={()=> navigate('/home')}>
      <FormControl type={"email"} placeholder={"Email ID"} icon={faUser}  setInput={setEmail} />
      <FormControl type={"password"} placeholder={"Password"} icon={faLock} setInput={setPassword}/>
      <button type="submit">Login</button>
    </form>
  );
};
