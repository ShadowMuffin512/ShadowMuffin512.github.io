import React from 'react';
import styles from '../../styles/Footer.module.scss';

import GithubLogo from '../../assets/images/github.png';
import LinkedinLogo from '../../assets/images/linkedin.png';
import MailLogo from '../../assets/images/mail.png';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footerWrapper}>
			<div className={styles.contactsWrapper}>
				<a className={styles.contactEntry} href="mailto:liordah0@gmail.com">
					<img className={styles.contactLogo} src={MailLogo} alt="mail" />
					<p>liordah0@gmail.com</p>
				</a>
				<a className={styles.contactEntry} href="https://github.com/ShadowMuffin512">
					<img className={styles.contactLogo} src={GithubLogo} alt="github" />
					<p>github.com/ShadowMuffin512</p>
				</a>
				<a className={styles.contactEntry} href="https://www.linkedin.com/in/Lior-Dahan">
					<img className={styles.contactLogo} src={LinkedinLogo} alt="linkedin" />
					<p>linkedin.com/in/Lior-Dahan</p>
				</a>
			</div>
			<p>© Lior Dahan {currentYear}</p>
		</footer>
	);
};

export default Footer;
