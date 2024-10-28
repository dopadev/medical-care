import { Card } from './components'
import styles from './cards.module.css'
import icon1 from '../../../../img/icons/icon1.png'
import icon2 from '../../../../img/icons/icon2.png'
import icon3 from '../../../../img/icons/icon3.png'

export const Cards = () => {
	const cardsContent = [
		{
			title: 'Онлайн-приём',
			text: 'Рыба текст рыба текст рыба текст рыба текст рыба текст',
			icon: icon1,
		},
		{
			title: 'Экстренный случай',
			text: 'Рыба текст',
			icon: icon2,
		},
		{
			title: 'Лечение рака',
			text: 'Рыба текст',
			icon: icon3,
		},
	]

	return (
		<section>
			<h1 className="visually-hidden">Services</h1>
			<ul className={styles.cards}>
				{cardsContent.map(({ title, text, icon }) => (
					<Card key={title} title={title} text={text} icon={icon} />
				))}
			</ul>
		</section>
	)
}
