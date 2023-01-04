import styles from '../styles/Emailform.module.css';
import { useForm, ValidationError } from '@formspree/react';
const Emailform = () => {
	const [state, handleSubmit] = useForm("xknqqzqk"); //xknqqzqk
	if (state.succeeded) {
		return <p>Mailiniz İletildi En Kısa Sürede Dönüş Sağlayacağız !</p>;
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit} >
			<input id="adsoyad" className={`${styles.textarea} ${styles.item1}`} type={'text'} placeholder=" Ad Soyad" />
			<ValidationError
				prefix="adsoyad"
				field="adsoyad"
				errors={state.errors}
			/>
			<input
				className={`${styles.textarea} ${styles.item2}`}
				id="email"
				type="email"
				name="email"
				placeholder=" Email"
			/>
			<ValidationError
				prefix="Email"
				field="email"
				errors={state.errors}
			/>
			<textarea
				className={`${styles.textarea} ${styles.item3}`}
				id="message"
				name="message"
				placeholder=" Mesaj"
			/>
			<ValidationError
				prefix="Message"
				field="message"
				errors={state.errors}
			/>
			<button className={styles.item4} type="submit" disabled={state.submitting}>
				Mesaj Gönder
			</button>
		</form>
	);
};

export default Emailform;
