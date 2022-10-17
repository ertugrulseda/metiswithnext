import styles from '../styles/Production.module.css';
import YoutubeVideo from '../components/youtubevideo';
import History from '../components/history';

const Production = () => {
	return (
		<div className={styles.productionwrapper}>
			<div className={styles.griditem}>
				<YoutubeVideo />{' '}
			</div>
			<div className={styles.griditem}>
				<History/>
			</div>
		</div>
	);
};
export default Production;
