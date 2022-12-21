import React from 'react';
import styles from '../../styles/Navbar.module.scss';

import GithubLogo from '../../assets/images/github.png';
import LinkedinLogo from '../../assets/images/linkedin.png';
import MailLogo from '../../assets/images/mail.png';

const Navbar = () => {
	const scrollToElement = (elementId: string) => {
		document.getElementById(elementId)!.scrollIntoView(true);
	};

	const scrollToTop = () => window.scrollTo(0, 0);

	return (
		<nav className={styles.nav}>
			<button className={styles.navTitle} onClick={scrollToTop}>
				<h1 className={styles.navTitle}>Lior Dahan</h1>
			</button>
			<div className={`${styles.navbarLinkGroup} ${styles.left}`}>
				<button onClick={() => scrollToElement('Skills')} className={styles.navbarLink}>
					Skills
				</button>
				<button
					onClick={() => scrollToElement('Past Projects')}
					className={styles.navbarLink}
				>
					Projects
				</button>
				<button
					onClick={() => scrollToElement('Work History')}
					className={styles.navbarLink}
				>
					Employment
				</button>
			</div>
			<div className={styles.navbarLinkGroup}>
				<a
					className={styles.navbarLink}
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/Lior-Dahan"
				>
					<img src={LinkedinLogo} alt="linkedin" />
				</a>
				<a
					className={styles.navbarLink}
					target="_blank"
					rel="noreferrer"
					href="https://github.com/ShadowMuffin512"
				>
					<img src={GithubLogo} alt="github" />
				</a>
				<a
					className={styles.navbarLink}
					target="_blank"
					rel="noreferrer"
					href="mailto:liordah0@gmail.com"
				>
					<img src={MailLogo} alt="github" />
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
