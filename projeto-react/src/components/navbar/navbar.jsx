import  { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

function Navbar() {
  const { setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUsername(''); // Limpa o nome de usuário no contexto
    navigate('/'); // Redireciona para a página de login ou apropriada
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container d-flex justify-flex-end gap-5 ">                 
            <button className="btn btn-primary" onClick={() => navigate('/Home')}>Home</button>                 
            <button className="btn btn-primary" onClick={() => navigate('/perfil')}>Perfil</button>                 
            <button className="btn btn-primary" onClick={() => navigate('')}>Contato</button>                  
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>             
    </div>
  </nav>
  );
}

export default Navbar;
