import styles from '../styles/Emailform.module.css';

const Emailform = ({ onClick }) => {
	return (
		
			<form className={styles.form}>
				<input className={styles.item1 } type={'text'} placeholder="Ad Soyad" required />
				<input className={styles.item2} type={'email'} placeholder="Email" required />
				<textarea
					className={styles.item3}
					name="message"
					rows="6"
					id="inputMessage"
					placeholder="Mesaj"
					required=""
				/>
				<button className={ `${styles.btn} ${styles.item4}`} onClick={onClick}>
					Mesaj Gönder
				</button>
			</form>
	
	);
};

export default Emailform;
