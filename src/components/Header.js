import styles from './Header.module.css';

export default function Header () {
    return (
        <div className={styles.header}>
            <div className={styles.siteName}>
                stylepilled
            </div>
            <div className={styles.links}>
                <div className={styles.link}>trending</div>
                <div className={styles.link}>leading</div>
            </div>
            <div className={styles.signIn}>
                Sign In
            </div>
        </div>
    );
};