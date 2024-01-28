import { GetValentine } from "../valentine/get-valentine"
import { Intro } from "../intro/intro"
import { Amore } from "../amore/amore"
import { Rodmap } from "../rodmap/rodmap"
import { Tokenomics } from "../tokenomics/tokenomics"

export const Main = () => {
	return (
		<main className="main">
			<Intro />
			<GetValentine />
			<div className="container">
				<Amore />
				<Rodmap />
			</div>
			<Tokenomics />
		</main>
	)
}
