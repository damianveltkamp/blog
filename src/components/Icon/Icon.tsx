import { ComponentClass } from "react";
import { IconContainer } from "./styles/Icon.styles";

type IconContainerProps = {
  icon: ComponentClass;
  width?: string;
  color?: string;
};

export const Icon = ({
  icon,
  width = "25px",
  color = "#fff",
}: IconContainerProps) => {
  const Icon = icon;

  return (
    <IconContainer width={width} color={color}>
      <Icon />
    </IconContainer>
  );
};
