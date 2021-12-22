import React from 'react';
import './WelcomeScreen.css';
import { Row, Col, Container } from 'react-bootstrap';



function WelcomeScreen(props) {
	return props.showWelcomeScreen ? (
		<Container className="WelcomeScreen">
			<Row>
				<Col>
				
					<h1 className="head">Welcome to the Aptly app</h1>
					<h4 className="welcome-text">
						Log in to see upcoming web development events around the world.
					</h4>
					<div className="button_cont" align="center">
						<div className="google-btn">
							<div className="google-icon-wrapper">
								<img
									className="google-icon"
									src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log
o.svg"
									alt="Google sign-in"
								/>
							</div>
							<button
								onClick={() => {
									props.getAccessToken();
								}}
								rel="nofollow noopener"
								className="btn-text"
							>
								<b>Sign in with google</b>
							</button>
						</div>
					</div>
					<a
						href="https://cauliflowersingerbee.github.io/aptly/privacy.html"
						rel="nofollow noopener"
						className="privacy-text"
					>
						Privacy policy
					</a>
				</Col>
			</Row>
		</Container>
	) : null;
}

export default WelcomeScreen;
