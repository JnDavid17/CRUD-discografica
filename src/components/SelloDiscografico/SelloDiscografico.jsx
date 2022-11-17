import React, { useEffect, useState } from "react";
import pencil from "../../assets/pencil-svgrepo-com.svg";
import getSellos from "../../services/getServices/getSellos";


function SelloDiscografico() {
  const [sellos, setSellos] = useState([]);

  useEffect(() => {
    getSellos()
      .then((response) => {
        console.log(response);
        setSellos(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const renderRows = () => {
    let rows = [];
    sellos.map((element, index) => {
      rows.push(
        <div key={index} className="row-table">
          <div className="column">{element.id}</div>
          <div className="column">{element.nombre}</div>
          <div className="column">{element.genero}</div>
          <div className="column">
            <img src={pencil} alt="" />
            <div className="substraction-container">
              <div className="decoration-line"></div>
            </div>
          </div>
        </div>
      );
    });
    return rows;
  };

  return (
    <div className="container-crud">
      <div className="title-and-add">
        <p>Sellos discograficos</p>
        <button className="add-register">
        <img src="https://img.icons8.com/material/24/FFFFFF/xbox-cross.png"/>
        <p>Agregar nuevo</p>
        </button>
      </div>
      <div className="container-table">
        <header className="header-table">
          <div className="title">ID</div>
          <div className="title">Nombre Sello</div>
          <div className="title">Genero</div>
          <div className="title"></div>
        </header>
        <main className="container-rows">{renderRows()}</main>
      </div>
    </div>
  );
}

export default SelloDiscografico;
