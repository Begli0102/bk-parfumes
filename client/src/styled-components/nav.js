import styled from "styled-components";
import { mobile } from "../Responsive";
import { tablet } from "../Responsive";

export const Container = styled.div`
  height: 60px;
  background-color: rgb(74, 74, 75);
  color: white;
  ${mobile({})}
  ${tablet({ width: "100%", height: "60px" })}
`;
export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "5px" })}
`;
export const Left = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 30px;
  padding-bottom: 10px 0px;
  ${mobile({ width: "100%", marginLeft: "10px", padding: "12px" })}
`;
export const Logo = styled.h1`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding-bottom: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  ${mobile({ fontSize: "1rem" })}
`;

export const Right = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  margin-right: 20px;

  ${mobile({ width: "50%", marginRight: "10px", padding: "16px" })}
`;
export const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  text-decoration: none;
  outline: none;
  color: white;
  &:hover {
    color: aqua;
  }
  ${mobile({
    textTransform: "uppercase",
    fontSize: ".7rem",
    fontWeight: "bold",
    marginLeft: "10px",
  })}
`;

export const Loading = styled.h2`
  font-weight: bold;
  margin-bottom: 50px;
`;
