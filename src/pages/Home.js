import React from "react";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import IsiHome from "../components/IsiHome";
import kaoshome from "../images/kaoshome.jpg";
import waves from "../images/waves.png"
import Produk from "../components/Produk";


const Home = () => {
  return (
    <>
      <NavigationBar />
      <Hero
      // cName="hero"
      // heroImg={waves}
      // title="Selamat Datang Di"
      // title2="Samshan Shop Kaos Polos"
      // text="Chose Your favorite T-shirt"
      // buttonText="Swipe Up"
      // url="/"
      // btnClass="show"
      />
      <IsiHome />
      <div class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src={kaoshome}
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Tempat Gaya Menemui Keunikan
              <br class="hidden lg:inline-block" />
            </h1>
            <p class="mb-8 leading-relaxed">
              Belanja koleksi kaos polos kami hari ini dan mulailah perjalanan
              berekspresi diri. Desain. Ungkapkan. Inspirasi. Sampaikan
              pernyataanmu dengan kaos polos kami dan biarkan gayamu bicara
              lebih banyak. Ekspresikan kreativitasmu dengan kanvas kosong
              berkualitas tinggi kami dan nikmati kemungkinan tak terbatas untuk
              berekspresi diri.
            </p>
            <div class="flex justify-center">
              <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                More Produk
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
