import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/index.scss';
import Home from './routes/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Layout>
		<RouterProvider router={router} />
	</Layout>
);
