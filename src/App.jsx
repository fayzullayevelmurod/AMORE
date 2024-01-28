import { Footer, Header } from "./components/layout"
import { Main } from "./components/layout/main"

export const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<Main />
			<Footer />
		</div>
	)
}
