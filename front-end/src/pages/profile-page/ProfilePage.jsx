import { useNavigate } from "react-router-dom";
import FetchReq from "../../services/api/FetchReq";
import useFetch from "../../services/api/useFetch";
import styles from "./PP.module.css";

function ProfilePage() {

    const navigate = useNavigate();

    const { handleFetch } = FetchReq();
    const { data, loading } = useFetch("http://localhost:3000/api/auth/me", {
        credentials: "include",
    });
    if (loading) return <div className={styles.component}></div>;

    async function handleLogout() {
        const data = await handleFetch({
        url: "http://localhost:3000/api/auth/logout",
        mth: "POST",
        });

        navigate("/login");

        console.log(data);
    }

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.info_c}>
          <span>User:</span>
          <span>{data?.user}</span>
        </div>
        <div className={styles.info_c}>
          <span>Company:</span>
          <span>{data?.company}</span>
        </div>
        <div className={styles.info_c}>
          <span>Role:</span>
          <span>{data?.role}</span>
        </div>
        <div className={styles.info_c}>
          <button className={styles.l_btn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
