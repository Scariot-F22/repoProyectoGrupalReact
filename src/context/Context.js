import { createContext, useContext } from "react";

const CustomizeContext = createContext();

export function useCustomizeContext() {
  return useContext(CustomizeContext);
}

export default CustomizeContext;
