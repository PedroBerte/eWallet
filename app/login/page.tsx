import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.png";

export default function Login() {
  return (
    <main className="flex flex-1 flex-row h-[100vh]">
      <div className="h-full w-[50%]">
        <div className="flex flex-row items-center gap-1">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <div className="flex flex-row text-lg">
            <p className="text-primary-green font-bold">e</p>
            <p>Wallet</p>
          </div>
        </div>
      </div>
      <div className="h-full w-[50%] bg-secundary-green"></div>
    </main>
  );
}
