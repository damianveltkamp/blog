import styled from "@emotion/styled";

export const IconContainer = styled("div")<{
  width: string;
  color: string;
}>`
  width: ${({ width }) => `${width}`};
  height: auto;
  color: ${({ color }) => `${color}`};
`;
