import BlockDropdown from '../../BlockDropdown/BlockDropdown';
import styles from '../../../styles/ProjectShowcase.module.scss';
import React from 'react';



const InfoSectionContent = (props: {
	title: string;
	description: string;
	images: string[];
	technologies: { name: string; logo: string }[];
}) => {
	return (
		<div className={styles.infoSectionContentWrapper}>
			<h1 className={styles.infoSectionContentTitle}>{props.title}</h1>
			<p className={styles.infoSectionContentDescription}>
				<i>{props.description}</i>
			</p>
			<div className={styles.infoSectionContentImages}>
				{props.images.map((image, i) => (
					<img
						key={i}
						src={image}
						alt="project-screenshot"
						className={styles.infoSectionContentImage}
					/>
				))}
			</div>
			<BlockDropdown title="Technologies Used" technologies={props.technologies} />
		</div>
	);
};

export default InfoSectionContent;
