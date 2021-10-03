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
import ViewComplaints from "./ViewComplaints";

const Complaints = (props) => {
	return (
		<>
			<UserHeader />
			<Container className="mt--7">
				<Row></Row>
				<Row className="mt-5">
					<ViewComplaints />
				</Row>
			</Container>
		</>
	);
};

export default Complaints;
