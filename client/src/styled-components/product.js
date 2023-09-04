import styled from "styled-components";
import { mobile } from "../Responsive";
import { tablet } from "../Responsive";

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  box-shadow: 10px 10px 5px rgb(161, 159, 159);
  // background-color: #8EC5FC;
  // background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
  ${mobile({
    maxWidth: "300px",
    margin: "15px",
    height: "400px",
  })}
  ${tablet({
    maxWidth: "330px",
    margin: "20px",
    height: "500px",
  })}
`;

export const Image = styled.img`
  border: 10%;
  margin: 15px;
  width: 300px;
  height: 220px;
  transition: transform 900ms;

  &:hover {
    transform: scale(1.1);
  }
  ${mobile({
    width: "250px",
    height: "200px",
  })}
`;

export const Wrapper = styled.div`
  //  background: rgb(161, 159, 159);
  padding: 15px 5px;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
// const Hr = styled.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;
export const Title = styled.p`
  margin: 0;
  font-spacing: 1rem;
  font-size: 1.5rem;
  font-weight: 300;
  color: black;
`;

export const Description = styled.p`
  margin: 0;
  text-align: center;
  padding: 10px;
  font-size: 18px;
  color: gray;
`;

export const Price = styled.p`
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: 600;
  color: #1c352d;
`;

export const Button = styled.button`
  padding: 15px auto;
  border: none;
  outline: none;
  width: 15rem;
  height: 40px;
  color: #fff;
  background-color: black;
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 30px;
  &:hover {
    transform: scale(1.1);
  }
  ${tablet({ marginBottom: "30px" })}
`;
