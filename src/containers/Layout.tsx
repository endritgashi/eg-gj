import React from 'react';
import Header from './Header';
import Meta from "./Meta";

const Layout = ({ children, title = '', url = '', keywords = '', withHeader = true }) => {
  return (
    <>
      <Meta title={title} url={url} keywords={keywords} />
      {withHeader && <Header />}
      <main role="main">{children}</main>
    </>
  );
};

export default Layout;
