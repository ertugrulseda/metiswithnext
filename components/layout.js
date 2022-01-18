import Navbar from './navbar';
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
	return (
		<div>
			<div className={styles.bg} />
			<div className={`${styles.bg} ${styles.bg2}`} />
			<div className={`${styles.bg} ${styles.bg3}`}  />
		
				<Navbar />
				<main className={styles.main}>{children}</main>
				<footer>design by</footer>
			
		</div>
	);
};
export default Layout;
