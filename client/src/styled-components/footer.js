import styled from "styled-components";
import { mobile } from "../Responsive";

export const Container = styled.div`
  display: flex;
  background-color: rgb(74, 74, 75);
  color: white;
  ${mobile({
    width: "100%",
    flexDirection: "column",
    height: "250px",
  })}
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Logo = styled.h1`
  ${mobile({
    fontSize: "20px",
    margin: "0px",
  })}
`;

export const Desc = styled.p`
  margin: 20px 0px;
`;

export const SocialContainer = styled.div`
  display: flex;
`;

export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  ${mobile({
    width: "30px",
    height: "30px",
  })}
`;

export const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: blue;
    font-weight: 600;
  }
`;

export const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

export const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
