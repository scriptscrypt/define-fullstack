import React from "react";
import logoImg from "../styles/DefineDEX.png";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const AuthPage = () => {
  return (
    <>
      <div className="flex flex-col items-center align-middle justify-center h-[100vh]">
        <div className="flex flex-row gap-4 items-center mb-16">
          <div className="text-3xl font-bold text-center text-[#51586f]">
            Get started with{" "}
          </div>
          <div className="flex align-middle items-center gap-4">
            <img className="w-8 h-8" src={logoImg} />
            <div className="logoDefine">DeFinE</div>
          </div>
        </div>

        <div className="flex flex-col items-center align-middle gap-4 border-2 border-[#f8f8f8] shadow-sm  rounded-md p-8 w-96">
          <div className=" text-center text-[#51586f]">
            {" "}
            Enter your upi id and click on connect, we'll make the magic happen
          </div>
          <input
            type="text"
            className="border-2 border-[#b9b9b9] rounded-md p-2 "
            placeholder="upi@bank"
          />
          <ConnectButton chainStatus="icon" />
        </div>
      </div>
    </>
  );
};

export default AuthPage;
