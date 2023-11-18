import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, ListagemSenhas, CriarSenhas } from './routes';

  
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listaSenha" element={<ListagemSenhas />} />
        <Route path="/criaSenha" element={<CriarSenhas />} />
      </Routes>
    </Router>
  );
};

// chave api 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

ReactDOM.render(<App />, document.getElementById('root'));
