import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';


function App() {

  //https://www.youtube.com/watch?v=2cNLJlbudPU&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO&index=7

  /*
  const nomeCompleto = 'Jéssica Pires Rodrigues'
  const url = "https://via.placeholder.com/150"
  
  function multp(a, b){
    return a * b;
  }
  */

  const nome = "Jéssica P ires Rodrigues";
  return (
    <div className="App">
    <view>
      {/*
      <h1>Hello World React</h1>
      <p>Olá, {nomeCompleto}</p>
      <p>Multiplicação: {multp(10, 7)}</p>
      <img src={url} alt="Imagem" /> 
      */}
    </view>
    <Frase/>
      <HelloWord/>
      <SayMyName nome="Jéssica" />
      <SayMyName nome="Pires" />
      <SayMyName nome= {nome} />
      <Pessoa
        nome="Salomão"
        velhice="28"
        profissao="Professor"
        foto="https://via.placeholder.com/250"
      />
    </div>
  );
}

export default App;
