import  { useContext, useState } from 'react';
import {UserContext} from '../../contexts/UserContext'
import Navbar from '../../components/navbar/navbar'
function Perfil() {
    const { username, setUsername } = useContext(UserContext);
    const [newUsername, setNewUsername] = useState(username);
    const [newEmail, setNewEmail] = useState('');
  
    const handleSave = (e) => {
      e.preventDefault();
      
      setUsername(newUsername);    
      setNewEmail(newEmail);
  
     
  
     
    };
  
    return (
      <>
      <div className="row">
        <div className=''>
            <Navbar/>
        </div>      
        <form onSubmit={handleSave}>
        <div className="mb-3">
          <label htmlFor="newUsername" className="form-label">Nome de Usuário:</label>
          <input
            type="text"
            className="form-control"
            id="newUsername"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />

        </div>
        <div className="mb-3">
          <label htmlFor="newEmail" className="form-label">E-mail:</label>
          <input
            type="email"
            className="form-control"
            id="newEmail"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Salvar Alterações</button>
      </form>
       <p>Dados atualizados para:</p>
       <p>Nome de Usuário: {newUsername}</p>
       <p>E-mail: {newEmail}</p>
    </div>
      </>
    )
  }
  
  export default Perfil;