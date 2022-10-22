import Image from "next/image";
import bored from "/public/Rectangle 11.png";
import a from "/public/xx1.jpg";
import b from "/public/XX2.jpg";
import c from "/public/punk.jpg";
import d from "/public/punka.jpg";
import e from "/public/bear.png";
import f from "/public/invisible.jpg";

export default function Carousel() {
  return (
    <div className="text-center mt-12 ">
      <div className="mx-auto">
        <h1 className="font-bold p-12 text-[3em] text-transparent bg-clip-text bg-gradient-to-br  from-green-500 to-purple-700">
          Trending NFTs
        </h1>
      </div>
      {/*card 1*/}
      <div className="flex text-center ml-10 mr-10 gap-5 ">
        <div className="w-[300px] bg-transparent  hover hover:h-[em] rounded-xl duration-300 hover  hover:scale-105 bg-blue-100 bg-opacity-10">
          <div className="w-[280px] h-[200px]text-center mx-auto pt-3">
            <Image className="mx-auto " src={e} alt="/" />
          </div>
          <div className="flex">
            <div className="h-12 w-12 pt-8 mx-auto ">
              <Image
                className="mx-auto  rounded-xl "
                src={a}
                width={100}
                height={100}
                alt="/"
              />
            </div>

            <div className="ml-5  pt-12 mr-5">
              <h6 className="text-blue-600  font-bold text-[15px]">
                HAPE #8064
              </h6>
              <p className="text-[10px] text-white text-start">HAPE PRIME</p>
            </div>
            <div className="w-7 ml-5 h-7 pt-12 mx-auto">
              <Image className="mx-auto  rounded-full" src={b} alt="/" />
            </div>
          </div>
          <div className="flex text-center">
            <div className="mx-auto">
              <h6 className="font-semibold text-white text-[13px]">15.8ETH</h6>
              <p className="text-[10px] text-white text-start">latest Bid</p>
            </div>
            <div className="mx-auto ">
              <h6 className="  font-semibold text-white text-[13px]">9.5ETH</h6>
              <p className="text-[10px] text-white text-start">from</p>
            </div>
            <div className="mx-auto ml-10 ">
              <h6 className=" font-semibold text-white text-[13px]">
                $180,345
              </h6>
              <p className="text-[10px] text-green-500 text-start">+12.45%</p>
            </div>
          </div>
          <div className="">
            <button className="w-[16em]  mb-3 mt-7 hover hover:bg-black hover:text-white  h-8 font-semibold bg-blue-500 text-white rounded-full bg-transparent text-[14px]">
              Collect Now
            </button>
          </div>
        </div>

        {/*card 2*/}
        <div className="w-[300px]  bg-transparent   hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-10">
          <div className="w-[280px] h-[200px]text-center mx-auto pt-3">
            <Image className="mx-auto " src={c} alt="/" />
          </div>
          <div className="flex">
            <div className="h-12 w-12 mx-auto ">
              <Image
                className="mx-auto  rounded-xl "
                src={d}
                width={100}
                height={100}
                alt="/"
              />
            </div>

            <div className="">
              <h6 className="text-white font-bold text-[12px]">
                CRYPTO PUNK 3D #13
              </h6>
              <p className="text-[10px] text-white text-start">
                3D CRYPTO PUNK
              </p>
            </div>
            <div className="w-7 h-7 mx-auto">
              <Image className="mx-auto  rounded-full" src={b} alt="/" />
            </div>
          </div>
          <div className="flex text-center">
            <div className="mx-auto">
              <h6 className="font-semibold text-white text-[13px]">15.8ETH</h6>
              <p className="text-[10px] text-white text-start">latest Bid</p>
            </div>
            <div className="mx-auto ">
              <h6 className="  font-semibold text-white text-[13px]">9.5ETH</h6>
              <p className="text-[10px] text-white text-start">from</p>
            </div>
            <div className="mx-auto ml-10 ">
              <h6 className=" font-semibold text-white text-[13px]">
                $180,345
              </h6>
              <p className="text-[10px] text-green-500 text-start">+12.45%</p>
            </div>
          </div>
          <div className="">
            <button className="w-[16em]  mb-3 mt-7 hover hover:bg-black hover:text-white  h-8 font-semibold bg-blue-500 text-white rounded-full bg-transparent text-[14px]">
              Collect Now
            </button>
          </div>
        </div>
        {/*card 3*/}
        <div className="w-[300px]  bg-transparent   hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-10">
          <div className="w-[280px] h-[200px]text-center mx-auto mb-12 pt-3">
            <Image className="mx-auto " src={bored} alt="/" />
          </div>
          <div className="flex">
            <div className="h-12 w-12 mx-auto ">
              <Image
                className="mx-auto  rounded-xl "
                src={a}
                width={100}
                height={100}
                alt="/"
              />
            </div>

            <div className="ml-5 mr-5">
              <h6 className="text-blue-600  font-bold text-[15px]">
                HAPE #8064
              </h6>
              <p className="text-[10px] text-white text-start">HAPE PRIME</p>
            </div>
            <div className="w-7 ml-5 h-7 mx-auto">
              <Image className="mx-auto  rounded-full" src={b} alt="/" />
            </div>
          </div>
          <div className="flex text-center">
            <div className="mx-auto">
              <h6 className="font-semibold text-white text-[13px]">15.8ETH</h6>
              <p className="text-[10px] text-white text-start">latest Bid</p>
            </div>
            <div className="mx-auto ">
              <h6 className="  font-semibold text-white text-[13px]">9.5ETH</h6>
              <p className="text-[10px] text-white text-start">from</p>
            </div>
            <div className="mx-auto ml-10 ">
              <h6 className=" font-semibold text-white text-[13px]">
                $180,345
              </h6>
              <p className="text-[10px] text-green-500 text-start">+12.45%</p>
            </div>
          </div>
          <div className="">
            <button className="w-[16em]  mb-3 mt-7 hover hover:bg-black hover:text-white  h-8 font-semibold bg-blue-500 text-white rounded-full bg-transparent text-[14px]">
              Collect Now
            </button>
          </div>
        </div>

        {/*card 5*/}
        <div className="w-[300px]  bg-transparent   hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-10">
          <div className="w-[280px] h-[200px]text-center mx-auto pt-3">
            <Image className="mx-auto  rounded-xl" src={f} alt="/" />
          </div>
          <div className="flex">
            <div className="h-12 w-12 mx-auto ">
              <Image
                className="mx-auto  rounded-xl "
                src={a}
                width={100}
                height={100}
                alt="/"
              />
            </div>

            <div className="ml-5 mr-5">
              <h6 className="text-blue-600  font-bold text-[15px]">
                InvisibleFriends #54
              </h6>
              <p className="text-[10px] text-white text-start">HAPE PRIME</p>
            </div>
            <div className="w-7 ml-5 h-7 mx-auto">
              <Image className="mx-auto  rounded-full" src={b} alt="/" />
            </div>
          </div>
          <div className="flex text-center">
            <div className="mx-auto">
              <h6 className="font-semibold text-white text-[13px]">15.8ETH</h6>
              <p className="text-[10px] text-white text-start">latest Bid</p>
            </div>
            <div className="mx-auto ">
              <h6 className="  font-semibold text-white text-[13px]">9.5ETH</h6>
              <p className="text-[10px] text-white text-start">from</p>
            </div>
            <div className="mx-auto ml-10 ">
              <h6 className=" font-semibold text-white text-[13px]">
                $180,345
              </h6>
              <p className="text-[10px] text-green-500 text-start">+12.45%</p>
            </div>
          </div>
          <div className="">
            <button className="w-[16em]  hover hover:bg-black hover:text-white  mb-3 mt-7 hover h-8 font-semibold bg-blue-500 text-white rounded-full bg-transparent text-[14px]">
              Collect Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
