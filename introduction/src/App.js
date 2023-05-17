import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';


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
      <List/>
    </div>
  );
}

export default App;
