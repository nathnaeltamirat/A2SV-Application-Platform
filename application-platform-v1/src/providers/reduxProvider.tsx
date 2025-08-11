"use client";

import { Provider } from "react-redux";

import type { ReactNode } from "react";
import store from "@/store/store";

interface Props{
    children:ReactNode
}
const ReduxProvider = ({children}:Props) =>{
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;