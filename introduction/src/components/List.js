import Item from './Item'

function List(){
    return(
        <>
            <h1>My List</h1>
            <ul>
                <Item marca="Ferrari" ano_lancamento={1997}/>
                <Item marca="Mercedes" ano_lancamento={1998}/>
                <Item marca="Mitsubishi" />
                <Item marca="Nissan" ano_lancamento={2000} />
                <Item/>
            </ul>
        </>
    )
}

export default List