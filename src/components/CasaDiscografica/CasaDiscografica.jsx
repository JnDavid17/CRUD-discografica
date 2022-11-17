import React, { useEffect, useState } from "react";
import "./CasaDiscografica.css";
import getDiscograficas from "../../services/getDiscograficas";
import plusicon from "../../assets/plus-svgrepo-com2.svg"
import pencil from "../../assets/pencil-svgrepo-com.svg"


function TableGeneral() {
const [discograficas, setDiscograficas ] = useState([])

useEffect(() => {
    getDiscograficas()
        .then((response) => {
          console.log(response);
          setDiscograficas(response);
        })
        .catch((error) => {
            console.log(error);
        });
}, []);

console.log(discograficas)

discograficas.map((element,index) => {
  console.log(element.id);
}) 

  const renderRows = () => {
    let rows = [];
    discograficas.map((element, index) => {
      rows.push(
        <div key={index} className="row-table">
          <div className="column">{element.id}</div>
          <div className="column">{element.nombre}</div>
          <div className="column">{element.presidente}</div>
          <div className="column">{element.createAt}</div>
          <div className="column">
            <img src={plusicon} alt="" />
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
    <div className="container-table">
      <header className="header-table">
        <div className="title">ID</div>
        <div className="title">Nombre Casa</div>
        <div className="title">Presidente</div>
        <div className="title">Fundación</div>
        <div className="title"></div>
      </header>
      <main className="container-rows">{renderRows()}</main>
    </div>
  );
}

export default TableGeneral;
