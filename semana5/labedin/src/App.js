import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://img.ibxk.com.br/2017/06/22/22100428046161.jpg?w=1200&h=675&mode=crop&scale=both" 
          nome="Astrodev" 
          descricao="Oi, sou o Tiago. Gosto de programar e de cozinhar para os meus amigos nos fds. Nos dias úteis, eu gosto de programar com a minha galera"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          title={"Email"}
          texto={"email@email.com"}
          imagem={"https://w7.pngwing.com/pngs/298/243/png-transparent-email-address-computer-icons-mail-miscellaneous-angle-triangle-thumbnail.png"}
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
          title={"Endereço"}
          texto={"Rua minha rua"}
          imagem={"https://i.pinimg.com/564x/4e/dc/b4/4edcb460a940ff726549077935f57168.jpg"}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
