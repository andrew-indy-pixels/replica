import styles from './SubHeader.module.css';
import { MdOutlineFileUpload } from "react-icons/md";
const iconStyle = { color: "rgb(119,207,190)", fontSize: "2.5em" }

export default function SubHeader () {
    return (
        <div className={styles.subHeader}>
            <div className={styles.subHeaderTitleContainer}>
                <div className={styles.subHeaderTitle}>
                    how do you look today?
                </div>
                <div className={styles.subHeaderSubTitle}>
                    provide a selfie to learn how AI can improve your fit, drop an image or click here to upload
                </div>
            </div>
            <div className={styles.filler}></div>
            <div className={styles.uploadSection}>
                <MdOutlineFileUpload style={iconStyle}/>
            </div>
        </div>
    );
};