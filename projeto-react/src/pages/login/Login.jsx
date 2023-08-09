import React, { useState, useContext } from 'react';
import {UserContext} from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function Login() {
    const [username, setUsername] = useState(''); 
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { setUsername: setContextUsername } = useContext(UserContext); 
    const navigate = useNavigate();
  
    const handleLogin = (e) => {
      e.preventDefault();

      if (username && password) {
        const usernameFromEmail = username.split('@')[0]; 
        setContextUsername(usernameFromEmail); 
        setMessage('Login realizado com sucesso!');
        navigate('/home');
      } else {
        setMessage('Usuário ou senha incorretos. Tente novamente.');
      }
    };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div >
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Usuário:</label>
                  <input
                    type="email"
                  
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Senha:</label>
                  <input
                    type="password"
                  
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">Entrar</button>
              </form>
              <p className="mt-3">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
