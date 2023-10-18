import React from 'react';
import '../css/home.css';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput,
}

from 'mdb-react-ui-kit';

const Home = () => { 

  return  (
    <MDBContainer fluid className='p-3 my-5'>
        <MDBRow class='d-flex align-items-center'>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"  class="img-fluid animacao-background" alt="Phone image" style={{
            animation: 'animacao-background 10s ease 0s 1 normal forwards'
          }} />
        </MDBCol>
 
          <MDBCol col='4' md='6'>

           <div class='mb-5 text-center'>
            <h1>SAFE GPT</h1>
           </div>

            <MDBInput wrapperClass='mb-4' placeholder='Insira seu E-mail'  id='formControlLg'  type='email' size='lg'/>
            <MDBInput wrapperClass='mb-4' placeholder='Insira sua Senha' id='formControlLg' type='password' size='lg'/>

            <div class='d-flex justify-content-center'>
              <a href="/listaSenha"> 
              <button className='mb-4 btn-entrar'>Entrar</button> 
              </a>
            </div>
    

          </MDBCol>

        </MDBRow>
    </MDBContainer>
  );
}

export default Home;