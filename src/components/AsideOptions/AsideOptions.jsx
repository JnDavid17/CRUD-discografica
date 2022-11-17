import React from "react";
import "./AsideOptions.css";
import house from "../../assets/house-svgrepo-com.svg";
import disk from "../../assets/disk-svgrepo-com.svg";
import organigram from "../../assets/organigram-svgrepo-com.svg";
import department from "../../assets/office-svgrepo-com.svg";
import artist from "../../assets/person-svgrepo-com.svg";
import { Link } from "wouter";

function AsideOptions() {
  return (
    <aside className="container-aside">
      <Link to="/casa">
        <div className="container-element">
          <img src={house} alt="" />
          <div className="tooltip">Casa discografica</div>
        </div>
      </Link>

      <Link to="/sellos">
      <div className="container-element">
        <img src={disk} alt="" />
        <div className="tooltip">Sello discografico</div>
      </div>
      </Link>
      <div className="container-element">
        <img src={organigram} alt="" />
        <div className="tooltip">Organigrama</div>
      </div>

      <div className="container-element">
        <img src={department} alt="" />
        <div className="tooltip">Departamentos</div>
      </div>

      <div className="container-element">
        <img src={artist} alt="" />
        <div className="tooltip">Artistas</div>
      </div>
    </aside>
  );
}

export default AsideOptions;
