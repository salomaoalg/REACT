import PropTypes from 'prop-types'

function Item({marca, ano_lancamento}){
    return (
        <>
           <li>
                {marca} - {ano_lancamento}
           </li>
        </>
    )
}
Item.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0,
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number,
}

export default Item


/*
    function Item(props){
    return (
        <>
            <li>{props.marca}</li>
            <p>Linha</p>
        </>
    )
}

export default Item
*/