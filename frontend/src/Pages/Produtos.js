import { useState, useEffect } from 'react';
import Produto from '../Components/Produto';
import { Container, Row, Col } from 'react-bootstrap';

import './estilos/produtos.css'

import Load from './img/load.gif'
import { lazy, Suspense } from 'react'
const Categoria = lazy(() => import ('./Categoria'))

function Produtos() {
    const [produtos, setProdutos] = useState([]);
    useEffect(async () => {
        const resposta = await fetch("http://localhost:3333/produtos")
        const dados = await resposta.json()
        setProdutos(dados);
    }, []);


    return (
       <Container fluid={true}>
           <Row>
                <Suspense fallback={<center><img src={Load}/></center>}>
                    <Categoria />
                </Suspense>


               <Col className="col-9">
                    <div className="prod">
                        <Row>
                            {produtos && produtos.map(item => <Produto imagem={item.imagem} descricao={item.descricao} categoria={item.categoria} preco={item.preco} preco_venda={item.preco_venda} />)}
                        </Row>
                    </div>
                </Col>
                
            </Row>
        
            
       </Container>
       
    )
}

export default Produtos;