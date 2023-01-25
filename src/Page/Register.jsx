import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  max-width: 500px;
  justify-content: center;
  margin: 10vh auto;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: lightgray;
  border-radius: 15px;
`;

const UserName = styled.input`
  text-aligin: center;
  align-items: center;
  justify-content: center;
  width: 75%;
  height: 20px;
  padding: 20px;
  margin: 12px auto;
  border-bottom: 2px solid balck;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 20px;
  border-radius: 15px;
`;

const Email = styled.input`
  width: 75%;
  height: 20px;
  padding: 20px;
  margin: 12px auto;
  border-bottom: 2px solid balck;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 20px;
  border-radius: 15px;
`;

const Password = styled.input`
  width: 75%;
  height: 20px;
  padding: 20px;
  margin: 12px auto;
  border-bottom: 2px solid balck;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 20px;
  border-radius: 15px;
`;

const ConformPassword = styled.input`
  width: 75%;
  height: 20px;
  margin: 12px auto;
  padding: 20px;
  border-bottom: 2px solid balck;
  border: none;
  outline: none;
  font-weight: 400;
  font-size: 20px;
  border-radius: 15px;
`;

const SubmitButton = styled.button`
  width: 50%;
  height: 40px;
  border: none;
  background-color: gray;
  margin: 12px auto;
  font-size: 20px;
  border-radius: 20px;

  &:hover {
    opacity: 0.8;
  }
`;
const Heading = styled.h2`
  margin: 0px auto;
  border-bottom: 1px solid black;
  font-style: italic;
  font-weight: 600;
`;

const Register = () => {
  const navigate = useNavigate();
  const [username, SetUserName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [conformPassword, SetConformPassword] = useState("");
  const data = {
    username,
    email,
    password,
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (password === conformPassword) {
      try {
        const res = await publicRequest.post("/auth/register", data);
        console.log(res);
        navigate("/login");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("password worng");
    }
  };
  return (
    <Container>
      <Form>
        <Heading>Register</Heading>

        <UserName
          placeholder="username"
          type="text"
          name="name"
          value={username}
          onChange={(e) => SetUserName(e.target.value)}
          required
        />
        <Email
          placeholder="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => SetEmail(e.target.value)}
          required
        />
        <Password
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => SetPassword(e.target.value)}
        />
        <ConformPassword
          placeholder="conformPassword"
          name="password"
          type="password"
          value={conformPassword}
          onChange={(e) => SetConformPassword(e.target.value)}
        />
        <SubmitButton onClick={handleRegister}>SUBMIT</SubmitButton>
      </Form>
    </Container>
  );
};

export default Register;
