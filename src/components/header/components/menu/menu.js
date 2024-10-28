import { Link } from 'react-router-dom'
import styles from './menu.module.css'

export const Menu = () => {
	return (
		<div className={styles.menu}>
			<ul>
				<li className={styles.menuItem}>
					<Link to="/contact">Контакты</Link>
				</li>
			</ul>
		</div>
	)
}
