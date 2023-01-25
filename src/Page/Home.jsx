import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import AnnonceMent from "../Component/AnnonceMent";
import NavBar from "../Component/NavBar";

import { publicRequest, userRequest } from "../requestMethods";

const Container = styled.div`
  width: 95vw;
  margin: 2px auto;
  justify-content: center;
`;
const Header = styled.div`
  text-align: center;
`;
const AddReview = styled.button`
  background-color: lightgray;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  padding: 10px;
  font-weight: 600;

  &:hover {
    opacity: 0.5;
  }
`;
const HeaderTitle = styled.h1`
  padding: 2px;
`;
const Desc = styled.h4`
  font-weight: 300;
  margin-bottom: 10px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0px auto;
  padding: 20px;
`;
const Detail = styled.div``;

const HideForm = styled.button`
  background-color: lightgray;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  padding: 10px;
  font-weight: 600;

  &:hover {
    opacity: 0.5;
  }
`;

const FormWrapper = styled.div`
  max-width: 500px;
  margin: 2px auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.input`
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

const Contents = styled.input`
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
  margin-bottom: 15px;
`;

const SubmitAddPost = styled.button`
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
  margin-bottom: 15px;
`;
const Heading = styled.h2`
  text-align: center;
  margin: 0px auto;
  border-bottom: 1px solid black;
  font-style: italic;
  font-weight: 600;
`;
const Home = () => {
  const [show, setShow] = useState(false);
  const [rev, setrev] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    getreview();
  }, []);
  const getreview = async () => {
    try {
      const res = await publicRequest.get("/review");
      setrev(res.data);
    } catch (error) {
      alert(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      userName: user.username,
      title,
      content,
    };
    console.log(data);
    setContent("");
    setTitle("");
    try {
      const res = await userRequest.post("/review", data);
      getreview();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AnnonceMent />
      <NavBar />
      <Container>
        <Header>
          <HeaderTitle>REVIEW APP</HeaderTitle>
          <Desc>Write The Review Of An Movie</Desc>

          {show ? (
            <HideForm onClick={() => setShow(!show)}>Hide Form</HideForm>
          ) : (
            <AddReview onClick={() => setShow(!show)}>Add Review </AddReview>
          )}
        </Header>
        {show && user !== null ? (
          <FormWrapper>
            <Form>
              <Heading>ADD POST</Heading>
              <Title
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Contents
                type="text"
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <SubmitAddPost onClick={handleSubmit}>Submit</SubmitAddPost>
            </Form>
          </FormWrapper>
        ) : (
          <></>
        )}
        {user === null && (
          <p
            style={{
              textAlign: "center",
              color: "red",
              fontStyle: "italic",
              fontSize: "20px",
            }}
          >
            Login To Add Reviews
          </p>
        )}

        <Content>
          {[...rev]?.reverse().map((item) => {
            return (
              <Detail key={item._id}>
                <h2 style={{ fontSize: "28px", marginBottom: "8px" }}>
                  Movie_Name : {item.title}
                </h2>
                <p
                  style={{
                    textAlign: "justify",
                    fontWeight: "300",
                    fontSize: "18px",
                    lineHeight: "25px",
                  }}
                >
                  {item.content}
                </p>
                <span
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    color: "red",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  {item.userName}
                </span>
              </Detail>
            );
          })}
        </Content>
      </Container>
    </>
  );
};

export default Home;
