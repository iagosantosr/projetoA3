import React from "react";
import "../css/criaSenha.css";

const CriarSenhas = () => {
  return (
    <div fluid className="container p-3 my-5 mt-5 " id="area-generate">
      <div className="container mt-5" id="area-conjunto">
        <h6>Conjunto de Caracteres</h6>
        <div className="row">
          {[
            { id: "lowercase", label: " Letras Minúsculas" },
            { id: "uppercase", label: " Letras Maiúsculas" },
            { id: "numbers", label: " Números" },
            { id: "symbols", label: " Símbolos" },
          ].map((item) => (
            <div key={item.id} className="col-md-6 col-lg-6 col-xl-4">
              <div className="form-check">
                <label>
                  <input
                    className="form-checkbox"
                    type="checkbox"
                    name={item.id}
                    defaultChecked={false}
                  />
                  <span className="form-indicator"></span>
                  <span className="form-text">{item.label}</span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="area-input" class="d-flex justify-content-center mt-5">
        <input
          type="text"
          required
          class="form-control w-50" 
          placeholder="Digite o lembrete da senha"
        />
        <button class=" ms-5 btn-gerar">Gerar Senha</button>
      </div>

      <div className="resources__section " id="area-dicasenha">
        <div className="resources__header top">
          <div className="top__content">
            <h2 className="top__title">Dicas de Senhas</h2>
          </div>
        </div>
        <div className="row row--lg features features--tips row--eq-height">
          {[
            {
              id: 1,
              text: "Mude suas senhas periodicamente.",
            },
            {
              id: 2,
              text: "Nunca use a mesma senha em várias contas sensíveis.",
            },
            {
              id: 3,
              text: "Use uma senha com pelo menos 16 caracteres. Deve conter letras minúsculas, letras maiúsculas, números e símbolos.",
            },
            {
              id: 4,
              text: "Evite salvar sua senha no navegador (Firefox, Chrome, Internet Explorer, Safari). Em vez disso, use uma ferramenta que gerencie um cofre de senhas criptografado.",
            },
            {
              id: 5,
              text: "Não faça login em contas sensíveis enquanto estiver conectado a uma rede Wi-Fi pública.",
            },
            {
              id: 6,
              text: "Verifique se está usando uma conexão segura (HTTPS, SSH, SFTP) antes de transmitir sua senha pela web.",
            },
          ].map((item) => (
            <div key={item.id} className="col-md-4">
              <div className="feature feature--content-left feature--counter">
                <div
                  className="feature__icon align-self-start"
                  id="number-formatter"
                >
                  {item.id}
                </div>
                <div className="feature__body">
                  <p className="feature__desc p-3">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CriarSenhas;
