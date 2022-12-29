import styles from '../styles/Modal.module.css';
function Modal({ children, shown, close }) {
	return shown ? (
		<div
			className={styles.modalbackdrop}
			onClick={() => {
				close();
			}}
		>
			<div
				className={styles.modalcontent}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className={styles.closeBtn}>
					<button  onClick={close}>
						X
					</button>
				</div>
				{children}
			</div>
		</div>
	) : null;
}

export default Modal;
