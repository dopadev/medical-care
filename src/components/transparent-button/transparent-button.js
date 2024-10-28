import { Link } from 'react-router-dom'
import styles from './transparent-button.module.css'

export const TransparentButton = ({ text, width = '128px' }, props) => {
	return (
		<Link
			to="/contact"
			className={styles.transparentButton}
			style={{ width }}
			{...props}
		>
			{text}
		</Link>
	)
}
