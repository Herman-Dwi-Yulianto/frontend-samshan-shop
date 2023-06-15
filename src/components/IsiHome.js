import Mountain1 from "../images/1.jpg"
import Mountain2 from "../images/2.jpg"
import Mountain3 from "../images/3.jpg"
import Mountain4 from "../images/4.jpg"

import "../style/IsiHomeStyle.css"

const IsiHome = () =>{
    return (
      <div className="isihome">
        <h1>Headline</h1>
        <p>Apa keuntungan belanja di SAMSHAN SHOP?</p>

        <div className="first-des">
          <div className="des-text">
            <h2>Taal Volcano, Batangas</h2>
            <p>
              one of the most iconic views in luzon, mt.tall boast a volcano one
              of the most iconic views in luzon, mt.tall boast a volcanoone of
              the most iconic views in luzon, mt.tall boast a volcanoone of the
              most iconic views in luzon, mt.tall boast a volcano
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