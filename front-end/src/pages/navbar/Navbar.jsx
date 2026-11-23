import styles from "./Navbar.module.css";
import Title from "../../components/nav-com/title/Title";
import Profile from "../../components/nav-com/profile/Profile";
import useFetch from "../../services/api/useFetch";
import SearchBar from "../../components/nav-com/search-bar/SearchBar";

function Navbar() {

  const {data} = useFetch("http://localhost:3000/api/auth/me")

  return (
    <div className={styles.container}>
      <Title />

      <SearchBar />

      <Profile data={data} />
    </div>
  );
}

export default Navbar;
