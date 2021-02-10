import './estilos/lojas.css'
import Loja1 from './img/loja1.jpg';
import {Card} from 'react-bootstrap'

function LojaA (){
    return(
        <Card>
            <img  src={Loja1} alt="loja de São Paulo"/>
            <h5 className="card-title">São Paulo</h5><hr/>
            <div className="card-body">
                <p className="card-text">Av.do Estado, 2473</p>
            </div>
        </Card>
    )
}

export default LojaA