import Image from "next/image";
import P1 from "/public/p1.jpg";
import P2 from "/public/p2.jpg";
import P3 from "/public/p3.jpg";

export default function Top() {
  return (
    <div className="text-center">
      <div className="mx-auto">
        <h1 className="font-bold p-12 text-[3em] text-transparent bg-clip-text bg-gradient-to-br   from-green-400 to-purple-400">
          Top Categories
        </h1>
      </div>
      <div className="flex text-center mr-[6em] ml-[6em]">
        <div className="mx-auto">
          {/*card 1*/}

          <div className="w-[350px]  text-center   bg-transparent  hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-5">
            <div className="w-[300px] flex  h-[250px] text-center mx-auto pt-3">
              <div className="text-center  mx-auto">
                <Image className="mx-auto rounded-xl  " src={P2} alt="/" />
                <div>
                  <Image className="mx-auto rounded-xl " src={P3} alt="/" />
                </div>
              </div>

              <div className="pl-2">
                <Image className="mx-auto rounded-xl " src={P1} alt="/" />
              </div>
            </div>
            <h1 className="text-center text-white text-[18px] font-semibold">
              Art
            </h1>
          </div>

          {/*card 1*/}
        </div>
        <div className="mx-auto">
          {/*card 1*/}

          <div className="w-[350px]    text-center   bg-transparent  hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-5">
            <div className="w-[300px] flex  h-[250px] text-center mx-auto pt-3">
              <div className="text-center mx-auto">
                <Image className="mx-auto rounded-xl " src={P2} alt="/" />
                <div>
                  <Image className="mx-auto rounded-xl " src={P3} alt="/" />
                </div>
              </div>

              <div className="pl-2">
                <Image className="mx-auto rounded-xl " src={P1} alt="/" />
              </div>
            </div>
            <h1 className="text-center text-white text-[18px] font-semibold">
              Collectibles
            </h1>
          </div>

          {/*card 1*/}
        </div>
        <div className="mx-auto">
          {/*card 1*/}

          <div className="w-[350px]    text-center   bg-transparent  hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-5">
            <div className="w-[300px] flex  h-[250px] text-center mx-auto pt-3">
              <div className="text-center mx-auto">
                <Image className="mx-auto rounded-xl " src={P2} alt="/" />
                <div>
                  <Image className="mx-auto rounded-xl " src={P3} alt="/" />
                </div>
              </div>

              <div className="pl-2">
                <Image className="mx-auto rounded-xl " src={P1} alt="/" />
              </div>
            </div>
            <h1 className="text-center text-white text-[18px] font-semibold">
              Virtual Worlds & Metaverse
            </h1>
          </div>

          {/*card 1*/}
        </div>
      </div>
      <button className="w-[10em]  hover hover:bg-black hover:text-white  mb-3 mt-7 hover h-10 font-semibold border text-white rounded-full bg-transparent text-[14px]">
        See More
      </button>
    </div>
  );
}
