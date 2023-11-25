import React, { useState, useEffect } from 'react';

const ListagemSenhas = () => {
  const [senhas, setSenhas] = useState([]);
  const [senhasVisiveis, setSenhasVisiveis] = useState({});

  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };

  const toggleSenhaVisivel = (id) => {
    setSenhasVisiveis((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false,
    }));
  };

  useEffect(() => {
    const storedSenhas = JSON.parse(localStorage.getItem('senhas')) || [];
    setSenhas(storedSenhas);
    // Inicializa senhasVisiveis com todas as senhas ocultas
    const initialSenhasVisiveis = storedSenhas.reduce((acc, senha) => {
      acc[senha._id] = false;
      return acc;
    }, {});
    setSenhasVisiveis(initialSenhasVisiveis);
  }, []);

  return (
    <div className="container p-3 my-5 mt-5 ">
      <div className="table-responsive mt-5">
        <table className="table table-striped table-hover" id="table-lista">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Data</th>
              <th scope="col">Lembrete</th>
              <th scope="col">Senha</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>
            {senhas.map((senha) => (
              <tr key={senha._id}>
                <th scope="row">{senha._id}</th>
                <td>{senha.data}</td>
                <td>{senha.lembrete}</td>
                <td>{senhasVisiveis[senha._id] ? senha.senha : '*********'}</td>
                <td>
                  <button 
                  type="button"
                  className="btn btn-primary"
                  onClick={() => toggleSenhaVisivel(senha._id)}>
                    {senhasVisiveis[senha._id] ? 'Ocultar Senha' : 'Mostrar Senha'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={clearLocalStorage}>Limpar localStorage</button>
      </div>
    </div>
  );
};

export default ListagemSenhas;
