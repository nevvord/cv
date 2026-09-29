import { Typography } from "@mui/material";
import { AboutMe, ExperienceList, ForwardLinks, ProjectsBlock, SkillsBlock, TYBlock } from "./components";



export function MainPage() {
  return (
    <>
      <Typography variant="h6">
        Vitalii Lazutchenko | Senior Full-Stack Engineer / Team Lead
      </Typography>

      <ForwardLinks />
      <AboutMe />
      <SkillsBlock sx={{ mt: 4 }} />
      <ExperienceList sx={{ mt: 4 }} />
      <ProjectsBlock sx={{ mt: 4 }} />
      <TYBlock sx={{ mt: 4 }} />

    </>
  )
}
