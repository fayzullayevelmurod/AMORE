import { GetValentine } from "../valentine/get-valentine"
import { Intro } from "../intro/intro"
import { Amore } from "../amore/amore"

export const Main = () => {
	return (
		<main className="main">
			<Intro />
			<GetValentine />
			<div className="container">
				<Amore />
			</div>
		</main>
	)
}
