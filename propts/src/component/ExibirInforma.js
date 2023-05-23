import React from 'react';
import ReactDOM from 'react-dom'

function ExibeInforma(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    return(     
        root.render(<h1>Hello, world!</h1>)
    )
}

export default ExibeInforma