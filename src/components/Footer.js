import React from "react";
import "../style/FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Shamsan</h1>
          <p>Choose Your Favourite T-shirt.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-youtube-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Kontak Kami</h4>
          <a>
            Jl. Tluki 1 No.156, Perumnas Condong Catur, Condongcatur,
          </a>
          <a>
            Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta
          </a>
          <a>55281</a>
          <a href="/">085727964395</a>
          <a href="/">samshanofficial</a>
        </div>
        <div>
          <h4>Media Sosial</h4>
          <a href="/">Instagram</a>
          <a href="/">Shopee</a>
          <a href="/">Facebook</a>
          <a href="/">Twitter</a>
          <a href="/">Tiktok</a>
        </div>
        <div>
          <h4>Tentang Kami</h4>
          <a >
            Samshan Shop merupakan tempat untuk membeli kaos polos
          </a>
          <a >
            atau kaos sablon berkualitas. Kami terus belajar dan terus
          </a>
          <a >
            berusaha mengembangkan kualitas pelayanan kami. Apabila
          </a>
          <a >
            terdapat saran atau masukan silahkan kirimkan melalui media
          </a>
          <a >sosial kami.</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
