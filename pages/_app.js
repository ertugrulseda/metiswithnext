import '../styles/globals.css';
import Layout from '../components/layout';

function Metis({ Component, pageProps }) {
	return (
		<div>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</div>
	);
}

export default Metis;
