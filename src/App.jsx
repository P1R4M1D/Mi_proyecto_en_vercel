import { useState } from 'react'
import './App.css'
import BodyComponent from './component/BodyComponent'
import HeaderComponent from './component/HeaderComponent'
import FooterComponent from './component/FooterComponent'



function App() {



  const link = { home:"Home", fotos:"Fotos", about:"About", contact:"Contact" };

  const [alumnos] = useState(0);
  return (
    <>
      <HeaderComponent header={link} />
      <BodyComponent alumnosLista={alumnos}/>
      <FooterComponent />
    </>
  );
}

export default App;