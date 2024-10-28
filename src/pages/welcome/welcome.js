import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, TransparentButton, Error } from '../../components'
import { selectUserLogin, selectUserRole } from '../../selectors'
import { ERROR, ROLE } from '../../constants'
import { wasOnWelcomePage } from '../../actions'
import { onLogout } from '../../utils'
import styles from './welcome.module.css'

export const Welcome = () => {
	const dispatch = useDispatch()
	const role = useSelector(selectUserRole)
	const login = useSelector(selectUserLogin)

	useEffect(() => {
		dispatch(wasOnWelcomePage(true))
	})

	if (role === ROLE.GUEST) return <Error error={ERROR.ACCESS_DENIED} />

	return (
		<section className={styles.welcome}>
			<div>
				<h1 className="visually-hidden">Welcome</h1>
				<h1>Привет, {login}</h1>
				<div className={styles.buttons}>
					<Button
						text="Выйти из аккаунта"
						width="228px"
						onClick={() => onLogout(dispatch)}
					/>
					<TransparentButton text="Перейти в контакты" width="239px" />
				</div>
			</div>
		</section>
	)
}
