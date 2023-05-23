import PropTypes from 'prop-types'



function Formatacao({FirstName, LastName}){
    return (
        <>
            <h1>{FirstName} - {LastName}</h1>
        </>
    )
}

Formatacao.propTypes = {
    FirstName: PropTypes.string.isRequired,
    LastName: PropTypes.string.isRequired,
}
Formatacao.defaultProps = {
    FirstName: 'Sem nome',
    LastName: 'Sem nome',
}
export default Formatacao