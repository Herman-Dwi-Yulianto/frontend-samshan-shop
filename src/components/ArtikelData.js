import React, { Component } from 'react';
import "../style/IsiArtikelStyle.css";
import Mountain1 from "../images/bj1.png"
import Mountain2 from "../images/bj2.png";

class ArtikelData extends Component{
  render(){
    return (
      <div className={this.props.className}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>
              {this.props.text}
            </p>
          </div>

          <div className="image">
            <img alt="img" src={this.props.img1} />
            <img alt="img" src={this.props.img2} />
          </div>
        </div>
    );
  }
}

export default ArtikelData