import Login from "./Login";
import Mainpage from "./Mainpage";
import { useSelector } from "react-redux";

import styles from "../styles/Home.module.css";

export default function Home() {
  const user = useSelector((state) => state.admin.login);
  return (
    <div className={styles.container}>{user ? <Mainpage /> : <Login />}</div>
  );
}
