
import style from './Frase.module.css'

function Frase(){
    return(
        <div className={style.fraseContainer}>
            <p className={style.fraseContainer}>
                Este é um paragráfo completo de uma frase
            </p>
        </div>
    )
}

export default Frase