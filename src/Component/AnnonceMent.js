import styled from "styled-components";

const Container = styled.div`
  padding: 0px;
  margin-top: 0px;
  height: 22px;
  background-color: teal;
`;
const AnnonceMents = styled.h5`
  padding: 0px;
  margin: 0px;
  color: white;
  text-align: center;
`;

const AnnonceMent = () => {
  return (
    <Container>
      <AnnonceMents>
        <marquee scrollamount="8">⚡---Dont Post The Spoiler---⚡</marquee>
      </AnnonceMents>
    </Container>
  );
};

export default AnnonceMent;
