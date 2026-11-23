import { useState } from 'react';
import styles from './LoginPage.module.css';
import FetchReq from '../../services/api/FetchReq';
import { useNavigate } from "react-router-dom";

function LoginPage() {

  //try to fetch the auth check endpoint, to check user auth each time, without ai please

  const { handleFetch } = FetchReq();
  const [isView, setIsView] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    const formVals = e.target.elements;
    const userName = formVals.username.value;
    const passWord = formVals.password.value;


    const loginData = await handleFetch({
      url: "http://localhost:3000/api/auth/login",
      mth: "POST",
      by: {
        username: userName,
        password: passWord
      }
    });

    if(loginData?.loginStatus === true){
      navigate("/", {
        replace: true
      });
    }else if(loginData?.loginStatus === false){
      window.alert("Invalid credentials");
    };

  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input minLength={1} type='text' name='username' required placeholder='Enter Username'></input>
        <div className={styles.pass}>
          <input 
          minLength={1} 
          type={isView ? "text" : "password"} 
          name='password' 
          required 
          placeholder='Enter Password' />
          <span className={styles.eye} onClick={() => setIsView(!isView)}>{isView ? "🙈" : "👁️"}</span>
        </div>
        <button type='submit'>Enter</button>
      </form>
    </div>
  )
}

export default LoginPage