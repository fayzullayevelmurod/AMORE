import { GetValentine } from "../valentine/get-valentine"
import { Intro } from "../intro"

export const Main = () => {
	return (
		<main className="main">
			<Intro />
				<GetValentine />
		</main>
	)
}
