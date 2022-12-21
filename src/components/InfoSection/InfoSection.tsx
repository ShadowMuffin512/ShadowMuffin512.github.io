import React from 'react';
import styles from '../../styles/InfoSection.module.scss';

const InfoSection = (props: { title: string; children: JSX.Element[] | JSX.Element }) => {
	return (
		<React.Fragment>
			<div className={styles.infoSectionWrapper}>
				<h2 className={`${styles.infoSectionTitle} infoSectionTitle`} id={props.title}>{props.title}</h2>
				<div className={styles.infoSectionItems}>{props.children}</div>
			</div>
		</React.Fragment>
	);
};

export default InfoSection;
