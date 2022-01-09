import Navbar from './navbar';
import styles from '../styles/Layout.module.css';
const Layout = ({ children }) => {
	return (
		<div>
			<Navbar></Navbar>
			<main className={styles.main}>
				{children}
			</main>
			<footer>design by</footer>
		</div>
	);
};
export default Layout;
