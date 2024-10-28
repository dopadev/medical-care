import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { setUser } from '../../../../actions'
import { ROLE } from '../../../../constants'
import { selectUserRole, selectWasOnWelcomePage } from '../../../../selectors'
import { useResetForm } from '../../../../hooks'
import { Button } from '../../../button/button'
import styles from './login.module.css'

const loginFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните поле логина')
		.matches(/^\w+$/, 'Некорректный логин. Используются только буквы и цифры')
		.min(3, 'Некорректный логин. Минимум 3 символа')
		.max(15, 'Некорректный логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните поле пароля')
		.matches(
			/^[\w#$%]+$/,
			'Некорректный пароль. Используются только буквы, цифры и символы: # $ %',
		)
		.min(6, 'Некорректный пароль. Минимум 6 символов')
		.max(30, 'Некорректный пароль. Максимум 30 символов'),
})

export const Login = () => {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(loginFormSchema),
	})

	const dispatch = useDispatch()

	useResetForm(reset)

	const onSubmit = async ({ login, password }) => {
		try {
			const response = await fetch('http://localhost:3001/users')

			if (!response.ok) {
				throw new Error('Ошибка при получении данных пользователей')
			}

			const users = await response.json()

			const user = users.find(
				user => user.login === login && user.password === password,
			)

			if (user) {
				dispatch(setUser(user))
				sessionStorage.setItem('userData', JSON.stringify(user))
			} else {
				throw new Error('Неверный логин или пароль')
			}
		} catch (error) {
			console.error(error.message)
		}
	}

	const errorMessage = errors?.login?.message || errors?.password?.message

	const role = useSelector(selectUserRole)

	const wasOnWelcomePage = useSelector(selectWasOnWelcomePage)

	if (!wasOnWelcomePage && role !== ROLE.GUEST) return <Navigate to="/welcome" />

	return (
		<div className={styles.login}>
			<div className={styles.card}>
				<h2 className={styles.title}>Авторизация</h2>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<input type="text" placeholder="Login" {...register('login')} />
					<input type="password" placeholder="Password" {...register('password')} />
					<Button
						text="Войти"
						width="100%"
						className={styles.loginBtn}
						type="submit"
						disabled={!!errorMessage}
					/>
				</form>
			</div>

			{errorMessage && <span className="error-message">{errorMessage}</span>}
		</div>
	)
}
