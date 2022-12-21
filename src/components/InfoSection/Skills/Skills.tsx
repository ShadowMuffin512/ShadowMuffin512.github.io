import React from 'react';
import BlockDropdown from '../../BlockDropdown/BlockDropdown';
import styles from '../../../styles/Skills.module.scss';

import ElectronJS from '../../../assets/images/electronjs.png';
import ReactPNG from '../../../assets/images/reactjs.png';
import Django from '../../../assets/images/django.png';
import Postgres from '../../../assets/images/postgres.png';
import Kafka from '../../../assets/images/kafka.png';
import NodeJS from '../../../assets/images/nodejs.png';
import Python from '../../../assets/images/python.png';
import Typescript from '../../../assets/images/typescript.svg';
import Flask from '../../../assets/images/flask.png';
import MongoDB from '../../../assets/images/mongodb.png';
import Svelte from '../../../assets/images/svelte.png';
import RabbitMQ from '../../../assets/images/rabbitmq.png';
import Redis from '../../../assets/images/redis.svg';

const Contact = () => {
	return (
		<div className={styles.skillsWrapper}>
			<BlockDropdown
				title="Programming Languages"
				technologies={[
					{ name: 'Python', logo: Python },
					{ name: 'TypeScript', logo: Typescript },
				]}
			/>
			<BlockDropdown
				title="Frontend Frameworks"
				technologies={[
					{ name: 'React.js', logo: ReactPNG },
					{ name: 'Svelte', logo: Svelte },
				]}
			/>
			<BlockDropdown
				title="Backend Frameworks"
				technologies={[
					{ name: 'Flask', logo: Flask },
					{ name: 'Django', logo: Django },
					{ name: 'Node.js', logo: NodeJS },
					{ name: 'Electron.js', logo: ElectronJS },
				]}
			/>
			<BlockDropdown
				title="Databases"
				technologies={[
					{ name: 'MongoDB', logo: MongoDB },
					{ name: 'PostgreSQL', logo: Postgres },
					{ name: 'Redis', logo: Redis },
				]}
			/>
			<BlockDropdown
				title="Message Brokers"
				technologies={[
					{ name: 'Kafka', logo: Kafka },
					{ name: 'RabbitMQ', logo: RabbitMQ },
				]}
			/>
		</div>
	);
};

export default Contact;
