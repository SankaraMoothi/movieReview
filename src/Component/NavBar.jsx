import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../Redux/userRedux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 44px;
  margin-bottom: 12px;
  display: flex;
  background-color: lightgray;
`;

const Logo = styled.img`
  padding: 12px;
  width: 60px;
  object-fit: contain;
  height: 40px;
`;

const Name = styled.h2`
  font-style: italic;
  padding: 12px;
`;
const RightFunctions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  flex: 1;
`;
const Functions = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  gap: 13px;
`;

const SignIn = styled.h4`
  cursor: pointer;
`;
const LogOuts = styled.h4`
  padding: 12px;
  cursor: pointer;
`;
const Register = styled.h4`
  padding: 12px;
  cursor: pointer;
`;
const Admin = styled.h4`
  padding: 12px;
  cursor: pointer;
`;

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <RightFunctions>
        <Logo src="https://www.seekpng.com/png/full/14-147060_naruto-logo-design-pictures-on-t-shirts-and.png" />
        <Name>lulu</Name>
      </RightFunctions>
      <Functions>
        {user !== null ? (
          <LogOuts onClick={() => dispatch(logOut())}>Logout</LogOuts>
        ) : (
          <SignIn onClick={handleLogin}>Login</SignIn>
        )}
        {user !== null && user.isAdmin ? (
          <Admin>Admin</Admin>
        ) : (
          <Register onClick={handleRegister}>Register</Register>
        )}
      </Functions>
    </Container>
  );
};

export default NavBar;
