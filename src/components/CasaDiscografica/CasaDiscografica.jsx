import React, { useEffect, useState, useContext } from "react";
import "./CasaDiscografica.css";
import getDiscograficas from "../../services/getServices/getCasas";
import pencil from "../../assets/pencil-svgrepo-com.svg";
import ModalDelete from "..//ModalDelete/ModalDelete";
import ModalForms from "..//ModalForms/ModalForms";

import { UpdateViewContext } from "../../context/UpdateViewContext";

function CasaDiscografica() {
  const [discograficas, setDiscograficas] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalForms, setModalForms] = useState(false);
  const [typeAction, setTypeAction] = useState("");

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

  const showForm = (casa, type) => {
    setModalForms(true)
    setLastCasa(casa)
    setTypeAction(type)
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
            <img src={pencil} alt="" onClick={() => showForm(casa, "update")} />
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
        <button className="add-register" onClick={()=>showForm([], "add")}>
          <img src="https://img.icons8.com/material/24/FFFFFF/xbox-cross.png" />
          <p>Agregar nuevo</p>
        </button>
      </div>
      <div className="container-table">
        <header className="header-table">
          <div className="title">ID</div>
          <div className="title">Nombre Casa</div>
          <div className="title">Presidente</div>
          <div className="title">Fundaci??n</div>
          <div className="title"></div>
        </header>
        <main className="container-rows">{renderRows()}</main>
      </div>

      {modalDelete ? (
        <ModalDelete
          setModal={setModalDelete}
          array={lastCasa}
          group={"servicio"}
          type={"casa"}
        />
      ) : null}

      {modalForms ? (
        <ModalForms
          setModal={setModalForms}
          array={lastCasa}
          group={"servicio"}
          type={"casa"}
          typeAction = {typeAction}
        />
      ) : null}
    </div>
  );
}

export default CasaDiscografica;
