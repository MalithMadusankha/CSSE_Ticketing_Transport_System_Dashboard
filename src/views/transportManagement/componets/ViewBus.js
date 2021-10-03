import React, { useState, useEffect } from "react";
import "boxicons";
// import API from "variables/tokenURL";

// Form Element
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
	Col,
	Table,
} from "reactstrap";
// core components
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import CreateQuotionHeader from "components/Headers/service-provider-header/CreateQuotionHeader";
// import QuotationPDF from "./pdfGen/QuotationPDF";

const ViewBus = (props) => {
	// Taking Current User
	// const user = JSON.parse(localStorage.getItem("profile")).result;

	// Form Inputs Varibales
	const [item_details, setItem_details] = useState([]);
	const [date_from, setDate_from] = useState("");
	const [date_to, setDate_to] = useState("");
	const [terms, setTerms] = useState("");
	const [itemNameTemp, setItemNameTemp] = useState("");
	const [quantityTemp, setQuantityTemp] = useState(0);
	const [unitPriceTemp, setUnitPriceTemp] = useState(0);
	const [totalPriceTemp, setTotalPriceTemp] = useState(0);
	const [cost, setCost] = useState(0);
	const [newQuotation, setNewQuotation] = useState("");

	// Form Inputs Varibales
	const [event_id, setEvent_id] = useState("");
	const [profile, setprofile] = useState("");
	const [company, setCompany] = useState("");
	const [event, setEvent] = useState("");

	// Operation Varibales
	let total = 0;
	let today = new Date().toISOString().split("T")[0];

	const initialValues = {
		date_to: "",
		terms: "",
	};

	const validationSchema = Yup.object({
		date_to: Yup.string()
			.required("*Required!")
			.min(date_from, `Cannot accept befor ${date_from}`),
		terms: Yup.string(),
	});

	useEffect(() => {
		if (total <= 0) {
			axios
				.get(`/eventAdd/getOneEvent/${"props.match.params._id"}`)
				.then((res) => {
					setEvent(res.data);
				})
				.catch((error) => {
					console.log(error);
				});

			axios
				.get(`/serviceProvider/getByUser/${"user._id"}`)
				.then((res) => {
					let data = res.data;
					setprofile(data);
					console.log(data);
					axios.get(`/company/get/${"data.company_id"}`).then((res) => {
						setCompany(res.data);
					});
				})
				.catch((error) => {
					console.log(error);
				});
		}
		item_details.forEach((aItem) => {
			total += aItem.total_price;
		});
		if (total > 0) {
			setCost(total);
		}
	}, [item_details]);

	const onSubmit = (values) => {
		if (item_details && item_details.length > 0) {
			let newQuotationObj = {
				event_id: event._id,
				provider_id: profile._id,
				date_from: today,
				date_to: values.date_to,
				quotation_details: item_details,
				terms: values.terms,
				approve: false,
			};

			setNewQuotation(newQuotationObj);

			axios
				.post(`/quotation/create`, newQuotationObj)
				.then((res) => {
					alert("Created Successfully !!");
				})
				.catch((error) => {
					alert("Fail to Create !!");
					console.log(error);
				});
		} else {
			alert("You should add minimum 1 item");
		}
	};

	const formik = useFormik({
		initialValues,
		onSubmit,
		validationSchema,
	});

	return (
		<>
			{/* Page content */}

			<Row>
				<Col className="order-xl-1" xl="12">
					<Card className="bg-secondary shadow">
						<Form onSubmit={formik.handleSubmit}>
							<CardBody className="mb-5">
								<Table className="align-items-center" responsive>
									<thead className="thead-light">
										<tr>
											<th className="col-1">
												<h5>#</h5>
											</th>
											<th className="col-3">
												<h5>ID</h5>
											</th>
											<th className="col-2">
												<h5>Bus No</h5>
											</th>
											<th className="col-2">
												<h5>Bus Name </h5>
											</th>
											<th className="col-2 ">
												<h5>Route No</h5>
											</th>
											<th className="col-2">
												<h5 className=""> Route</h5>
											</th>
											<th className="col-2">
												<h5>Permit No</h5>
											</th>
											<th scope="col-2">
												<h5>Contact No</h5>
											</th>

											<th scope="col-1">
												<h5 className=""> Action</h5>
											</th>
										</tr>
									</thead>
									<tbody>
										{item_details.map((aItem, key) => (
											<tr key={key}>
												<td className="pb-0">
													<FormGroup>
														<Input
															className="form-control-alternative bg-secondary text-black"
															id="input-item-name"
															type="text"
															value={aItem.item_name}
															disabled
														></Input>
													</FormGroup>
												</td>
												<td className="pb-0">
													<FormGroup>
														<Input
															className="form-control-alternative bg-secondary text-black"
															id="input-nic-no"
															type="number"
															name="quantity"
															value={aItem.quantity}
															disabled
														></Input>
													</FormGroup>
												</td>
												<td className="pb-0">
													<FormGroup>
														<Input
															className="form-control-alternative bg-secondary text-black"
															id="input-nic-no"
															placeholder="jesse@example.com"
															type="number"
															name="unit_price"
															value={aItem.unit_price}
															disabled
														></Input>
													</FormGroup>
												</td>
												<td className="pb-0">
													<FormGroup>
														<Input
															className="form-control-alternative bg-secondary text-success fs-5"
															id="input-nic-no"
															type="text"
															value={aItem.total_price}
															disabled
														></Input>
													</FormGroup>
												</td>
												<td>
													<Button
														color="secondary"
														href="#pablo"
														onClick={() => {
															if (
																window.confirm(
																	"Are you sure you wish to delete this item? " +
																		key
																)
															) {
																// let itemsToDelet = item_details;
																item_details.splice(key, 1);
																setItem_details([...item_details]);
															}
														}}
														size="sm"
													>
														<i class="ni ni-scissors text-danger"></i>
													</Button>
													<Button
														color="secondary"
														href="#pablo"
														onClick={() => {
															if (
																window.confirm(
																	"Are you sure you wish to delete this item? " +
																		key
																)
															) {
																// let itemsToDelet = item_details;
																item_details.splice(key, 1);
																setItem_details([...item_details]);
															}
														}}
														size="sm"
													>
														Edit
													</Button>
												</td>
											</tr>
										))}
									</tbody>
								</Table>
							</CardBody>
						</Form>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default ViewBus;
