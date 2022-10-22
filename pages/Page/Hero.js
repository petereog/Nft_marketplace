import Image from "next/image";

import disc from "/public/Discover, collect, and sell Extraordinary NFTs (2).png";
import ape from "/public/Group 169.png";
import text from "/public/WALLET SUPPORT (1).png";

export default function Hero() {
  return (
    <div className="text-center pt-12 justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="mx-auto pl-24">
          <Image
            className="mx-auto"
            src={disc}
            alt="/"
            width={500}
            height={250}
          />
          <p className="text-white   text-[20px] text-start">
            The leading NFT Marketplace On Ethereum<br></br>Home To The Next
            Generation Of Digital Creators<br></br>Discover The Best Nft
            Collections
          </p>
          <div className="text-start mt-10">
            <button className="w-36 hover  h-12 hover:bg-black font-semibold hover:text-white text-white rounded-full bg-blue-600 text-[14px] ">
              Explore
            </button>
            <button className="w-36 ml-6 hover h-12 font-semibold hover:bg-black hover:text-white text-white border rounded-full bg-transparent text-[14px]">
              Create
            </button>
          </div>
          <div className="flex">
            <div className="mt-12">
              <h1 className="text-[32px] text-white font-bold">432k+</h1>
              <p className="text-white mt-3 ">Collections</p>
            </div>
            <div className="mt-12 ml-6">
              <h1 className="text-[32px] text-white font-bold">200k+</h1>
              <p className="text-white mt-3 ">Artists</p>
            </div>
            <div className="mt-12 ml-6">
              <h1 className="text-[32px] text-white font-bold">10k+</h1>
              <p className="text-white mt-3 ">Community</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            className="mx-auto"
            src={ape}
            alt="/"
            width={800}
            height={800}
          />
        </div>
      </div>
      <div>
        <Image
          className="mx-auto"
          src={text}
          alt="/"
          width={800}
          height={150}
        />
      </div>
    </div>
  );
}
