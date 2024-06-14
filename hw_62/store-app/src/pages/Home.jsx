import { Box, Container, Typography } from "@mui/material";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import ButtonGoToProducts from "../components/ButtonGoToProducts";

const Home = () => {
	return (
		<>
			<Header />
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
