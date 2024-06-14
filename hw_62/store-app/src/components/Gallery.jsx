import { CardMedia, Box } from "@mui/material";
import images from "../assets/images";

const Gallery = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", sm: "row" },
				justifyContent: "center",
				alignItems: "center",
				flexWrap: "wrap",
				gap: 6,
				mt: 2,
			}}
		>
			{images.map((image, index) => (
				<CardMedia
					key={index}
					component="img"
					height="470"
					sx={{ width: { xs: "100%", sm: "30%" } }}
					image={image.src}
					alt={image.alt}
				/>
			))}
		</Box>
	);
};

export default Gallery;
