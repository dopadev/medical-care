import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../../../components'
import { selectUserRole } from '../../../../selectors'
import { ROLE } from '../../../../constants'
import { onLogout } from '../../../../utils'
import styles from './control-panel.module.css'

export const ControlPanel = () => {
	const dispatch = useDispatch()

	const role = useSelector(selectUserRole)

	const modalRef = useRef(null)

	const openModal = () => {
		if (modalRef.current) {
			modalRef.current.showModal()
			document.body.classList.add(styles.lock)
		}
	}

	const closeModal = () => {
		if (modalRef.current) {
			modalRef.current.close()
			document.body.classList.remove(styles.lock)
		}
	}

	const handleBackdropClick = ({ target }) => {
		if (target === modalRef.current) {
			closeModal()
		}
	}

	useEffect(() => {
		const modal = modalRef.current

		if (modal) {
			modal.addEventListener('click', handleBackdropClick)

			return () => {
				modal.removeEventListener('click', handleBackdropClick)
			}
		}
	}, [modalRef])

	return (
		<div className={styles.controlPanel}>
			{role === ROLE.GUEST ? (
				<>
					<button className={styles.loginButton} onClick={openModal}>
						Войти
					</button>

					<Modal modalRef={modalRef} />
				</>
			) : (
				<button className={styles.loginButton} onClick={() => onLogout(dispatch)}>
					Выйти
				</button>
			)}
		</div>
	)
}
