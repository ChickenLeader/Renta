import Head from "next/head";
import React from "react";
import { ImportantVars } from "../../constants/ImportantVars";

const ScreenWrapper = ({ children, pageTitle = "", pageDescription = "" }) => {
  return (
    <div style={{ flex: 1 }}>
      <Head>
        {pageTitle ? (
          <title>{`${pageTitle} | ${ImportantVars.websiteName}`}</title>
        ) : null}
        {pageDescription ? (
          <meta name="description" content={pageDescription} />
        ) : null}
      </Head>
      {children}
    </div>
  );
};

export default ScreenWrapper;
