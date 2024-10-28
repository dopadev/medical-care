import styles from './error.module.css'

export const Error = ({ error }) => {
	return (
		error && (
			<div className={styles.error}>
				<h1>{error}</h1>
			</div>
		)
	)
}
