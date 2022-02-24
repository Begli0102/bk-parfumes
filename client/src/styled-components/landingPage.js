import styled from "styled-components";
import { mobile } from "../Responsive";
import { tablet } from "../Responsive";
import img from "../images/boss.jpg";

export const Container = styled.div`
  background-image: url(${img});
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100vw;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 3px 20px;
  background-color: transparent;
  color: crimson;
  text-decoration: underline;
  border: 2px solid crimson;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  position: absolute;
  transition: 0.2s ease;
  transition: backfround-color, color;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: crimson;
  }
`;

export const Loading = styled.h2`
  font-weight: bold;
  margin-bottom: 50px;
`;

export const TypingEffect =styled.h3`
color:white;
width:'80%';

${mobile({
  
  width: "80%",
})}
`;