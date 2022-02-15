import { css } from "styled-components";

export const mobile = (props) => {
  return css`
  @media screen and (max-width:500px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media screen and (max-width: 1300px) {
      ${props}
    }
  `;
};
