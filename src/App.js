import { Container } from "react-bootstrap"
import Signup from "./components/Signup"
import { AuthProvider } from "./context/AuthContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/ForgotPassword"

function App() {

	return (
		<Container
			className="d-flex align-items-center justify-content-center"
			style={{ minHeight: "100vh" }}
		>
			<div
				className="w-100"
				style={{ maxWidth: "400px" }}
			>
				<BrowserRouter>
					<AuthProvider>
						<Routes>
							<Route
								path="/"
								element={
									<PrivateRoute>
										<Dashboard />
									</PrivateRoute>
								}
							/>
							<Route
								path="/signup"
								element={<Signup />}
							/>
							<Route
								path="/login"
								element={<Login />}
							/>
							<Route
								path="/forgot"
								element={<ForgotPassword />}
							/>
						</Routes>
					</AuthProvider>
				</BrowserRouter>
			</div>
		</Container>
	)
}

export default App
