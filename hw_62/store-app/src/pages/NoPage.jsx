import React from "react";
import { Typography, Box } from "@mui/material";
import ButtonGoToProducts from "../components/ButtonGoToProducts";

const NoPage = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				p: 2,
			}}
		>
			<Typography variant="h1" component="div" gutterBottom>
				404
			</Typography>
			<Typography variant="h4" component="div" gutterBottom>
				Page not found
			</Typography>
			<ButtonGoToProducts />
		</Box>
	);
};

export default NoPage;
