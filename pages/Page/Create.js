import Image from "next/image";
import Wallie from "/public/Wallie.jpg";

export default function Create() {
  return (
    <div className="text-center mx-auto pt-32 pb-32">
      <div className="text-center mx-auto rounded-xl  bg-transparent  w-[50em] bg-blue-100 bg-opacity-5">
        <div className="mx-auto">
          <h1 className="font-bold p-12 text-[3em] text-transparent bg-clip-text bg-gradient-to-br  from-green-500 to-purple-700">
            Create And Sell Your NFTs
          </h1>
        </div>

        <div className="  flex  text-center ">
          <div className="mx-auto">
            <div className="mx-auto">
              <div className="w-12 mx-auto">
                <Image
                  className="mx-auto rounded-[2em] "
                  src={Wallie}
                  alt="/"
                  width={200}
                  height={200}
                />
              </div>

              <h1 className="text-center text-white text-[18px] font-semibold">
                Set Up Your Wallet
              </h1>
              <p className="text-white pt-5 pb-12 text-[10px]">
                Once you've setup your Wallet of<br></br> Choice, Connect it to
                Opensea by <br></br> clicking the Wallet icon in the top right
                <br></br> Learn about the wallet we <br></br>support
              </p>
            </div>
          </div>

          <div className="mx-auto">
            <div className="mx-auto">
              <div className="w-12 mx-auto">
                <Image
                  className="mx-auto rounded-[2em] "
                  src={Wallie}
                  alt="/"
                  width={200}
                  height={200}
                />
              </div>

              <h1 className="text-center text-white text-[18px] font-semibold">
                Set Up Your Wallet
              </h1>
              <p className="text-white pt-5 pb-12 text-[10px]">
                Once you've setup your Wallet of<br></br> Choice, Connect it to
                Opensea by <br></br> clicking the Wallet icon in the top right
                <br></br> Learn about the wallet we <br></br>support
              </p>
            </div>
          </div>
          <div className="mx-auto">
            <div className="mx-auto">
              <div className="w-12 mx-auto">
                <Image
                  className="mx-auto rounded-[2em] "
                  src={Wallie}
                  alt="/"
                  width={200}
                  height={200}
                />
              </div>

              <h1 className="text-center text-white text-[18px] font-semibold">
                Set Up Your Wallet
              </h1>
              <p className="text-white pt-5 pb-12 text-[10px]">
                Once you've setup your Wallet of<br></br> Choice, Connect it to
                Opensea by <br></br> clicking the Wallet icon in the top right
                <br></br> Learn about the wallet we <br></br>support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
