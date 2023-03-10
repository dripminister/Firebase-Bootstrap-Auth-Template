import React, { useRef, useState } from "react"
import { Card, Form, Button, Alert } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


export default function Login() {
    const { login } = useAuth()

    const navigate = useNavigate()
	const emailRef = useRef()
	const passwordRef = useRef()
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setError("")
			setLoading(true)
			await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
		} catch(err) {
            console.error(err.message)
			setError("Failed to log in!")
		}
		setLoading(false)
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Log In</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								ref={emailRef}
								required
							/>
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								ref={passwordRef}
								required
							/>
						</Form.Group>
						<Button
							className="w-100 mt-4"
							type="submit"
							disabled={loading}
						>
							Log In
						</Button>
					</Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot">Forgot password?</Link>
                    </div>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Need an account? <Link to="/signup">Sign Up</Link>
			</div>
		</>
	)
}
