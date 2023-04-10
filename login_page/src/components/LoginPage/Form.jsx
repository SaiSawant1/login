import React, { useState } from "react";
import FormControl from "./FormControl";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export const Form = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    
  return (
    <form action="" onSubmit={(e)=>e.preventDefault()}>
      <FormControl type={"email"} placeholder={"Email ID"} icon={faUser}  setInput={setEmail} />
      <FormControl type={"password"} placeholder={"Password"} icon={faLock} setInput={setPassword}/>
      <button type="submit">Login</button>
    </form>
  );
};
