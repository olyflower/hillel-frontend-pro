import { Box, Container, Typography } from "@mui/material";
import Gallery from "../components/Gallery";
import ButtonGoToProducts from "../components/ButtonGoToProducts";

const Home = () => {
	return (
		<>
			<Container maxWidth="lg">
				<Gallery />
				<Box sx={{ textAlign: "center", my: 4 }}>
					<Typography
						variant="h2"
						sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
					>
						Welcome!
					</Typography>
					<ButtonGoToProducts />
				</Box>
			</Container>
		</>
	);
};

export default Home;
