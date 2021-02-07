import React from 'react';
import Header from './Header';
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <main role="main">{children}</main>
    </>
  );
};

export default Layout;
