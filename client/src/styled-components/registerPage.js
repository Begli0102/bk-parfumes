import styled from "styled-components";
import { mobile } from "../Responsive";
import { tablet } from "../Responsive";
import img from "../images/boss.jpg";

export const Container = styled.div`
  background-image: url(${img});
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
  
`;
export const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  ${mobile({ width: "75%" })}
`;
export const Title = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  color: white;
  letter-spacing: 0.2rem;
  text-align: center;
`;
export const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Input = styled.input`
  flex: 1;
  min-width: 30%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  outline: none;
`;
export const Agreement = styled.span`
  margin: 20px 0px;
  color:white;
`;
export const Button = styled.button`
  padding: 7px;
  width: 22%;
  font-size: 18px;
  text-transform: uppercase;
  background-color: teal;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    color: black;
  }
  ${mobile({ width: "50%" })}
  ${tablet({ width: "50%" })}
`;

export const Error = styled.p`
  color: crimson;
`;

export const Success = styled.p`
  background-color: white;
  color: green;
  width: auto;
  text-align: center;
  height: auto;
  font-size: 24px;
  font-weight: 600;
  padding: 3px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const Loading = styled.h2`
  font-weight: bold;
  margin-bottom: 50px;
`;
