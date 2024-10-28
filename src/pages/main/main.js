import { Banner, Cards } from './components'
import styles from './main.module.css'

export const Main = () => {
	return (
		<main className={styles.main}>
			<Banner />
			<Cards />
		</main>
	)
}
