import Mountain1 from "../images/1.jpg"
import Mountain2 from "../images/2.jpg"
import Mountain3 from "../images/3.jpg"
import Mountain4 from "../images/4.jpg"

import "../style/IsiHomeStyle.css"

const IsiHome = () =>{
    return (
      <div className="isihome" id="hero">
        <h1>Ekspresikan Kreativitasmu dengan Kaos Polos Tanpa Batas!</h1>

        <div className="first-des">
          <div className="des-text">
            <h2>Desain. Ungkapkan. Inspirasi</h2>
            <p>
              Selamat datang di destinasi online kami untuk kaos polos, tempat
              imajinasimu menjadi pusat perhatian. Temukan kebebasan untuk
              mendesain, mengungkapkan, dan menginspirasi dengan koleksi kaos
              polos berkualitas tinggi. Apakah Anda seorang seniman, penggemar
              mode, atau seseorang yang mencari pakaian serba guna, kaos polos
              kami memberikan landasan sempurna untuk berekspresi diri
            </p>
          </div>

          <div className="image">
            <img alt="img" src={Mountain1} />
            <img alt="img" src={Mountain2} />
          </div>
        </div>
      </div>
    );
}

export default IsiHome