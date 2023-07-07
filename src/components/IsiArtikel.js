import Mountain1 from "../images/combed-20s.jpg";
import Mountain2 from "../images/combed-28s.jpg";
import Mountain3 from "../images/bamboo1.jpg";
import Mountain4 from "../images/bamboo2.jpg";
import Artikel from "../pages/Artikel";
import "../style/IsiArtikelStyle.css";
import ArtikelData from "../components/ArtikelData";

const IsiArtikel = () => {
  return (
    <div className="isiartikel">
      <h1>Macam-Macam Jenis Kain</h1>

      <ArtikelData
        className="first-des-reverse"
        heading="Cottton Combed"
        text="Bahan kaos Cotton Combed diproduksi menggunakan bahan dasar 100% kapas premium. Bahan ini
dapat menyerap keringat, sejuk saat dipakai, sangat halus dan lembut. Bahan ini cocok untuk
menjadi bahan dasar kaos premium yang berkualitas tinggi, dan memang bisa dikatakan bahan
kaos ini adalah standar bahan kaos distro.
Terdapat beberapa pilihan ketebalan yang tersedia di Toko kami yaitu 16s, 20s, 24s, 30s, semakin
kecil angka nya maka akan semakin tebal kain nya. Bahan kaos ini tersedia dalam berbagai macam
pilihan warna untuk keperluan kain Anda. Khusus untuk kain Combed 30s, kami memiliki 100
pilihan warna."
        img1={Mountain1}
        img2={Mountain2}
      />

      <ArtikelData
        className="first-des"
        heading="Cottton Bamboo"
        text="Bahan Kaos Cotton Bamboo adalah bahan kaos terbaik yang sudah banyak digunakan oleh
beberapa brand pakaian di Indonesia. Kualitas dan keunggulan dari bahan kaos ini membuat
banyaknya masyarakat Indonesia menyukai kain Bamboo.
Keunggulan seperti adanya kandungan anti bakteri, anti bau, anti jamur dan anti sinar UV yang
sangat jarang dimiliki oleh jenis bahan kaos lainnya.
Kain Cotton bamboo juga mempunyai tekstur yang sangat halus dan lembut, kain yang daya
serapnya baik ini juga sangat jatuh, sangat cocok untuk digunakan oleh mereka yang mempunyai
kulit sensitif seperti anak-anak dan bayi."
        img1={Mountain3}
        img2={Mountain4}
      />
    </div>
  );
};

export default IsiArtikel;
