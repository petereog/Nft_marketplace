import Image from "next/image";
import logo from "/public/Group 9.png";

import { ConnectWallet } from "@thirdweb-dev/react";
export default function Nav() {
  return (
    <div className=" flex text-center justify-center items-center pt-12 h-[3em]">
      <div className="mx-auto">
        <Image className="mx-auto" src={logo} alt="/" width={128} height={38} />
      </div>
      <div className="flex mx-auto  ">
        <a className="p-5 text-white text-[1rem] cursor-pointer  ">
          Marketplace
        </a>
        <a className="p-5 text-white text-[1rem]">Collections</a>
        <a className="p-5 text-white text-[1rem]">Community</a>
        <a className="p-5 text-white text-[1rem]">Create</a>
      </div>
      <div className="mx-auto ">
        <ConnectWallet accentColor="#2563EB" border="1px" colorMode="light" />
      </div>

      {/*response*/}
    </div>
  );
}
