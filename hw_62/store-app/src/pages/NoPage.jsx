import React from "react";
import { Typography, Box } from "@mui/material";

const NoPage = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",

				textAlign: "center",

				padding: 2,
			}}
		>
			<Typography variant="h1" component="div" gutterBottom>
				404
			</Typography>
			<Typography variant="h4" component="div" gutterBottom>
				Page not found
			</Typography>
		</Box>
	);
};

export default NoPage;
