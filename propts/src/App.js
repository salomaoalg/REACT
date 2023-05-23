
import ExibeInforma from './component/ExibirInforma';
import Formatacao from './component/Formatacao';
function App() {

  return (
    <div>
      <ExibeInforma/>
      <Formatacao FirstName={"Salomao"} LastName={"Souza"}/>
      <Formatacao/>
    </div>
  );
}

export default App;
