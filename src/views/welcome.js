const { Button } = require("bootstrap");
const { Row, Col, Container } = require("reactstrap");

const Welcome = (props) => {
	return (
		<>
			<Container>
				<Row className="mt-5">
					<Col className="display-3 text-center">WELCOME TO SHUTTLE</Col>
				</Row>
				<Row>
					<Col className="text-center m-5">
						<Row className="d-flex justify-content-center">
							<p className="col-5">
								Are you looking for the right travel subscription ? Use our
								'SHUTTLE'! Make your journey easir with our public Transport
								Service. Enter your card details and top up your smart card
								through the website.
							</p>
						</Row>
						<Row className="w-50 mx-auto">
							<Col>{/* <Button>Login</Button> */}</Col>
							<Col>
								{/* <button className="btn btn-outline-light">Sing Up</button> */}
							</Col>
						</Row>
					</Col>
				</Row>
				<Row className="mx-auto">
					<Col>
						<Row className="my-4">
							<img
								width="200px"
								className="rounded-rectangle"
								alt="..."
								src={require("../assets/img/theme/team-4-800x800.jpg").default}
							/>
						</Row>
						<Row>
							<h3 className="text-success">Top Up Your Smart Card</h3>
						</Row>
					</Col>
					<Col>
						<Row className="my-4">
							<img
								width="200px"
								className="rounded-rectangle"
								alt="..."
								src={require("../assets/img/theme/team-4-800x800.jpg").default}
							/>
						</Row>
						<Row>
							<h3 className="text-danger">Get Your Time Table</h3>
						</Row>
					</Col>
					<Col>
						<Row className="my-4">
							<img
								width="200px"
								className="rounded-rectangle"
								alt="..."
								src={require("../assets/img/theme/team-4-800x800.jpg").default}
							/>
						</Row>
						<Row>
							<h3 className="text-success">Check Your Smart Card Blance</h3>
						</Row>
					</Col>
					<Col>
						<Row className="my-4">
							<img
								width="200px"
								className="rounded-rectangle"
								alt="..."
								src={require("../assets/img/theme/team-4-800x800.jpg").default}
							/>
						</Row>
						<Row>
							<h3 className="text-danger">Get your Journey Details</h3>
						</Row>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Welcome;
