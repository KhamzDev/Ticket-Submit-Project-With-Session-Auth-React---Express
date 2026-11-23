import styles from './Title.module.css';
import logoImg from '../../../assets/logoImg.png';
import { useNavigate } from 'react-router-dom';

function Title() {

    const navigate = useNavigate();

  return (
    <div className={styles.logo}>
        <img className={styles.logo_img} src={logoImg} />
        <span onClick={() => navigate('/')} className={styles.title}>Tickets</span>
    </div>
  )
}

export default Title