import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../../../styles/WorkHistory.module.scss';

const WorkHistory = () => {
	return (
		<div className={styles.workHistoryWrapper}>
			<div className={styles.employerSection}>
				<h1 className={styles.employerTitle}>Israeli Ministry of Defense (2021-2023)</h1>
				<div className={styles.positionSection}>
					<Row style={{alignItems: 'center'}}>
						<Col lg>
							<h2 className={styles.positionTitle}>Development Team Lead</h2>
						</Col>
						<Col lg>
							{' '}
							<ul className={styles.responsibilitiesList}>
								<li className={styles.responsibilitiesEntry}>
									Lead a team of developers and DevOps engineers, distributing
									tasks and conducting weekly stand-up meetings.
								</li>
								<li className={styles.responsibilitiesEntry}>
									Managed multiple{' '}
									<span className={styles.alternateColor}>GitLab</span> and{' '}
									<span className={styles.alternateColor}>Docker</span>{' '}
									repositories while maintaining high coding standards through{' '}
									<span className={styles.alternateColor}></span>pair programming
									and code reviews.
								</li>
							</ul>
						</Col>
					</Row>
				</div>
				<div className={styles.positionSection}>
					<Row style={{alignItems: 'center'}}>
						<Col lg>
							{' '}
							<h2 className={styles.positionTitle}>Full-Stack Developer</h2>
						</Col>
						<Col lg>
							<ul className={styles.responsibilitiesList}>
								<li className={styles.responsibilitiesEntry}>
									Built and maintained multiple microservice-oriented webapps,
									including
									<span className={styles.alternateColor}>
										{' '}
										user interfaces, business logic layers and DB connectors
									</span>
									.
								</li>
								<li className={styles.responsibilitiesEntry}>
									Created{' '}
									<span className={styles.alternateColor}>
										unit, integration and end-to-end tests
									</span>
									, and provided the CI processes to implement them.
								</li>
								<li className={styles.responsibilitiesEntry}>
									Implemented best-practice techniques and standards to ensure
									stability, readability and flexibility.
								</li>
								<li className={styles.responsibilitiesEntry}>
									Presented milestones and completed projects to managers,
									architects and clients, garnering feedback and constantly
									improving existing products.
								</li>
							</ul>
						</Col>
					</Row>
				</div>
				<div className={styles.positionSection}>
					<Row style={{alignItems: 'center'}}>
						<Col lg>
							{' '}
							<h2 className={styles.positionTitle}>Network Administrator</h2>
						</Col>
						<Col lg>
							{' '}
							<ul className={styles.responsibilitiesList}>
								<li className={styles.responsibilitiesEntry}>
									Implemented and maintained{' '}
									<span className={styles.alternateColor}>
										{' '}
										enterprise-scale security appliances
									</span>
									.
								</li>
								<li className={styles.responsibilitiesEntry}>
									Provided 24/7 support to clients from different strategic-level
									units, solving complex networking issues.
								</li>
								<li className={styles.responsibilitiesEntry}>
									Planned and implemented solutions for connecting and protecting
									nation-wide networks.
								</li>
							</ul>
						</Col>
					</Row>
				</div>
			</div>
			<div className={styles.employerSection}>
				<h1 className={styles.employerTitle}>QMasters Security (2020-2021)</h1>
				<div className={styles.positionSection}>
					<Row style={{alignItems: 'center'}}>
						<Col lg>
							{' '}
							<h2 className={styles.positionTitle}>Application Developer</h2>
						</Col>
						<Col lg>
							<ul className={styles.responsibilitiesList}>
								<li className={styles.responsibilitiesEntry}>
									Built plugins and extensions for security softwares such as{' '}
									<span className={styles.alternateColor}>Cortex XSOAR</span>,{' '}
									<span className={styles.alternateColor}>Splunk</span>,{' '}
									<span className={styles.alternateColor}>QRadar</span> and more.
								</li>
								<li className={styles.responsibilitiesEntry}>
									Helped planning and building a unified monitoring dashboard for
									company security involving different products for input.
								</li>
								<li className={styles.responsibilitiesEntry}>
									Provided technical support regarding existing applications, and
									updating them according to customer feedback.
								</li>
							</ul>
						</Col>
					</Row>
				</div>
			</div>
		</div>
	);
};

export default WorkHistory;
