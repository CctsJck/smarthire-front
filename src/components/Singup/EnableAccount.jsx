import React from "react";

export const EnableAccount = () => {

    useEffect(() => {
        let idBusqueda = CryptoJS.AES.decrypt(
          params.idBusqueda,
          import.meta.env.VITE_SECRET_KEY
        ).toString(CryptoJS.enc.Utf8);
        let config = {
          method: "get",
          url: `${import.meta.env.VITE_BACK_URL}search/${idBusqueda}`,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },
        };
    
        axios(config)
          .then(function (response) {
            console.log(response.data);
            setBusqueda(response.data);
          })
          .catch(function (error) {
          });
      }, []);

      
  return (
    <>
      <div class="container card shadow mt-3 w-50 rounded">
        <div class="text-center border-bottom">
          <h2>Cuenta Activada</h2>
        </div>
        <div class="text-center mt-5 mb-5 text-center">
            <h4>¡Felicitaciones!</h4>
          <p>
            ¡Su cuenta fue activada correctamente!
          </p>
          <p>
            Ahora puede iniciar sesión y comenzar su proceso de reclutamiento
          </p>
        </div>

        <div class="border-bottom text-center">
          <p class="fw-bold mb-3">
            Ya puede cerrar esta ventana
          </p>
        </div>
      </div>
    </>
  );
};
