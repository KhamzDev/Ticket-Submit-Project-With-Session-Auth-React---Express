import { RouterProvider } from "react-router-dom";
import { route } from "./Router.jsx";
import styles from "./App.module.css";
import InputVal from "./services/context/InputVal.jsx";


function App() {
  return (
    <div className={styles.app}>
      <InputVal>
        <RouterProvider router={route} />
      </InputVal>
    </div>
  )
}

export default App

