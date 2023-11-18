 
import React, { useState, useEffect } from "react";
import axios from "axios";
 
 


const ListagemSenhas = () => {
  const [senhas, setSenhas] = useState([]);

  useEffect(() => {
    // Função assíncrona para buscar senhas do servidor
    const fetchSenhas = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/senhas");
        setSenhas(response.data);
      } catch (error) {
        console.error("Erro ao buscar senhas:", error);
      }
    };
 
    fetchSenhas();
  }, []);
  return (
    <div className="container p-3 my-5 mt-5 ">
      <div className="table-responsive mt-5">
        <table class="table table-striped table-hover" id="table-lista">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Data</th>
              <th scope="col">Lembrete</th>
              <th scope="col">Visualizar</th>
            </tr>
          </thead>
          <tbody>
            {senhas.map((senha) => (
              <tr key={senha._id}>
                <th scope="row">{senha._id}</th>
                <td>{senha.data}</td>
                <td>{senha.lembrete}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#modal${senha._id}`}
                  >
                    Visualizar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default ListagemSenhas;
