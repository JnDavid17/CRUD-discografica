import { useContext } from "react";
import deleteById from "../../services/deleteServices/deleteById";
import "./ModalDelete.css";
import { UpdateViewContext } from "../../context/UpdateViewContext";

function ModalComponent({ setModal, array, group, type }) {
  const { updateView, setUpdateView } = useContext(UpdateViewContext);

  async function deleteRegister() {
    deleteById(array.id, group, type)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        setUpdateView(updateView + 1);
      });
  }

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

export default ModalComponent;
