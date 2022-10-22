import Head from "next/head";
import Article from "./Page/Article";
import Carousel from "./Page/Caruosel";
import Collection from "./Page/Collection";
import Create from "./Page/Create";
import Footer from "./Page/Footer";
import Hero from "./Page/Hero";
import Nav from "./Page/Nav";
import Top from "./Page/Top";

export default function Home() {
  return (
    <div className="bg-[#1E1661]">
      <Head>
        <title>Endft</title>
        <meta name="description" content="Endft" />
        <link rel="icon" href="/public/Group 9.png" />
      </Head>
      <Nav />
      <Hero />
      <Carousel />
      <Collection />
      <Top />
      <Create />
      <Article />
      <Footer />
    </div>
  );
}
