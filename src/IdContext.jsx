import React, { createContext, useState } from "react";

export const IdContext = createContext();

export function IdProvider(props) {
  const [id, setId] = useState("initial-value");

  return (
    <IdContext.Provider value={[id, setId]}>
      {props.children}
    </IdContext.Provider>
  );
}
