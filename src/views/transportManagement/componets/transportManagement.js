// reactstrap components
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	CardText,
	Modal,
	Col,
} from "reactstrap";
import * as Yup from "yup";
// import PaymentModal from "./PaymentHandling/PaymentModal";
import axios from "axios";
// core components

import { useFormik } from "formik";
import UserHeader from "components/Headers/UserHeader";
import CreateTimeTable from "../modals/createTimeTable";
import ViewTimeTabls from "./ViewTimeTabls";

const TransportManagement = (props) => {
	return (
		<>
			<UserHeader />
			<Container className="mt--7">
				<Row>
					<Col>
						<CreateTimeTable />
					</Col>
					<Row>
						<Col className="px-0">
							<Button size="sm">Monthely</Button>
						</Col>
						<Col className="px-0">
							<Button size="sm">Weekly</Button>
						</Col>
						<Col className="px-0">
							<Button size="sm" className="" color="primary">
								Daily
							</Button>
						</Col>
					</Row>
				</Row>
				<Row className="mt-5">
					<ViewTimeTabls />
				</Row>
			</Container>
		</>
	);
};

export default TransportManagement;
