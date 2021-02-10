import { Col } from 'react-bootstrap'
import './estilos/produtos.css'

function Categoria (){
    return(
        <Col className="col-3">
            <div className="list-group text-center">
                <h4 className="h4 text-center ">Categorias</h4><br/>
                <a href="#" className="list-group-item list-group-item-action" >Todos(12)</a>
                <a href="#" className="list-group-item list-group-item-action">Geladeira(3)</a>
                <a href="#" className="list-group-item list-group-item-action">Fogão(2)</a>
                <a href="#" className="list-group-item list-group-item-action">Microondas(3)</a>
                <a href="#" className="list-group-item list-group-item-action">Lavadora(2)</a>
                <a href="#" className="list-group-item list-group-item-action">Lava-louça(2)</a>
            </div>
        </Col>
    )
}

export default Categoria

