import { createTheme } from "@mui/material";

const MyTheme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#00ffbb",
		},
		baseColor: {
			light: "#89f7fe",
			main: "#66a6ff",
			dark: "#00ffff",
		},
	},
	typography: {
		h1: {
			fontStyle: "italic",
		},
		posterHeading: {
			fontStyle: "italic",
			background: "#ffff00",
			color: "#ff0000",
			fontWeight: 800,
			letterSpacing: "20px",
			padding: "0.5rem",
			fontSize: "2rem",
			borderRadius: "20px",
		},
	},
});

export default MyTheme;
