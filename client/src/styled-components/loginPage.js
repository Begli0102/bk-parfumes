import styled from "styled-components";
import { mobile } from "../Responsive";
import { tablet } from "../Responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);

  filter: brightness(75%);
  ${mobile({
    display: "flex",
    justifyContent: "center",
    margin: "0px auto",
    width: "100%",
  })};
`;
export const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  ${mobile({ width: "75%" })}
`;
export const Title = styled.h1`
  font-size: 24px;

  text-transform: uppercase;
  color: white;
  letter-spacing: 0.2rem;
`;
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const Input = styled.input`
  min-width: 100%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
`;

export const Button = styled.button`
  padding: 7px;
  width: 100px;
  margin-top: 20px;
  font-size: 18px;
  text-transform: uppercase;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
`;

export const Li = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  color: white;
`;

export const Error = styled.p`
  color: crimson;
`;

export const Success = styled.p`
  background-color: white;
  color: green;
  width: auto;
  text-align: center;
  height: 40px;
  font-size: 24px;
  font-weight: 600;
  padding: 3px;
  border-radius: 10px;
`;

export const Loading = styled.h2`
  font-weight: bold;
  margin-bottom: 50px;
`;
