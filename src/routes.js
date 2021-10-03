/*!

=========================================================
* Argon Dashboard React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Recharge from "views/customerManagement/componets/Recharge";
import TransportManagement from "views/transportManagement/componets/transportManagement";
import BusDetaisl from "views/transportManagement/componets/busDetails";
import Complaints from "views/inspectionManagement/componets/complaints";
import Welcome from "./views/welcome";

var routes = [
	{
		path: "/index",
		name: "Home",
		icon: "ni ni-tv-2 text-primary",
		component: Index,
		layout: "/admin",
	},
	{
		path: "/index",
		name: "Analytics",
		icon: "ni ni-tv-2 text-primary",
		component: Index,
		layout: "/admin",
	},

	{
		path: "/complaints",
		name: "Complaints",
		icon: "ni ni-tv-2 text-primary",
		component: Complaints,
		layout: "/admin",
	},

	{
		path: "/busDetails",
		name: "Bus Details",
		icon: "ni ni-tv-2 text-primary",
		component: BusDetaisl,
		layout: "/admin",
	},
	{
		path: "/transportManagement",
		name: "Bus Time Tables",
		icon: "ni ni-tv-2 text-primary",
		component: TransportManagement,
		layout: "/admin",
	},

	{
		path: "/index",
		name: "Calander",
		icon: "ni ni-tv-2 text-primary",
		component: Index,
		layout: "/admin",
	},

	{
		path: "/transportManagement",
		name: "Help Center",
		icon: "ni ni-planet text-blue",
		component: TransportManagement,
		layout: "/admin",
	},
	{
		path: "/recharge",
		name: "Recharge",
		icon: "ni ni-planet text-blue",
		component: Recharge,
		layout: "/admin",
	},
	{
		path: "/welcome",
		name: "welcome",
		icon: "ni ni-pin-3 text-orange",
		component: Welcome,
		layout: "/admin",
	},
	{
		path: "/user-profile",
		name: "User Profile",
		icon: "ni ni-single-02 text-yellow",
		component: Profile,
		layout: "/admin",
	},
	{
		path: "/tables",
		name: "Tables",
		icon: "ni ni-bullet-list-67 text-red",
		component: Tables,
		layout: "/admin",
	},
	{
		path: "/login",
		name: "Login",
		icon: "ni ni-key-25 text-info",
		component: Login,
		layout: "/auth",
	},
	{
		path: "/register",
		name: "Register",
		icon: "ni ni-circle-08 text-pink",
		component: Register,
		layout: "/auth",
	},
];
export default routes;
