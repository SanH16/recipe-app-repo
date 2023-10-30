import { Button, Input } from "antd";
import { auth } from "../configs/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(auth?.currentUser?.email);
  const createAccount = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="Password.." onChange={(e) => setPassword(e.target.value)} />
      <Link to="/login">
        <Button onClick={createAccount}>SignUp</Button>
      </Link>
    </div>
  );
};
