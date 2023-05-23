import React, { useState } from "react";
import "../css/main.css";
import styled from "styled-components";
import { getThemeValue } from "../ThemeProvider";
import { InputAttributes } from "./Input";

export type CheckBoxProps = InputAttributes<HTMLInputElement> & {
  variant?: "contained";
  accent?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  disabled?: boolean;
  href?: string;
  shape?: "square" | "rounded" | "pill";
  size?: "small" | "medium" | "large";
};

// https://dev.to/tomdohnal/custom-checkbox-in-react-animated-and-accessible-3jk9
export const CheckBox = (props: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label>
      <InputElement type="checkbox" disabled={props.disabled} onChange={() => {
        setIsChecked(!isChecked);
      }}/>
      <CheckBoxElement aria-hidden="true" viewBox="0 0 15 11" fill="none" style={isChecked ? CheckBoxElementActive : {}} {...props}>
        <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={isChecked ? "#fff" : "none"} // only show the checkmark when `isCheck` is `true`
        />
      </CheckBoxElement>
    </label>
  );
};

const CheckBoxElement = styled.svg<CheckBoxProps>`
  display: inline-block;
  height: ${(props) => {
    if (props.size === "small") return "20px";
    if (props.size === "large") return "40px";
    return "30px";
  }};
  width: ${(props) => {
    if (props.size === "small") return "20px";
    if (props.size === "large") return "40px";
    return "30px";
  }};
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border-radius: ${(props) => {
    if (props.shape === "square" || !props.shape) return "0.375em";
    if (props.size === "small") return "1.25em";
    if (props.size === "large") return "3em";
    return "2em";
  }};
  border: ${(props) => {
    // if (props.variant !== "outlined") return "none";
    return `1px solid ${
      props.theme[props.accent || "info"] ??
      getThemeValue(props.accent || "info")
    }`;
  }};
  background-color: ${(props) => {
    if (props.variant === "contained")
      return (
        props.theme[props.accent || "info"] ??
        getThemeValue(props.accent || "info")
      );
    return "transparent";
  }};
  color: ${(props) => {
    if (props.variant === "contained") return "#fff";
    return (
      props.theme[props.accent || "info"] ??
      getThemeValue(props.accent || "info")
    );
  }};

  &:disabled {
    border: ${(props) => {
      // if (props.variant !== "outlined") return "none";
      return `1px solid ${props.theme.disabled ?? getThemeValue("disabled")}`;
    }};
    background-color: ${(props) => {
      if (props.variant === "contained")
        return props.theme.disabled ?? getThemeValue("disabled");
      return "transparent";
    }};
    color: ${(props) => {
      if (props.variant === "contained") return "#fff";
      return props.theme.disabled ?? getThemeValue("disabled");
    }};
  }

  &:hover:not(:disabled) {
    filter: drop-shadow(
        0em 0.125em 0.625em
          ${(props) =>
            props.theme[props.accent || "info"] ??
            getThemeValue(props.accent || "info")}80
      )
      brightness(110%);
  }
  &:active:not(:disabled) {
    filter: drop-shadow(
        0em 0.0625em 0.3125em
          ${(props) =>
            props.theme[props.accent || "info"] ??
            getThemeValue(props.accent || "info")}80
      )
      brightness(80%);
  }
`;

const InputElement = styled.input`
  position: absolute;
  opacity: 0;
`;

const CheckBoxElementActive = {
  // background: "${}"
}
