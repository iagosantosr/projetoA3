import React, { useState } from "react";
import "../css/criaSenha.css";
import OpenAI from "openai";
import { useForm } from "react-hook-form";

const CriarSenhas = () => {
 
  const saveSenha = (senha) => {
    const senhaList = JSON.parse(localStorage.getItem('senhas')) || [];
    const novoId = senhaList.length + 1;
    senha._id = novoId;
    senha.lembrete = 'teste' + novoId;
    const updatedSenhas = [...senhaList, senha];
    localStorage.setItem('senhas', JSON.stringify(updatedSenhas));
  };

  const [senhaList, setSenhaList] = useState([]); // Renomeie para evitar conflito

  const { register, handleSubmit } = useForm();

  const [messages, setMessages] = useState([
    { role: "system", content: "Seja bem vindo ao SAFE GPT." },
  ]);

  const onSubmit = async (data) => {
    // Configuração do OpenAI
    const OPENAI_API_KEY =
      "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";
    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
      dangerouslyAllowBrowser: true,
    });

    // Construa a string de entrada para o GPT com base nos checkboxes selecionados
    const conjuntoCaracteres = Object.keys(checkboxes)
      .filter((key) => checkboxes[key])
      .map((key) => key.toLowerCase())
      .join(",");

    const inputString = `Gerar uma senha com os seguintes caracteres: ${conjuntoCaracteres}. Lembrete: ${data.lembrete}`;

    // Faça a chamada à API do GPT
    try {
      console.log("Antes da chamada à API"); // console.log debug

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [...messages, { role: "user", content: inputString }],
      });

      const senhaGerada = response.data.choices[0].text.trim();
      setMessages([...messages, { role: "assistant", content: senhaGerada }]);
      console.log("Senha gerada:", senhaGerada);

          // Obter a data atual
          const dataAtual = new Date();
          const dia = String(dataAtual.getDate()).padStart(2, '0');
          const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
          const ano = dataAtual.getFullYear();
          const dataFormatada = `${dia}/${mes}/${ano}`;

      // Salvar a senha gerada
      saveSenha({ _id: senhaList.length + 1, data: dataFormatada, lembrete: 'teste'+senhaList.length + 1, senha: senhaGerada  });

    } catch (error) {
      console.error("Erro ao chamar a API do GPT:", error);
    }
  };

  // funcao para gerar senha com base no checkbox em javascript

  const [senhas, setSenhas] = useState([]);

  const [checkboxes, setCheckboxes] = useState({
    lowercase: false,
    uppercase: false,
    numbers: false,
    symbols: false,
  });

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: !prevCheckboxes[id],
    }));
  };

  const [senhaGerada, setSenhaGerada] = useState(''); 
  
  const gerarSenha = () => {
    const caracteres = {
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      numbers: "0123456789",
      symbols: "!@#$%&*()_+",
    };
  
    let caracteresSelecionados = "";
  
    Object.keys(checkboxes).forEach((key) => {
      if (checkboxes[key]) {
        caracteresSelecionados += caracteres[key];
      }
    });
  
    if (caracteresSelecionados.length === 0) {
      alert("Selecione pelo menos uma opção para gerar a senha.");
      return;
    }
  
              // Obter a data atual
              const dataAtual = new Date();
              const dia = String(dataAtual.getDate()).padStart(2, '0');
              const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
              const ano = dataAtual.getFullYear();
              const dataFormatada = `${dia}/${mes}/${ano}`;

  // Defina o comprimento mínimo e máximo da senha
  const comprimentoMinimo = 8;
  const comprimentoMaximo = 16;

  // Gere um comprimento aleatório dentro do intervalo definido
  const comprimentoSenha = Math.floor(
    Math.random() * (comprimentoMaximo - comprimentoMinimo + 1) + comprimentoMinimo
  );

    const senha = [];
    
    for (let i = 0; i < comprimentoSenha; i++) {
      senha.push(caracteresSelecionados.charAt(Math.floor(Math.random() * caracteresSelecionados.length)));
    }

    const senhaGerada = senha.join('');
 
  setSenhas((prevSenhas) => [
    ...prevSenhas,
    { _id: senhaList.length + 1, data: dataFormatada, lembrete: 'teste'+senhaList.length + 1, senha: senhaGerada },
  ]);

  setSenhas((prevSenhas) => [
    ...prevSenhas,
    { _id: senhaList.length + 1, data: dataFormatada, lembrete: 'teste'+senhaList.length + 1, senha: senha },
  ]);

  setSenhaGerada(senha);

  // Salvar a senha gerada
  saveSenha({ _id: senhaList.length + 1, data: dataFormatada, lembrete: 'teste'+senhaList.length + 1, senha: senha });

    setSenhaGerada(senhaGerada);
  }
   

  
 
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
                    checked={checkboxes[item.id]}
                    onChange={() => handleCheckboxChange(item.id)}
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
        <button
          type="submit"
          className="ms-5 btn-gerar"
          onClick={gerarSenha}
        >
          Gerar Senha
        </button>
      </div>

      <div> 
        <p>Senha Gerada: </p>
        <p>{senhaGerada}</p> 
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
