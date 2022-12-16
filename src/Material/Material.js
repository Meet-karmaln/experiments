import {
	Button,
	Paper,
	Container,
	TextField,
	Stack,
	Switch,
} from "@mui/material";
import MyTheme from "./Materail-styles";
import { ThemeProvider, Typography } from "@mui/material";
import { useState } from "react";

const Material = () => {
	const [checked, setChecked] = useState(true);

	return (
		<ThemeProvider theme={MyTheme}>
			<Container>
				<Typography variant='h1' color='initial'>
					Themeing
				</Typography>
				<Typography variant='posterHeading'>Themeing</Typography>
				<Typography variant='h3' color='initial'>
					Themeing
				</Typography>
				<Typography variant='body1' color='initial'>
					Themeing
				</Typography>
				<Typography variant='body2' color='initial'>
					Themeing
				</Typography>
				<Paper
					elevation={2}
					sx={{ height: "maxContent", mt: "1rem", p: "1rem" }}
				>
					<Switch
						checked={checked}
						onChange={(e) => {
							setChecked(e.target.checked);
						}}
						inputProps={{ "aria-label": "controlled" }}
					/>
					<Stack spacing={2}>
						<TextField variant='outlined' label='Text field' />
						<TextField variant='filled' label='Text field' />
						<TextField variant='standard' label='Text field' />
					</Stack>
					<Stack spacing={2} sx={{ mt: "2rem" }}>
						<Button variant='text' color='primary'>
							Text Third
						</Button>
						<Button variant='outlined' color='primary'>
							Text Second
						</Button>
						<Button variant='contained' color='baseColor'>
							Text
						</Button>
					</Stack>
				</Paper>
			</Container>
		</ThemeProvider>
	);
};

export default Material;
