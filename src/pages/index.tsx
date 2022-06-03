import * as React from "react"
import { PageProps } from "gatsby"

import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import ProTip from "../components/ProTip"
import Link from "../components/Link"
import Copyright from "../components/Copyright"

const Index = ({ path }: PageProps) => {
	return (
		<Container maxWidth="sm">
			<Box sx={{ my: 4 }}>
				<Typography
					variant="h4"
					component="h1"
					gutterBottom
					className="text-2xl font-medium text-black underline"
				>
					Gatsby example
				</Typography>
				<Link to={"/about"} color="secondary">
					Go to the about page
				</Link>
				{/* <Link to="/about">Go to about</Link> */}
				<h1>Path: {path}</h1>
				<ProTip />
				<Copyright />
			</Box>
			<div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
				<div className="shrink-0">
					<img className="h-12 w-12" src="https://avatars.githubusercontent.com/u/21114220?v=4" alt="ChitChat Logo" />
				</div>
				<div>
					<div className="text-xl font-medium text-black">ChitChat</div>
					<p className="text-slate-500">You have a new message!</p>
				</div>
			</div>
		</Container>
	)
}

export default Index
