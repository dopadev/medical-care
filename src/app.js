import React, { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { Error, Header } from './components'
import { Main, Contact, Welcome } from './pages'
import { setUser } from './actions'
import { ERROR } from './constants'
import styles from './app.module.css'

export const App = () => {
	const dispatch = useDispatch()

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData')

		if (!currentUserDataJSON) return

		const currentUserData = JSON.parse(currentUserDataJSON)

		dispatch(
			setUser({
				...currentUserData,
				role: Number(currentUserData.role),
			}),
		)
	}, [dispatch])

	return (
		<div className={styles.app}>
			<Header />
			<div className={styles.container}>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/welcome" element={<Welcome />} />
					<Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} />
				</Routes>
			</div>
		</div>
	)
}
