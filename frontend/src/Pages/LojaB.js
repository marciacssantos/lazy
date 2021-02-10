import './estilos/lojas.css'

import Loja2 from './img/loja2.jpg';
import {Card} from 'react-bootstrap'

function LojaB (){
    return(
        <Card>
            <img src={Loja2} alt="Loja do Rio de Janeiro"/>
            <h5 className="card-title">Rio de Janeiro</h5><hr/>
            <div className="card-body">
                <p className="card-text">Rua Professor Eurico Rabelo, 512</p>
            </div>
        </Card>
    )
}

export default LojaB