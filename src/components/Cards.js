import Image from 'next/image';
import styles from './Cards.module.css';

export default function Cards ({ data }) {
    return (
        <div className={styles.cards}>
            {['1', '2', '3', '1', '2'].map(image => {
                return (
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <Image
                                aria-hidden
                                src={`/fashion/${image}.png`}
                                alt="fashion image"
                                width={400}
                                height={300}
                            />
                        </div>
                        <div className={styles.caption}>
                            <div className={styles.title}>
                                Groovy vibrance a retro revival ...
                            </div>
                            <div className={styles.info}>
                                <div className={styles.lastSeen}>
                                    2 hours ago
                                </div>
                                <div className={styles.tags}>
                                    <div className={styles.tag}>
                                        vibrant
                                    </div>
                                    <div className={styles.tag}>
                                        vibrant
                                    </div>
                                    <div className={styles.tag}>
                                        vibrant
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};