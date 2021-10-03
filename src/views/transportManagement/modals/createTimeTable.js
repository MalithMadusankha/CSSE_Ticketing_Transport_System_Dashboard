import { React, useEffect, useState } from "react";
// import API from "variables/tokenURL";
// reactstrap components
import { Button, FormGroup, Form, Input, Modal, Row, Col } from "reactstrap";

// core components
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function CreateTimeTable(props) {
	console.log("props", props.company);
	const [company, setCompany] = useState("");
	const [showModal, setShowModal] = useState(false);

	const toggleModal = (state) => {
		console.log("toggleModal");
		setShowModal(state);
	};
	useEffect(() => {
		setCompany(props.company);
	}, []);
	// initial Values
	const initialValues = {
		// company Variavles
		// company_name: company.company_name,
		// details: company.details,
	};

	// Validation Schema
	const validationSchema = Yup.object({
		company_name: Yup.string().required("*Required!"),
		details: Yup.string(),
	});

	// Submite Method
	const onSubmit = (values) => {
		values.service_provider_type = company.service_provider_type;

		console.log(props.company._id, "Form Date", values);

		axios
			.put(`/company/update/${props.company._id}`, values)
			.then((res) => {
				console.log(res);
				console.log("Data", values);
				alert("Updated Successfully !!");
				window.location.reload(false);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	return (
		<>
			{/* Button trigger modal */}
			<Button
				style={{ width: "200px", fontSize: "17px" }}
				color="info"
				type="button"
				href="#pablo"
				size="lg"
				onClick={() => toggleModal(true)}
			>
				Create Time Table
			</Button>
			{/* Modal */}
			<Modal
				className="modal-dialog-centered modal-Secondary"
				isOpen={showModal}
				toggle={() => toggleModal(false)}
			>
				<div className="modal-header">
					<h5 className="modal-title display-4" id="showModalLabel">
						Create Time Table
					</h5>
					<button
						aria-label="Close"
						className="close"
						data-dismiss="modal"
						type="button"
						onClick={() => toggleModal(false)}
					>
						<span aria-hidden={true}>×</span>
					</button>
				</div>
				<div className="modal-body">
					{/*===========  form *================*/}
					<Form onSubmit={formik.handleSubmit}>
						<Row>
							<Col>
								<FormGroup>
									<label
										className="form-control-label"
										htmlFor="service_provider_type"
									>
										ID
									</label>
									<Input
										className="form-control-alternative"
										id="id"
										placeholder="Enter Bus No"
										type="text"
										name="id"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.id}
									/>
									{formik.touched.id && formik.errors.id ? (
										<div style={{ color: "red" }}>{formik.errors.id}</div>
									) : null}
								</FormGroup>
							</Col>

							<Col>
								<FormGroup>
									<label className="form-control-label" htmlFor="bus_no">
										Bus No
									</label>
									<Input
										className="form-control-alternative"
										id="busNo"
										placeholder="Enter Bus Name"
										type="text"
										name="busNo"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.busNo}
									/>
									{formik.touched.busNo && formik.errors.busNo ? (
										<div style={{ color: "red" }}>{formik.errors.busNo}</div>
									) : null}
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<FormGroup>
									<label className="form-control-label" htmlFor="route_no">
										Start Time
									</label>

									<Input
										className="form-control-alternative"
										placeholder="Enter Route No"
										type="time"
										name="route_no"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.route_no}
									/>
									{formik.touched.route_no && formik.errors.route_no ? (
										<div style={{ color: "red" }}>{formik.errors.route_no}</div>
									) : null}
								</FormGroup>
							</Col>

							<Col>
								<FormGroup>
									<label className="form-control-label" htmlFor="route_name">
										End Time
									</label>
									<Input
										className="form-control-alternative"
										id="route_name"
										placeholder="Enter Route Name"
										type="time"
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
						<Row>
							<Col>
								<FormGroup>
									<label className="form-control-label" htmlFor="bus_type">
										Route
									</label>
									<Input
										className="form-control-alternative"
										id="bus_type"
										placeholder="JSound"
										type="text"
										name="bus_type"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.bus_type}
									/>
									{formik.touched.bus_type && formik.errors.bus_type ? (
										<div style={{ color: "red" }}>{formik.errors.bus_type}</div>
									) : null}
								</FormGroup>
							</Col>
							<Col>
								<FormGroup>
									<label
										className="form-control-label"
										htmlFor="route_permit_no"
									>
										Start
									</label>

									<Input
										className="form-control-alternative"
										placeholder="Enter Route Permit No"
										type="text"
										name="route_permit_no"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.route_permit_no}
									/>
									{formik.touched.route_permit_no &&
									formik.errors.route_permit_no ? (
										<div style={{ color: "red" }}>
											{formik.errors.route_permit_no}
										</div>
									) : null}
								</FormGroup>
							</Col>
						</Row>
						<Row>
							<Col>
								<FormGroup>
									<label className="form-control-label" htmlFor="contact_no">
										Destination
									</label>
									<Input
										className="form-control-alternative"
										id="contact_no"
										placeholder="SPS00001"
										type="text"
										name="contact_no"
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										value={formik.values.contact_no}
									/>
									{formik.touched.contact_no && formik.errors.contact_no ? (
										<div style={{ color: "red" }}>
											{formik.errors.contact_no}
										</div>
									) : null}
								</FormGroup>
							</Col>
						</Row>
						{/* ========= Buttons =============== */}
						<div className="modal-footer">
							<Button
								color="secondary"
								data-dismiss="modal"
								type="button"
								onClick={() => toggleModal(false)}
							>
								Close
							</Button>
							<Button color="primary" type="submit">
								Save changes
							</Button>
						</div>
					</Form>
				</div>
			</Modal>
		</>
	);
}

export default CreateTimeTable;
