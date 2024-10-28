import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Modal, TransparentButton } from '../../../../components'
import { selectUserRole } from '../../../../selectors'
import { ROLE } from '../../../../constants'
import { onLogout } from '../../../../utils'
import styles from './banner.module.css'

export const Banner = () => {
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
		<section className={styles.banner}>
			<h1 className="visually-hidden">Medical care</h1>
			<h1>Место для получения медицинской помощи</h1>
			<div className={styles.buttons}>
				{role !== ROLE.GUEST ? (
					<Button text="Выйти" onClick={() => onLogout(dispatch)} />
				) : (
					<Button text="Войти" onClick={openModal} />
				)}
				<TransparentButton text="Контакты" width="155px" />
				<Modal modalRef={modalRef} />
			</div>
		</section>
	)
}
