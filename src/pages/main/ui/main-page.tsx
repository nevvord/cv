import { Typography } from "@mui/material";
import { AboutMe, ForwardLinks } from "./components";



export function MainPage() {
  return (
    <>
      <Typography variant="h6">
        Vitalii Lazutchenko | Software Engineer
      </Typography>

      <ForwardLinks />
      <AboutMe />

    </>
  )
}
