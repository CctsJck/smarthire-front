import React, { useEffect, useState } from "react";
import { BusquedaList } from "./BusquedaList/BusquedaList";
import axios from "axios";
import { ModalDelete } from "./Validacion/ModalDelete";
import { ModalShare } from "./Validacion/ModalShare";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

export const Busqueda = () => {
  let navigate = useNavigate();
  
  const [busquedas, setBusquedas] = useState([]);
  const [showModalDelete, setShowModalDelete] = React.useState(false);
  const [showModalShare, setShowModalShare] = React.useState(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");
  const [idToShare, setIdToShare] = useState("");
  
  const [idToEdit, setIdToEdit] = useState("");
  const [success, setSuccess] = useState("");
  const [prueba, setPrueba] = useState("");


  useEffect(() => {
    let config = {
      method: "get",
      url: `${import.meta.env.VITE_BACK_URL}search/recruiter/${sessionStorage.getItem(
        "userId"
      )}`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setBusquedas(response.data);
      })
      .catch(function (error) {
        if (error.response.status === 404) setSuccess("No Tiene busquedas");
        else {
          navigate("/login");
        }
      });
  }, []);

  function borrarBusqueda(id) {
    console.log("adfasf");
    setIdToDelete(id);
    setShowModalDelete(true);
  }

  function shareBusqueda(id){
    console.log(id)
    setIdToShare(id)
    setShowModalShare(true)
  }

  function handleBorrado(id) {
    console.log("Id de handle borrado:" + id);

    let config = {
      method: "delete",
      url: `${import.meta.env.VITE_BACK_URL}search/${id}`,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    };

    axios(config).then(function (response) {
      setSuccess("¡Borrado de la busqueda completo!");
    });
  }




  

  function verResultados(id) {
      const encryptedText = CryptoJS.AES.encrypt(id.toString(), import.meta.env.VITE_SECRET_KEY)
     console.log(encryptedText)

    navigate("/dashboard/" + encodeURIComponent(encryptedText))
  }

  function editarBusqueda(id) {
    console.log(id)
    setIdToEdit(id);
    const encryptedText = CryptoJS.AES.encrypt(id.toString(), import.meta.env.VITE_SECRET_KEY)
    navigate("/preguntas/" +  encodeURIComponent(encryptedText));
  }

  return (
    <>
      <div class="container text-center">
        <div class="d-inline-flex card rounded pt-2 pb-2 ps-4 pe-4 mt-2 mb-2">
          <h1>Mis busquedas activas</h1>
        </div>
        <div class='container w-75 card shadow rounded'>
        <BusquedaList
          busquedas={busquedas}
          borrarBusqueda={borrarBusqueda}
          shareBusqueda={shareBusqueda}
          verResultados={verResultados}
          editarBusqueda={editarBusqueda}
        />

        <ModalDelete
          show={showModalDelete}
          onHide={() => setShowModalDelete(false)}
          text="Tenga en cuenta que una vez eliminada los cambios son irreversibles!"
          title="¿Desea eliminar la busqueda?"
          id={idToDelete}
          handleBorrado={handleBorrado}
        />
        <ModalShare
          show={showModalShare}
          onHide={() => setShowModalShare(false)}
          text="Este es link para compartir con los candidatos"
          title="¡Compartí esta busqueda!"
          id={idToShare}
        />


        </div>

        <div class="position-relative">
          <div class ='mt-3'>
            <button class='btn btn-danger m-1' onClick={() => navigate("/")}>Volver al menu</button>
            <button class='btn btn-primary m-1' onClick={() => navigate("/crearbusqueda")}>Crear una Búsqueda</button>
          </div>

        </div>
      </div>
    </>
  );
};
