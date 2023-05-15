import './App.css';
import HelloWord from './components/HelloWord';


function App() {
  const nomeCompleto = 'Jéssica Pires Rodrigues'
  const url = "https://via.placeholder.com/150"

  function multp(a, b){
    return a * b;
  }

  return (
    <div className="App">
      <h1>Hello World React</h1>
      <p>Olá, {nomeCompleto}</p>
      <p>Multiplicação: {multp(10, 7)}</p>
      <img src={url} alt="Imagem" />
      <HelloWord/>
    </div>
  );
}

export default App;
