import React from "react";
import { LiFiWidget, WidgetConfig } from "@lifi/widget";

const containerStyle = {
  border: "1px solid rgb(234, 234, 234)",
  borderRadius: "16px",
};

const widgetConfig = {
  containerStyle: {
    border: "1px solid rgb(234, 234, 234)",
    borderRadius: "16px",
  },
};

const LifiPage = () => {
  return (
    <>
      {/* <LiFiWidget walletManagement={"metamask"} integrator="DeFinE" variant="expandable" config={containerStyle}/> */}

      <LiFiWidget integrator="DeFinE DEX" config={widgetConfig} />
    </>
  );
};

export default LifiPage;
