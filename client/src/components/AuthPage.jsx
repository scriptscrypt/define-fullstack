import React from "react";
import logoImg from "../styles/DefineDEX.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const AuthPage = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center ">
          <div className="text-3xl font-bold text-center text-[#51586f]">
            Get started with{" "}
          </div>
          <div className="flex align-middle items-center gap-4">
            <img className="w-8 h-8" src={logoImg} />
            <div className="logoDefine">DeFinE</div>
          </div>
        </div>
        <ConnectButton />
      </div>
    </>
  );
};

export default AuthPage;
