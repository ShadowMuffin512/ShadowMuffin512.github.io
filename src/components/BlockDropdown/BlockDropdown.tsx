import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from '../../styles/BlockDropdown.module.scss';
import { Container } from 'react-bootstrap';

const BlockDropdown = (props: {
	title: string;
	technologies: { name: string; logo: string }[];
}) => {
	const [open, setOpen] = React.useState(false);
	const collapseButton = React.useRef<HTMLButtonElement>(null);

	return (
		<React.Fragment>
			<button
			    ref={collapseButton}
				className={styles.collapseButton}
				onClick={() => setOpen(!open)}
				aria-controls="example-collapse-text"
				aria-expanded={open}
			>
				<p>{props.title}</p>
				<strong>{!open ? '⮟' : '⮝'}</strong>
			</button>
			<Collapse in={open}>
				<div className={styles.collapseContent}>
					<Container>
						<Row>
							{props.technologies.map((tech, i) => (
								<Col key={i}>
									<div className={styles.collapseTechWrapper}>
										<img
											src={tech.logo}
											alt={tech.name}
											className={styles.collapseTechLogo}
										/>
										<p className={styles.collapseTechName}>{tech.name}</p>
									</div>
								</Col>
							))}
						</Row>
					</Container>
				</div>
			</Collapse>
		</React.Fragment>
	);
};

export default BlockDropdown;
