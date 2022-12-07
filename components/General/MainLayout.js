import Head from "next/head";
import React from "react";
import { ImportantVars } from "../../constants/ImportantVars";
import Toast from "./Toast";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>{ImportantVars.websiteName}</title>
        <meta name="description" content={ImportantVars.websiteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        {children}
      </div>

      {/* MODALS & ALERTS */}
      <Toast />
    </div>
  );
};

export default MainLayout;
