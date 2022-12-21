import React from 'react';
import styles from '../../styles/HomeHeader.module.scss';

const HomeHeader = () => {
	const scrollToProjects = () => {
		document.querySelector(".infoSectionTitle")!.scrollIntoView(true);
	}
	return (
		<div style={{ textAlign: 'center' }}>
			<div className={styles.headerWrapper}>
				<div style={{ textAlign: 'left' }}>
					<h1 className={styles.headerTitle}>
						Professional Apps{' '}
						<span style={{ letterSpacing: 0 }} className={styles.alternateColor}>
							=&gt;
						</span>{' '}
						Web <span className={styles.alternateColor}>&&</span> Desktop
					</h1>
					<h2 className={`${styles.headerSubtitle}`}>
						Building <span className={styles.alternateColor}>dreams</span>, one refresh
						at a time ;)
					</h2>
				</div>
			</div>
			<button className={`${styles.scrollDownButton}`} onClick={scrollToProjects}>⇓ What Do I Do? ⇓</button>
		</div>
	);
};

export default HomeHeader;
