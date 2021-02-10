import {Container, Row} from 'reactstrap'
import Load from './img/load.gif'

import { lazy, Suspense } from 'react'

const LojaA = lazy(() => import ('./LojaA'))
const LojaB = lazy(() => import ('./LojaB'))
const LojaC = lazy(() => import ('./LojaC'))

function Lojas(){
    return(
        <Container>
            <h4><center>Nossas Lojas</center></h4>
            <Row className="ml-5">
                <Suspense fallback={<center><img src={Load}/></center>}>
                    <LojaA />
                </Suspense>

                <Suspense fallback={<center><img src={Load}/></center>}>
                    <LojaB />
                </Suspense>

                <Suspense fallback={<center><img src={Load}/></center>}>
                    <LojaC />
                </Suspense>
                
            </Row>
        </Container>
        

    )
}

export default Lojas;