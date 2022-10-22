import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

export default function Button() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <button className="w-36 hover h-9 hover:bg-black hover:text-white text-white rounded-full bg-blue-600 text-[14px]"  ></button>
  );
}
