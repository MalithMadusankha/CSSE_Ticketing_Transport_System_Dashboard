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

const Recharge = (props) => {
	console.log("Id is: ", props.match.params._id);

	const [addsData, setAdd] = useState(0);

	const [notificationModal, setmodalDemo] = useState(false);

	function toggleModal() {
		setmodalDemo(!notificationModal);
	}

	useEffect(() => {
		axios
			.get(`http://localhost:8080/advertisement/get/${props.match.params._id}`)
			.then((res) => {
				console.log(res);
				setAdd(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	const today = new Date();
	const currentDate =
		today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
	console.log("kl", currentDate);

	var boosting_Package = [
		"1 day",
		"3 day",
		"5 day",
		"10 day",
		"20 day",
		"30 day",
	];
	const [newPackage, setnewPackage] = useState(null);

	const [boostPK, setBoostPK] = useState("");

	function totalcal(event) {
		for (var i = 0; i < boosting_Package.length; i++) {
			if (event.target.value == boosting_Package[i]);
			{
				switch (event.target.value) {
					case "1 day":
						setnewPackage("LKR. 500.00");

						break;

					case "3 day":
						setnewPackage("LKR. 750.00");

						break;

					case "5 day":
						setnewPackage("LKR. 1000.00");

						break;

					case "10 day":
						setnewPackage("LKR. 1500.00");
						break;

					case "20 day":
						setnewPackage("LKR. 3000.00");
						break;

					case "30 day":
						setnewPackage("LKR. 5000.00");
						break;

					default:
						setnewPackage("LKR. 00.00");
						break;
				}
			}
			break;
		}
	}

	const total = newPackage;

	const initialValues = {
		enableReinitialize: true,
		validateOnMount: true,
		boosting_Pack: boostPK,
		total: total,
	};

	//Yup validations
	const validationSchema = Yup.object({
		boosting_Pack: Yup.string().required("Required"),
		total: Yup.string().required("Required"),
	});

	const onSubmit = (values) => {
		console.log("form data", values);
		axios
			.put(
				`http://localhost:8080/advertisement/Recharge/${props.match.params._id}`,
				values
			)
			.then((res) => {
				console.log(res);
				// history.push({
				//   pathname: `/admin`,
				// });
				// history.pushState({
				//   pathname: ''
				// })
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const formik = useFormik({
		onSubmit,
		enableReinitialize: true,
		validateOnMount: true,
		initialValues,
		validationSchema,
	});
	return (
		<>
			<UserHeader />
			{/* Page content */}
			<Container className="mt--7">
				<Card>
					<CardHeader className="display-3 text-center">
						Top Up Your Smart Card
					</CardHeader>
					<CardBody>
						<div className="d-flex justify-content-between bg-gradient-green px-3 PY-1 text-secondary rounded mb-5">
							<div className="display-4">Available Balance</div>
							<div className="display-4">LKR 150.00</div>
						</div>
						{/*===========  form *================*/}
						<div className="w-50 mx-auto card-body border border-info rounded">
							<Form onSubmit={formik.handleSubmit}>
								<Row>
									<Col>
										<FormGroup>
											<label
												className="form-control-label"
												htmlFor="service_provider_type"
											>
												Card Number
											</label>
											<Input
												className="form-control-alternative"
												id="busNo"
												placeholder="Enter Bus No"
												type="text"
												name="busNo"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.busNo}
											/>
											{formik.touched.busNo && formik.errors.busNo ? (
												<div style={{ color: "red" }}>
													{formik.errors.busNo}
												</div>
											) : null}
										</FormGroup>

										<FormGroup>
											<label className="form-control-label" htmlFor="bus_name">
												Expier Date
											</label>
											<Input
												className="form-control-alternative"
												id="bus_name"
												placeholder="Enter Bus Name"
												type="text"
												name="bus_name"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.bus_name}
											/>
											{formik.touched.bus_name && formik.errors.bus_name ? (
												<div style={{ color: "red" }}>
													{formik.errors.bus_name}
												</div>
											) : null}
										</FormGroup>
									</Col>
								</Row>
								<Row>
									<Col>
										<FormGroup>
											<label className="form-control-label" htmlFor="route_no">
												CV Code
											</label>

											<Input
												className="form-control-alternative"
												placeholder="Enter Route No"
												type="text"
												name="route_no"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.route_no}
											/>
											{formik.touched.route_no && formik.errors.route_no ? (
												<div style={{ color: "red" }}>
													{formik.errors.route_no}
												</div>
											) : null}
										</FormGroup>

										<FormGroup>
											<label
												className="form-control-label"
												htmlFor="route_name"
											>
												Amount
											</label>
											<Input
												className="form-control-alternative"
												id="route_name"
												placeholder="Enter Route Name"
												type="text"
												name="route_name"
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												value={formik.values.route_name}
											/>
											{formik.touched.route_name && formik.errors.route_name ? (
												<div style={{ color: "red" }}>
													{formik.errors.route_name}
												</div>
											) : null}
										</FormGroup>
									</Col>
								</Row>
								{/* ========= Buttons =============== */}
								<div className="modal-footer">
									<Button color="danger" type="submit">
										Pay Now
									</Button>
								</div>
							</Form>
						</div>{" "}
					</CardBody>
				</Card>
			</Container>
		</>
	);
};

export default Recharge;
