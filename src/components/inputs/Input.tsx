import React from "react";
import "../css/main.css";
import styled from "styled-components";
import { getThemeValue } from "../ThemeProvider";
import { HTMLAttributes } from "react";

export interface InputAttributes<T> extends HTMLAttributes<T> {
    accent?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
}