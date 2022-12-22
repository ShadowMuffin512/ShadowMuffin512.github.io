import React from 'react';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import InfoSection from '../../components/InfoSection/InfoSection';
import ProjectShowcase from '../../components/InfoSection/ProjectShowcase/ProjectShowcase';
import WorkHistory from '../../components/InfoSection/WorkHistory/WorkHistory';
import Skills from '../../components/InfoSection/Skills/Skills';

import ElectronJS from '../../assets/images/electronjs.png';
import ReactPNG from '../../assets/images/reactjs.png';
import NodeJS from '../../assets/images/nodejs.png';
import Python from '../../assets/images/python.png';
import Flask from '../../assets/images/flask.png';
import MongoDB from '../../assets/images/mongodb.png';
import Svelte from '../../assets/images/svelte.png';
import RabbitMQ from '../../assets/images/rabbitmq.png';
import FocuserTimerPage from '../../assets/images/timer-page.png';
import FocuserWebsitesPage from '../../assets/images/websites-page.png';
import AnterHomePage from '../../assets/images/anter-homepage.png';
import AnterSongoffPage from '../../assets/images/anter-songoff.png';
import FocuserLogo from '../../assets/images/focuser.svg';

const Home = () => {
	return (
		<React.Fragment>
			<HomeHeader />
			<InfoSection title="Skills">
				<Skills />
			</InfoSection>
			<InfoSection title="Past Projects">
				<ProjectShowcase
					logo={FocuserLogo}
					title="F0cuser"
					images={[FocuserWebsitesPage, FocuserTimerPage]}
					description="A free & opensource distraction-reducing app for maximizing productivity!"
					technologies={[
						{ name: 'Electron.js', logo: ElectronJS },
						{ name: 'React.js', logo: ReactPNG },
						{ name: 'Node.js', logo: NodeJS },
						{ name: 'Python', logo: Python },
					]}
				/>

				<ProjectShowcase
					title="Anter.live"
					logo={FocuserLogo}
					images={[AnterHomePage, AnterSongoffPage]}
					description="A website for music lovers, who like a bit of competition"
					technologies={[
						{ name: 'Flask', logo: Flask },
						{ name: 'MongoDB', logo: MongoDB },
						{ name: 'Svelte', logo: Svelte },
						{ name: 'RabbitMQ', logo: RabbitMQ },
					]}
				/>
			</InfoSection>
			<InfoSection title="Work History">
				<WorkHistory />
			</InfoSection>
		</React.Fragment>
	);
};

export default Home;
