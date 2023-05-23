import React from "react";
import "../css/main.css";
import styled from "styled-components";
import { getThemeValue } from "../ThemeProvider";
import { HTMLAttributes } from "react";

export interface InputAttributes<T> extends HTMLAttributes<T> {
    accent?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
}

export const AccentFlag = (props: InputAttributes<HTMLSpanElement>) => {
    return (
        <AccentFlagElement aria-hidden="true" viewBox="0 0 15 11" fill="none" {...props}>
            <path
                d="M1 4.5L5 9L14 1"
                strokeWidth="2"
                stroke="#fff"
            />
        </AccentFlagElement>
    );
};


const AccentFlagElement = styled.svg<InputAttributes<HTMLSpanElement>>`
    display: ${(props) => {
        if (props.accent !== "error" && props.accent !== "warning" && props.accent !== "info") {
          return "none";
        }
        return "inline-block";
      }};
    background-color: ${(props) => {
        return (
            props.theme[props.accent || "info"] ??
            getThemeValue(props.accent || "info")
        );
        }
    };
`;