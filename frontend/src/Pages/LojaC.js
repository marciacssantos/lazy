import './estilos/lojas.css'
import Loja3 from './img/loja3.jpg';
import {Card} from 'react-bootstrap'

function LojaC (){
    return(
        <Card>
            <img src={Loja3} alt="Loja de Minas Gerais" />
            <h5 className="card-title">Minas Gerais</h5><hr/>
            <div className="card-body">
                <p className="card-text">Avenida Pedro Linhares Gomes, 719</p>
            </div>
        </Card>
    )
}

export default LojaC