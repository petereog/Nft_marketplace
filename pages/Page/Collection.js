import Image from "next/image";
import cyber from "/public/cyber.png";
import a1 from "/public/azuki.png";
import a2 from "/public/bear.png";
import a3 from "/public/hyer.png";
import a4 from "/public/daboys.png";
import a5 from "/public/yound.png";
import a6 from "/public/Sneaker.png";
import a7 from "/public/cuteApp.png";

export default function Collection() {
  return (
    <div className="text-center">
      <h1 className="font-bold p-12 text-[3em] text-transparent bg-clip-text bg-gradient-to-br  from-green-500 to-purple-700">
        Top Collections
      </h1>
      <div className="flex text-center ml-32 mr-32">
        <button className="w-36 ml-6 mx-auto hover h-12 font-semibold hover:bg-blue-500 hover:text-white text-white border rounded-full bg-transparent text-[14px]">
          Art
        </button>
        <button className="w-36 ml-6 mx-auto hover h-12 font-semibold hover:bg-blue-500 hover:text-white text-white border rounded-full bg-transparent text-[14px]">
          Collectibles
        </button>
        <button className="w-36 ml-6 mx-auto hover h-12 font-semibold hover:bg-blue-500 hover:text-white text-white border rounded-full bg-transparent text-[14px]">
          Metaverse
        </button>
        <button className="w-36 ml-6 mx-auto hover h-12 font-semibold hover:bg-blue-500 hover:text-white text-white border rounded-full bg-transparent text-[14px]">
          Virtual Worlds
        </button>
        <button className="w-36 ml-6 mx-auto hover h-12 font-semibold hover:bg-blue-500 hover:text-white text-white border rounded-full bg-transparent text-[14px]">
          Sport
        </button>
        <button className="w-36 ml-6 mx-auto hover h-12 font-semibold hover:bg-blue-500 hover:text-white text-white border rounded-full bg-transparent text-[14px]">
          Music
        </button>
      </div>

      <div className="bg-[#1E1661] ml-32 mr-32 flex mt-16">
        <div className="flex text-center mx-auto gap-3 ">
          <div className="w-[250px]  bg-transparent   hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-5">
            <div className="w-[220px] h-[200px]text-center mx-auto pt-3">
              <Image className="mx-auto rounded-xl " src={cyber} alt="/" />
              <div>
                <div className="text-start font-sans font-semibold text-white">
                  COOLGUYZZ
                  <div>
                    <p className="text-start font-sans font-light text-gray-400 text text-[12px]">
                      coolguyzz.io
                    </p>
                  </div>
                </div>

                <div className="flex text-start gap-16 mt-5 mb-3 text-white">
                  <div>
                    <h1 className="text-[18px] font-semibold">1.3 ETH</h1>
                    <p>Floor price</p>
                  </div>
                  <div className="text-end">
                    <h1 className="text-[18px] font-semibold">$2045.12</h1>
                    <p className="text-red-500">-12.45%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*collections cards */}
        <div className="flex text-center mx-auto gap-3 ">
          <div className="w-[250px]  bg-transparent   hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-5">
            <div className="w-[220px] h-[200px]text-center mx-auto pt-3">
              <Image className="mx-auto rounded-xl " src={a2} alt="/" />
              <div>
                <div className="text-start font-sans font-semibold text-white">
                  CVltB3AR
                  <div>
                    <p className="text-start font-sans font-light text-gray-400 text text-[12px]">
                      CVltB3AR
                    </p>
                  </div>
                </div>

                <div className="flex text-start gap-16 mt-5 mb-3 text-white">
                  <div>
                    <h1 className="text-[18px] font-semibold">0.88 ETH</h1>
                    <p>Floor price</p>
                  </div>
                  <div className="text-end">
                    <h1 className="text-[18px] font-semibold">$545</h1>
                    <p className="text-green-500">+12.45%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*collections cards */}
        <div className="flex text-center mx-auto gap-3 ">
          <div className="w-[250px]  bg-transparent   hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-5">
            <div className="w-[220px] h-[200px]text-center mx-auto pt-3">
              <Image className="mx-auto rounded-xl " src={a7} alt="/" />
              <div>
                <div className="text-start font-sans font-semibold text-white">
                  CuteApe White
                  <div>
                    <p className="text-start font-sans font-light text-gray-400 text text-[12px]">
                      Cuteape_99
                    </p>
                  </div>
                </div>

                <div className="flex text-start gap-16 mt-5 mb-3 text-white">
                  <div>
                    <h1 className="text-[18px] font-semibold">0.45 ETH</h1>
                    <p>Floor price</p>
                  </div>
                  <div className="text-end">
                    <h1 className="text-[18px] font-semibold">$2045.12</h1>
                    <p className="text-red-500">-14.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*collections cards */}
        <div className="flex text-center mx-auto gap-3 ">
          <div className="w-[250px]  bg-transparent   hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-5">
            <div className="w-[220px] h-[200px]text-center mx-auto pt-3">
              <Image className="mx-auto rounded-xl " src={a3} alt="/" />
              <div>
                <div className="text-start font-sans font-semibold text-white">
                  HyperApe
                  <div>
                    <p className="text-start font-sans font-light text-gray-400 text text-[12px]">
                      HyperApe.co
                    </p>
                  </div>
                </div>

                <div className="flex text-start gap-16 mt-5 mb-3 text-white">
                  <div>
                    <h1 className="text-[18px] font-semibold">1.31 ETH</h1>
                    <p>Floor price</p>
                  </div>
                  <div className="text-end">
                    <h1 className="text-[18px] font-semibold">$1743.4</h1>
                    <p className="text-red-500">-5.6%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*collections cards */}
      </div>
      <div className="bg-[#1E1661] ml-32 mr-32 flex mt-16">
        <div className="flex text-center mx-auto gap-3 ">
          <div className="w-[250px]  bg-transparent   hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-5">
            <div className="w-[220px] h-[200px]text-center mx-auto pt-3">
              <Image className="mx-auto rounded-xl " src={a4} alt="/" />
              <div>
                <div className="text-start font-sans font-semibold text-white">
                  Gangstaboi V.1
                  <div>
                    <p className="text-start font-sans font-light text-gray-400 text text-[12px]">
                      GB_gangs
                    </p>
                  </div>
                </div>

                <div className="flex text-start gap-16 mt-5 mb-3 text-white">
                  <div>
                    <h1 className="text-[18px] font-semibold">2.35 ETH</h1>
                    <p>Floor price</p>
                  </div>
                  <div className="text-end">
                    <h1 className="text-[18px] font-semibold">$4487</h1>
                    <p className="text-green-500">+34.5%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*collections cards */}
        <div className="flex text-center mx-auto gap-3 ">
          <div className="w-[250px]  bg-transparent   hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-5">
            <div className="w-[220px] h-[200px]text-center mx-auto pt-3">
              <Image className="mx-auto rounded-xl " src={a5} alt="/" />
              <div>
                <div className="text-start font-sans font-semibold text-white">
                  Lyodds$1
                  <div>
                    <p className="text-start font-sans font-light text-gray-400 text text-[12px]">
                      Naomi po
                    </p>
                  </div>
                </div>

                <div className="flex text-start gap-16 mt-5 mb-3 text-white">
                  <div>
                    <h1 className="text-[18px] font-semibold">1.156 ETH</h1>
                    <p>Floor price</p>
                  </div>
                  <div className="text-end">
                    <h1 className="text-[18px] font-semibold">$1670</h1>
                    <p className="text-green-500">+12.45%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*collections cards */}
        <div className="flex text-center mx-auto gap-3 ">
          <div className="w-[250px]  bg-transparent   hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-5">
            <div className="w-[220px] h-[200px]text-center mx-auto pt-3">
              <Image className="mx-auto rounded-xl " src={a6} alt="/" />
              <div>
                <div className="text-start font-sans font-semibold text-white">
                  SneakerHead Vol.1
                  <div>
                    <p className="text-start font-sans font-light text-gray-400 text text-[12px]">
                      SneakerHead.corp
                    </p>
                  </div>
                </div>

                <div className="flex text-start gap-16 mt-5 mb-3 text-white">
                  <div>
                    <h1 className="text-[18px] font-semibold">1.4 ETH</h1>
                    <p>Floor price</p>
                  </div>
                  <div className="text-end">
                    <h1 className="text-[18px] font-semibold">$1790</h1>
                    <p className="text-green-500">+67.9%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*collections cards */}
        <div className="flex text-center mx-auto gap-3 ">
          <div className="w-[250px]  bg-transparent   hover  hover:border-purple-600 mx-auto rounded-xl  duration-500 hover  hover:scale-105 bg-blue-100 bg-opacity-5">
            <div className="w-[220px] h-[200px]text-center mx-auto pt-3">
              <Image className="mx-auto rounded-xl " src={a1} alt="/" />
              <div>
                <div className="text-start font-sans font-semibold text-white">
                  Azuki 3D
                  <div>
                    <p className="text-start font-sans font-light text-gray-400 text text-[12px]">
                      azuki.jp
                    </p>
                  </div>
                </div>

                <div className="flex text-start gap-16 mt-5 mb-3 text-white">
                  <div>
                    <h1 className="text-[18px] font-semibold">1.5 ETH</h1>
                    <p>Floor price</p>
                  </div>
                  <div className="text-end">
                    <h1 className="text-[18px] font-semibold">$1907</h1>
                    <p className="text-green-500">+1.6%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*collections cards */}
      </div>
      <button className="w-[10em]  hover hover:bg-black hover:text-white  mb-3 mt-7 hover h-10 font-semibold border text-white rounded-full bg-transparent text-[14px]">
        Collect Now
      </button>
    </div>
  );
}
