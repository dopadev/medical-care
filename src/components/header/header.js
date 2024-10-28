import { ControlPanel, Logo, Menu } from './components'
import styles from './header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerContainer}>
				<Logo />
				<div className={styles.rightGroup}>
					<Menu />
					<ControlPanel />
				</div>
			</div>
		</header>
	)
}
