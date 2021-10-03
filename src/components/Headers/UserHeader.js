// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
	return (
		<>
			<div
				className="header pb-5 pt-5 pt-lg-8 d-flex align-items-center"
				// style={{
				// 	minHeight: "600px",
				// 	backgroundImage:
				// 		"url(" + require("../../assets/img/theme/bus.jpg").default + ")",
				// 	backgroundSize: "cover",
				// 	backgroundPosition: "center top",
				// }}
			>
				{/* Mask */}
				<span className="mask bg-gradient-default opacity-6" />
				{/* Header container */}
				<Container className="d-flex align-items-center" fluid>
					<Row>
						<Col lg="7" md="10">
							<p className="text-white mt-0 mb-5"></p>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
};

export default UserHeader;
