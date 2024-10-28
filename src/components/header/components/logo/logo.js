import { Link } from 'react-router-dom'
import styles from './logo.module.css'
import logo from '../../../../img/logo.png'

export const Logo = () => {
	return (
		<>
			<Link to="/" className={styles.logo}>
				<img
					className={styles.image}
					src={logo}
					alt="Logo"
					width={53.3}
					height={22.7}
					loading="lazy"
				/>
			</Link>
		</>
	)
}
