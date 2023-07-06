import React, {useState} from 'react'
import "../style/ProdukStyle.css";


const  ProdukData = (props) => {
  const [images, setImages] = useState({
    img1: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-90282046/brd-44261_kaos-polos-16s-real-heavy-goods-black-kaos-polos-hitam-katun-s_full01.jpg",
    img2: "https://down-id.img.susercontent.com/file/7186e5fb707841c7f6680293d20e26bf",
  });

  const [activeImg, setActiveImg] = useState(images.img1);
  const [amount, setAmount] = useState(1);

  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image"></img>
      </div>
      <h4>{props.namaProduk}</h4>
      <p>{props.text}</p>
      <h4>${props.price}</h4>
      <p>
        <a href="#" class="btn btn-warning" onClick={() => setShowModal(true)}>
          Selengkapnya
        </a>
      </p>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Detail Produk</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <h1 className="px-10 mt-80 text-5xl font-bold">
                  Detail Produk
                </h1>
                <div className="max-w-7xl mx-auto p-8">
                  <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
                    <div className="flex flex-col gap-6 lg:w-2/4">
                      <img
                        src={activeImg}
                        alt=""
                        className="w-full h-full aspect-square object-cover rounded-xl"
                      />
                      <div className="flex flex-row justify-between h-24">
                        <img
                          src={images.img1}
                          alt=""
                          className="w-24 h-24 rounded-md"
                          onClick={() => setActiveImg(images.img1)}
                        />
                        <img
                          src={images.img1}
                          alt=""
                          className="w-24 h-24 rounded-md"
                          onClick={() => setActiveImg(images.img1)}
                        />
                        <img
                          src={images.img2}
                          alt=""
                          className="w-24 h-24 rounded-md"
                          onClick={() => setActiveImg(images.img2)}
                        />
                        <img
                          src={images.img2}
                          alt=""
                          className="w-24 h-24 rounded-md"
                          onClick={() => setActiveImg(images.img2)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:w-2/4">
                      <div>
                        <span className="text-orange-600 font-semibold">
                          Kaos Polos
                        </span>
                        <h1 className="text-l font-bold">Cotton Combed 30s</h1>
                      </div>
                      <p className="text-gray-700">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries,
                      </p>
                      <h6 className="text-lg font-semibold">$ 199.00</h6>
                      <div className="flex flex-row items-center gap-4">
                        <div class="flex ml-6 items-center">
                          <span class="mr-3 text-lg font-semibold">Size</span>
                          <div class="relative">
                            <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-200 focus:border-yellow-500 text-base pl-3 pr-10">
                              <option>SM</option>
                              <option>M</option>
                              <option>L</option>
                              <option>XL</option>
                            </select>
                            <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                              <svg
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                class="w-4 h-4"
                                viewBox="0 0 24 24"
                              >
                                <path d="M6 9l6 6 6-6"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <button
                            className="bg-gray-200 py-2 px-3 rounded-lg text-orange-800 text-3xl"
                            onClick={() => setAmount((prev) => prev - 1)}
                          >
                            -
                          </button>
                          <span className="py-4 px-6 rounded-lg">{amount}</span>
                          <button
                            className="bg-gray-200 py-2 px-3 rounded-lg text-orange-800 text-3xl"
                            onClick={() => setAmount((prev) => prev + 1)}
                          >
                            +
                          </button>
                        </div>
                        <button className="bg-orange-800 text-white font-semibold py-3 px-10 rounded-xl h-full">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default ProdukData