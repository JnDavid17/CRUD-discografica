import React, { useEffect, useState, useContext } from "react";
import "./CasaDiscografica.css";
import getDiscograficas from "../../services/getServices/getCasas";
import pencil from "../../assets/pencil-svgrepo-com.svg";
import ModalComponent from "..//ModalDelete/ModalDelete";
import { UpdateViewContext } from "../../context/UpdateViewContext";

function CasaDiscografica() {
  const [discograficas, setDiscograficas] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalForms, setModalForms] = useState(false);

  const [lastCasa, setLastCasa] = useState([]);
  const { updateView, setUpdateView } = useContext(UpdateViewContext);

  useEffect(() => {
    getDiscograficas()
      .then((response) => {
        setDiscograficas(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [updateView]);

  const deleteRegister = (casa) => {
    setModalDelete(true);
    setLastCasa(casa);
  };

  const showForm = (casa) => {
    setModalForms(true)
    setLastCasa(casa)
  } 

  const renderRows = () => {
    let rows = [];
    discograficas.map((casa, index) => {
      rows.push(
        <div key={index} className="row-table">
          <div className="column">{casa.id}</div>
          <div className="column">{casa.nombre}</div>
          <div className="column">{casa.presidente}</div>
          <div className="column">{casa.createAt}</div>
          <div className="column">
            <img src={pencil} alt="" onClick={() => showForm(casa)} />
            <div
              className="substraction-container"
              onClick={() => deleteRegister(casa)}
            >
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
        <p>Casas discograficas</p>
        <button className="add-register">
          <img src="https://img.icons8.com/material/24/FFFFFF/xbox-cross.png" />
          <p>Agregar nuevo</p>
        </button>
      </div>
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

      {modalDelete ? (
        <ModalComponent
          setModal={setModal}
          array={lastCasa}
          group={"servicio"}
          type={"casa"}
        />
      ) : null}

      {modalForms ? (
        <ModalComponent
          setModal={setModal}
          array={lastCasa}
          group={"servicio"}
          type={"casa"}
        />
      ) : null}
    </div>
  );
}

export default CasaDiscografica;
