import React from "react";
import "./css/main.css";
import styled from "styled-components";
import { getThemeValue } from "./ThemeProvider";

export type CheckBoxProps = React.HTMLAttributes<HTMLInputElement> & {
  type: "checkbox";
  variant?: "outlined" | "contained";
  accent?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  disabled?: boolean;
  href?: string;
  shape?: "square" | "rounded";
};

export const CheckBox = (props: CheckBoxProps) => {
  return <CheckBoxElement {...props} />;
};

const CheckBoxElement = styled.input<CheckBoxProps>`
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: ${(props) => {
    if (props.variant !== "outlined") return "none";
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
      if (props.variant !== "outlined") return "none";
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
`;
