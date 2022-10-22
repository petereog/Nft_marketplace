import Image from "next/image";
import log from "/public/Group 9.png";

export default function Footer() {
  return (
    <div className="bg-[#060230] text-center mt-5 pt-[5em]">
      <div className="mx-auto">
        <h1 className="text-[4em] font-sans  font-bold text-white">
          Get More Update
        </h1>
        .
        <p className="text-white ">
          Join our Mailing list to stay in the loop with our newest feature
          releases, Nft drops and tips and tricks
        </p>
        <div className="pt-10 pb-10">
          <input
            className="w-[30em] pl-5 rounded-[5em] h-[3em] "
            placeholder="Your EMail...."
          />
          <button className="bg-blue-500 text-white ml-2 h-[3em] rounded-full w-[5em]">
            I'm in
          </button>
        </div>
      </div>
      <hr className="w-[70em] pb-10 pt-10  mx-auto"></hr>

      {/*web setter*/}
      <div className="flex text-center pb-12">
        <div className="text-start pl-32 justify-center items-center">
          <Image className=" " src={log} alt="/" width={100} height={35} />
          <div className="mx-auto justify-center items-center">
            <p className="text-start ml-22 text-white">
              The Leading NFT Marketplace On Ethereum <br></br> Home To The Next
              Generation Of Digital Creators.<br></br> DIscover The Best NFt
              Colector
            </p>
          </div>
        </div>
        <div className="mx-auto justify-center items-center">
          <h1 className="text-[29px] text-white  mr-32 font-semibold">
            Marketplace
          </h1>
          <div className="mx-auto justify-center  items-center">
            <p className="text-start text-[20px] pt-5 text-white">
              <a>Explore</a>
            </p>
            <p className="text-start text-[20px] pt-5 text-white">
              <a>Article</a>
            </p>
            <p className="text-start text-[20px] pt-5 text-white">
              <a>How it Works</a>
            </p>
            <p className="text-start text-[20px] pt-5 text-white">
              <a>Helps</a>
            </p>
          </div>
        </div>
        <div className="mx-auto justify-center items-center">
          <h1 className="text-[29px] text-white  mr-32 font-semibold">Links</h1>
          <div className="mx-auto justify-center  items-center">
            <p className="text-start text-[20px] pt-5 text-white">
              <a>Tokens</a>
            </p>
            <p className="text-start text-[20px] pt-5 text-white">
              <a>Api</a>
            </p>
            <p className="text-start text-[20px] pt-5 text-white">
              <a>Big Bounty</a>
            </p>
            <p className="text-start text-[20px] pt-5 text-white">
              <a>Become Partner</a>
            </p>
          </div>
        </div>
      </div>
      <div className="text-center pb-8 pr-24  mx-auto">
        <p className="text-white">2022 ENDFT. All Right Reserved</p>
      </div>
    </div>
  );
}
