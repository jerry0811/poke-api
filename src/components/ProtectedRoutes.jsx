import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
	const nameTraine = useSelector((state) => state.nameTrainer);

	if (nameTraine) {
		return <Outlet />;
	} else {
		return <Navigate to="/" />;
	}
};

export default ProtectedRoutes;
