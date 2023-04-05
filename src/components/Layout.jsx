import React from "react";
import { Navbar } from ".";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
