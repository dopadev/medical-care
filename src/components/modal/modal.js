import { Login } from './components/login/login'
import styles from './modal.module.css'

export const Modal = ({ modalRef }) => {
	return (
		<dialog ref={modalRef} className={styles.modal}>
			<div className={styles.modalContent}>
				<Login />
			</div>
		</dialog>
	)
}
