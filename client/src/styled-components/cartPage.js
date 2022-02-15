import styled from "styled-components";
import { mobile } from "../Responsive";
import { tablet } from "../Responsive";

export const Container = styled.div`
  width: 94%;
  margin: 0 auto;
  ${mobile({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
  ${tablet({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  })}
`;

export const Title = styled.h1`
  text-align: center;
  margin: 30px auto;
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

export const Info = styled.div`
  flex: 3;
  margin: 20px;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 20px;
  ${mobile({ display: "flex", flexDirection: "column" })}
  ${tablet({
    display: "flex",
    flexDirection: "column",
    margin: "20px auto",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  position: relative;
  ${mobile({ display: "flex", flexDirection: "column" })}
`;

export const Image = styled.img`
  width: 300px;
  height: 250px;
  border: 10px;
  ${mobile({ justifyContent: "center", height: "200px", marginBottom: "20px" })}
`;

export const Item = styled.p`
  position: absolute;
  top: -20px;
  right: 10px;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  &:hover {
    color: crimson;
    font-weight: bold;
  }
`;

export const ProductName = styled.span`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  ${tablet({ margin: "20px auto" })}
`;

export const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  flex: 3;
`;
export const Description = styled.p`
  width: 80%;
  font-size: 1.1rem;
  ${mobile({ width: "90%", justifyContent: "center", margin: "20px auto" })}
`;
export const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 400;
  display: flex;
  align-items: center;
  ${mobile({ display: "flex", justifyContent: "center" })}
`;

export const Icon = styled.div`
  ${tablet({})}
  ${mobile({})}
`;

export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin: 25px auto;
  ${mobile({ width: "90%", margin: "20px auto" })}
  ${tablet({ display: "flex", flexDirection: "column", margin: "40px auto" })}
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
`;

export const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  margin-top: 150px;
  text-transform: uppercase;
  ${tablet({ margin: "50px auto " })}
  ${mobile({ marginBottom: "30px " })}
`;
