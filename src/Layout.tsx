import React from 'react';
// import Lines from './components/Lines/Lines';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

const Layout = (props: { children: JSX.Element[] | JSX.Element }) => {
	return (
		<React.Fragment>
			{/* <Lines lineCount={5} /> */}
            <Navbar />
			{props.children}
			<Footer />
		</React.Fragment>
	);
};

export default Layout;
