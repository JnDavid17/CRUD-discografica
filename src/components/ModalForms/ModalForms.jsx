import React from "react";

function ModalForms() {
  return (
    <div
      id="react-confirm-alert"
      onClick={(e) => {
        if (e.target.className === "react-confirm-alert-overlay") {
          setModal(false);
        }
      }}
    >
      <div class="react-confirm-alert-overlay">
        <div class="react-confirm-alert">
          <div class="react-confirm-alert-body">
            <h1 className="title-alert">Eliminar casa {array.nombre}</h1>
            <div class="react-confirm-alert-button-group">
              <button className="yes-button" onClick={() => deleteRegister()}>
                Eliminar
              </button>
              <button className="no-button" onClick={() => setModal(false)}>
                Salir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalForms;
