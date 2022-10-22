import Image from "next/image";
import art from "/public/art1.jpg";
import art2 from "/public/bit.jpg";
import art3 from "/public/tz.jpg";

export default function Article() {
  return (
    <div className="text-center">
      <div className="text-center pb-12 ml-[10rem]  mr-[10rem] flex">
        <div className="w-[300px]    text-center   bg-transparent  mx-auto rounded-xl   bg-blue-100 bg-opacity-5">
          <Image className="mx-auto rounded-t-xl " src={art} alt="/" />
          <p className=" text-start pl-5 font-semibold text-white text-[17px]">
            We've Lowered Marketplace fees <br></br> on all your favorite NFTs
          </p>
          <p className=" text-start pl-5 font-semibold text-gray-400 pt-5 pb-5 text-[10px]">
            January 23, 2022
          </p>
        </div>
        <div className="w-[300px]   text-center   bg-transparent  mx-auto rounded-xl  bg-blue-100 bg-opacity-5">
          <Image className="mx-auto rounded-t-xl  " src={art3} alt="/" />
          <p className=" text-start pl-5 font-semibold text-white text-[17px]">
            Your Ultimate Guild To Getting <br></br> With Nfts On Rarible
          </p>
          <p className=" text-start pl-5 font-semibold text-gray-400 pt-5 pb-5 text-[10px]">
            Appril 03, 2022
          </p>
        </div>
        <div className="w-[300px]    text-center   bg-transparent  mx-auto rounded-xl  bg-blue-100 bg-opacity-5">
          <Image className="mx-auto rounded-t-xl  " src={art2} alt="/" />
          <p className=" text-start pl-5 font-semibold text-white text-[17px]">
            Why Community Marketplaces <br></br> Are The Future Of NFT Trading
          </p>
          <p className="  text-start pl-5 font-semibold text-gray-400 pt-5 pb-5 text-[10px]">
            July 7, 2022
          </p>
        </div>
      </div>
      <button className="w-[10em]  hover hover:bg-black hover:text-white  mb-3 mt-7 hover h-10 font-semibold border text-white rounded-full bg-transparent text-[14px]">
        See More
      </button>
    </div>
  );
}
