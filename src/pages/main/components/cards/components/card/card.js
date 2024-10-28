import styles from './card.module.css'

export const Card = ({ title, text, icon }) => {
	return (
		<li className={styles.card}>
			<img src={icon} alt="icon" loading="lazy" width={72} height={72} />
			<h2>{title}</h2>
			<div className={styles.stripe}></div>
			<span>{text}</span>
		</li>
	)
}
