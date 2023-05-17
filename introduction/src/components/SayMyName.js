function SayMyName(props) {
  return (
    <div>
      <p>
        Fala aí {props.nome}, tudo ok
      </p>
    </div>
  )
}

export default SayMyName

/*
  Os componentes permitem que você divida a interface do usuário 
  em partes independentes e reutilizáveis ​​e pense em cada parte 
  isoladamente. 

  Conceitualmente, componentes são como funções JavaScript. 
  Eles aceitam entradas arbitrárias (chamadas “props”) e 
  retornam elementos React descrevendo o que deve aparecer na tela.

  
*/