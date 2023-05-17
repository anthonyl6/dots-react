import React, { useState } from "react";
import "./css/main.css";
import styled from "styled-components";
import { getThemeValue } from "./ThemeProvider";

export type CheckBoxProps = React.HTMLAttributes<HTMLInputElement> & {
  children: React.ReactNode;
  variant?: "text" | "outlined" | "contained";
  accent?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  disabled?: boolean;
  href?: string;
  shape?: "square" | "rounded" | "pill";
  size?: "small" | "medium" | "large";
};

export const CheckBox = (props: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label>
      <InputElement type="checkbox" onChange={() => {
        setIsChecked(!isChecked);
      }}/>
      <CheckBoxElement style={isChecked ? CheckBoxElementActive : {}} {...props} />
    </label>
  );
};

/* taken from https://css-tricks.com/inclusively-hidden/ */
const CheckBoxElement = styled.span<CheckBoxProps>`
  display: inline-block;
  height: 20px;
  width: 20px;
  background: #fff;
  border: 2px #ddd solid;
  margin-right: 4px;
`;

const InputElement = styled.input`
  position: absolute;
  opacity: 0;
`;

const CheckBoxElementActive = {
  background: "#111"
}
