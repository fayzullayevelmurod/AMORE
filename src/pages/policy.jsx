
import '../assets/css/main.css'
import policy_circle from '../assets/policy_circle.png'
import logoTwo from '../assets/icons/logo-two.svg'
import heart from '../assets/heart_mini.png'

export const Policy = () => {
	return (
		<div className=" policy_page">
			<header>
				<div className="container">
					<a className='header-log' href='#!'>
						<img src={logoTwo} alt="amore logo" width='85' height='140' />
					</a>
					<div className="language">
						<button className='heart_left'>
							ENG
						</button>
						<button className='heart_mini'>
							<img src={heart} alt="heart" />
							<span>
								РУС
							</span>
						</button>
					</div>
				</div>
			</header>
            <section className="policy">
				<div className="container">
					<div className="policy_circle">
						<img src={policy_circle} alt="amore logo" />
						<h6>
							ДИСКЛЕЙМЕР
						</h6>
					</div>
					<p>
						<b>$AMORE</b> является цифровым токеном, совместимым со стандартом ERC-20. $AMORE не предоставляет своим владельцам никаких функций, полезности или внутренней ценности, а также не дает обещаний или ожиданий какой-либо финансовой отдачи, прибыли, процентов или дивидендов.
					</p>
					<p>
						<b>$AMORE</b> не представляет собой и не предназначен для использования в качестве:
					</p>
					<p>
						Средства обмена, принимаемого общественностью (или ее частью) в качестве оплаты за товары или услуги или для погашения долга.
						Способа оплаты за товары или услуги, будь то через проект <b>$AMORE или иным образом.</b><br></br>
						Средства для обмена MEME на товары или услуги.
						Представления денег (включая электронные деньги).
						Цифрового представления продукта рынка капитала, ценной бумаги, акции, долгового обязательства, единицы в схеме коллективного инвестирования, производного контракта, товара или любого другого вида финансового инструмента или инвестиции в любой юрисдикции.<br></br>
						<b>$AMORE</b> не представляет никакой доли участия, права собственности, доли или права участвовать в деловых операциях любого юридического лица или предприятия.
					</p>
					<p>
						<b>$AMORE</b> не предоставляет никаких прав на гонорары, дивиденды, доходы, прибыль или доход от инвестиций, не подлежит возврату или обмену на денежные средства или их эквивалент в любом другом цифровом активе.
					</p>
					<p>
						Проект <b>$AMORE</b> не дает никаких гарантий и обязательств по листингу <b>$AMORE</b> на какой-либо бирже.
					</p>
					<p>
						Вся информация, предоставленная в рамках проекта, носит исключительно информационный характер и не должна рассматриваться как финансовый совет. Инвесторы должны самостоятельно оценивать риски и проводить тщательный анализ перед принятием решения об инвестициях в <b>$AMORE</b>.
					</p>
				</div>
            </section>
		</div>
	)
}
