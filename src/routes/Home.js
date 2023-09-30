import React from 'react';
import '../css/home.css';

const Home = () => { 

  return <div className='login-container'>
  
      <div className="container mt-5 d-flex justify-content-center flex-column align-items-center" id="ajustes-arealogin">
        
          <h1>Área de Login</h1>
            <form>
              <div id='usuario-area'> 
                <label htmlFor="usuario">Usuario</label>
                <input type="text" required name="usuario" placeholder='digite seu usuário'/>
                </div>
                <div id="senha-area">
                <label htmlFor="senha">Senha</label>
                <input type="password" required name="senha" placeholder='digite sua senha'/>
              </div>

          </form>
      
      </div>
  </div>;
};

export default Home;