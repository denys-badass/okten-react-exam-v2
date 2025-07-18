import {ScaleLoader} from "react-spinners";
import styles from "./PreLoader.module.css";

export const PreLoader = () => {
    return (
        <div className={styles.loader}>
            <ScaleLoader
                color="#372aac"
                height={57}
                margin={2}
                radius={2}
                width={5}
                speedMultiplier={2}
            />
        </div>
    );
};