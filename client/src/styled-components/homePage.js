import styled from "styled-components";
import { mobile } from "../Responsive";
import { tablet } from "../Responsive";

export const Container = styled.div`
  width: 98%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 20px;
  padding: 0;
  flex-wrap: wrap;
  
  
  ${mobile({
    display: "flex",
    flexDirection: "column",
    height: "auto",
    width: "100%",
  })}
  ${tablet({ width: "90%",display:'flex', flexWrap:'wrap' })}
`;
