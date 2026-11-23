import styles from './Profile.module.css';
import { useNavigate } from "react-router-dom";
import userIcon from '../../../assets/userIcon.png';


function Profile({ data }) {

    const navigate = useNavigate();

  return (
    <div className={styles.user}>
        <button onClick={() => navigate("/ticket-form")} className={styles.ticket_btn}>Add Ticket</button>
        <div className={styles.profile}>
            <span onClick={() => navigate("/profile")} className={styles.user_name}>{data?.user}</span>
            <img onClick={() => navigate("/profile")} className={styles.user_img} src={userIcon} />
        </div>
    </div>
  )
}

export default Profile