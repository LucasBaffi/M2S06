import { useContext } from 'react';
import {UserContext} from '../../contexts/UserContext'; 
import Navbar from '../../components/navbar/navbar'
import Perfil from '../perfil/Perfil'

 function Home() {
  const { username } = useContext(UserContext);

  return (
    <div className="row">
        <div className=''>
            <Navbar/>

        </div>
      <h2>Bem vindo, {username}</h2>
  
    </div>
  );
}

export default Home;
