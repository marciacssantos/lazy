import './estilos/home.css'
import Load from './img/load.gif'

import { lazy, Suspense } from 'react'

const Carrossel = lazy(() => import ('./Carrossel'))

function Home() {
  
  
    return (
      <>
      <h2 className="mx-auto py-3 text-center">Bem Vindos a FullStack Eletro!!</h2>
      
      <Suspense fallback={<center><img src={Load}/></center>}>
        <Carrossel />
      </Suspense>
      </>
    );
  }
  

export default Home;