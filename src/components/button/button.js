import styles from './button.module.css'

export const Button = ({ text, width = '128px', onClick = () => {} }, props) => {
	return (
		<button className={styles.button} style={{ width }} onClick={onClick} {...props}>
			{text}
		</button>
	)
}
