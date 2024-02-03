import { Home } from "./pages/home"
import { Policy } from "./pages/policy"
import { BrowserRouter , Routes, Route } from 'react-router-dom';

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/policy" element={<Policy />} />
			</Routes>
		</BrowserRouter>
	)
}