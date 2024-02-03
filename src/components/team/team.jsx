import './team.css';
import policy_circle from '../../assets/policy_circle.png'
import hearts_team from '../../assets/hearts_team.png'
import { Link } from 'react-router-dom'

export const Team = () => {
	return (
        <div className="wrapper team">
            <img className='team_left' src={hearts_team} alt="" />
            <div className="container">
                <div className="policy_circle">
                    <Link to="/policy">
                        <img src={policy_circle} alt="amore logo" />
                        <h6>
                            ДИСКЛЕЙМЕР
                        </h6>
                    </Link>
                </div>
                <div className="tema_section">
                    <div className="team_right">
                        <h5>
                            КОМАНДА
                        </h5>
                        <div className="team_right_card card_left
                        ">
                            <div className="card_img"></div>
                            <div className="card_text">
                                <h4>
                                    Леонид
                                </h4>
                                <span>
                                    Фаундер
                                </span>
                                <p>
                                    Любитель 100х плеча, Ангел-инвестор.
                                </p>
                            </div>
                        </div>
                        <div className="team_right_card card_right
                        ">
                            <div className="card_text">
                                <h4>
                                Андрей
                                </h4>
                                <span className='bg_black'>
                                Креативный Директор
                                </span>
                                <p>
                                Мечтатель, Секс-инструктор и Прекрасный розовый тигр.
                                </p>
                            </div>
                            <div className="card_img"></div>
                        </div>
                        <div className="team_right_card card_left
                        ">
                            <div className="card_img"></div>
                            <div className="card_text">
                                <h4>
                                Даниил
                                </h4>
                                <span className='bg_pink'>
                                Комьюнити-менеджер
                                </span>
                                <p>
                                Гений, миллиардер, плэйбой, филантроп.
                                </p>
                            </div>
                        </div>
                        <div className="team_right_card card_right
                        ">
                            <div className="card_text">
                                <h4>
                                Ника
                                </h4>
                                <span className='bg_blue'>
                                Дизайнер
                                </span>
                                <p>
                                Графичейский, Веб, 3D дизайнер, мать драконов. 
                                </p>
                            </div>
                            <div className="card_img"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}
