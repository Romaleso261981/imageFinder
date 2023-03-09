import { Link, useLocation } from "react-router-dom";
import styles from "./BackBtn.module.css";

export function BackBtn() {
    const { state } = useLocation();
    return <Link className={styles.backBtn} to={state ? state : '/'}>Go back</Link>
}