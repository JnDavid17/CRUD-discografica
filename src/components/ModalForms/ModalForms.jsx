import { useRef } from "react";

function ModalForms({ setModal, array, group, type, typeAction }) {
  // Casa discografica
  //   const sizeCasa = 2
  const nombre_casa = useRef(null);
  const presidente_casa = useRef(null);

  //Sello discografico
  //   const sizeSello = 2
  const nombre_sello = useRef(null);
  const genero_sello = useRef(null);

  // Departamentos
  //   const sizeDepartamento = 2
  const departamento = useRef(null);
  const empleado_departamento = useRef(null);

  // Artistas
  //   const sizeArtistas = 7
  const sello_artista = useRef(null);
  const nombre_artista = useRef(null);
  const apellidos_artista = useRef(null);
  const rol_artista = useRef(null);
  const agrupacion_artista = useRef(null);
  const casa_artista = useRef(null);
  const genero_artista = useRef(null);

  // Organigrama
  //   const sizeOrganigrama = 7;
  const sello_organigrama = useRef(null);
  const casa_organigrama = useRef(null);
  const nombre_organigrama = useRef(null);
  const apellido_organigrama = useRef(null);
  const direccion_organigrama = useRef(null);
  const cargo_organigrama = useRef(null);
  const tipocargo_organigrama = useRef(null);

  const renderInputs = () => {
    if (type === "casa") {
      return (
        <>
          <div className="container-input">
            <label htmlFor="nombre_casa">Nombre casa</label>
            <input id="nombre_casa" ref={nombre_casa} type="text" />
          </div>

          <div className="container-input">
            <label htmlFor="presidente_casa">Presidente casa</label>
            <input id="presidente_casa" ref={presidente_casa} type="text" />
          </div>
        </>
      );
    }

    if (type === "sello") {
      return (
        <>
          <div className="container-input">
            <label htmlFor="sello_name">Nombre del sello</label>
            <input id="sello_name" ref={nombre_sello} type="text" />
          </div>
          <div className="container-input">
            <label htmlFor="genre">Genero</label>
            <input id="genre" ref={genero_sello} type="text" />
          </div>
        </>
      );
    }

    if (type === "departamento") {
      return (
        <>
          <div className="container-input">
            <label htmlFor="department_name">Nombre departamento</label>
            <input id="department_name" ref={departamento} type="text" />
          </div>
          <div className="container-input">
            <label htmlFor="employee_name">Nombre empleado</label>
            <input id="employee_name" ref={empleado_departamento} type="text" />
          </div>
        </>
      );
    }

    if (type === "artista") {
      return (
        <>
          <div>
            <label htmlFor="sello_name">Sello</label>
            <input id="sello_name" ref={sello_artista} type="text" />
          </div>

          <div>
            <label htmlFor="artist_name">Nombres</label>
            <input id="artist_name" ref={nombre_artista} type="text" />
          </div>
          <div>
            <label htmlFor="artist_lastname">Apellidos</label>
            <input id="artist_lastname" ref={apellidos_artista} type="text" />
          </div>
          <div>
            <label htmlFor="artist_rol">Rol</label>
            <input id="artist_rol" ref={rol_artista} type="text" />
          </div>
          <div>
            <label htmlFor="artist_group">Agrupacion</label>
            <input id="artist_group" ref={agrupacion_artista} type="text" />
          </div>
          <div>
            <label htmlFor="casa_name">Casa discografica</label>
            <input id="casa_name" ref={casa_artista} type="text" />
          </div>
          <div>
            <label htmlFor="genre_name">Genero musical</label>
            <input id="genre_name" ref={genero_artista} type="text" />
          </div>
        </>
      );
    }

    if (type === "organigrama") {
      return (
        <>
          <div>
            <label htmlFor="sello_name">Sello</label>
            <input id="sello_name" ref={sello_organigrama} type="text" />
          </div>
          <div>
            <label htmlFor="casa_name">Casa discografica</label>
            <input id="casa_name" ref={casa_organigrama} type="text" />
          </div>
          <div>
            <label htmlFor="employee_name">Nombre empleado</label>
            <input id="employee_name" ref={nombre_organigrama} type="text" />
          </div>
          <div>
            <label htmlFor="employee_lastname">Apellidos empleado</label>
            <input
              id="employee_lastname"
              ref={apellido_organigrama}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="employee_address">Direccion empleado</label>
            <input
              id="employee_address"
              ref={direccion_organigrama}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="employee_charge">Cargo empleado</label>
            <input id="employee_charge" ref={cargo_organigrama} type="text" />
          </div>
          <div>
            <label htmlFor="type_charge">Tipo del cargo</label>
            <input id="type_charge" ref={tipocargo_organigrama} type="text" />
          </div>
        </>
      );
    }
  };

  const handleSubmit = (event) => {
    let arrayStrings = [];

    switch (type) {
      case "casa":
        arrayStrings = [
          nombre_casa.current.value,
          presidente_casa.current.value,
        ];
        break;
      case "sello":
        arrayStrings = [
            nombre_sello.current.value,
            genero_sello.current.value,
        ];
        break;
      case "departamento":
        arrayStrings = [
            departamento.current.value,
            empleado_departamento.current.value,
        ];
        break;
      case "artista":
        arrayStrings = [
            sello_artista.current.value,
            nombre_artista.current.value,
            apellidos_artista.current.value,
            rol_artista.current.value,
            agrupacion_artista.current.value,
            casa_artista.current.value,
            genero_artista.current.value,
        ];
        break;
      case "organigrama":
        arrayStrings = [
            sello_organigrama.current.value,
            casa_organigrama.current.value,
            nombre_organigrama.current.value,
            apellido_organigrama.current.value,
            direccion_organigrama.current.value,
            cargo_organigrama.current.value,
            tipocargo_organigrama.current.value,
        ];
        break;
      default:
        break;
    }

    console.log(arrayStrings);
    event.preventDefault();
  };

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
            <h1 className="title-alert">
              {typeAction === "update"
                ? `Actualizar ${type}`
                : `Agregar ${type}`}
            </h1>

            <form onSubmit={() => handleSubmit(event)}>
              {renderInputs()}

              <div class="react-confirm-alert-button-group">
                <button type="submit" className="yes-button">
                  {typeAction === "update" ? "Actualizar" : "Agregar"}
                </button>
                <button className="no-button" onClick={() => setModal(false)}>
                  Salir
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalForms;
