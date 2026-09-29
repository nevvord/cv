import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Link, Stack, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface IProjectsBlockProps {
  sx?: SxProps
}

interface IProjectItem {
  label: string;
  link?: string;
  status: string;
  role: string;
  description: string;
}

const projectList: IProjectItem[] = [
  {
    label: 'LessonGo',
    link: 'https://lessongo.org/',
    status: 'Beta',
    role: 'Founder / Solo Full-Stack Developer',
    description: 'All-in-one SaaS for schools and tutors: manage students, classes, lessons, grades and the entire school in one place. Designed and built solo, from architecture to deployment, using Next.js, React, TypeScript, NestJS and PostgreSQL.',
  },
];

export function ProjectsBlock({ sx }: IProjectsBlockProps) {
  const { t } = useTranslation('pages')

  return (
    <Box sx={sx}>
      <Typography sx={{ borderBottom: '1px solid' }} variant="h5">{t('projects.title')}</Typography>

      <Box>
        {projectList.map((element) => (
          <Box key={element.label} mt={2}>
            <Stack direction='row' sx={{ p: 1 }}>
              <ArrowRightAlt />

              <Box ml={2}>
                {element.link ? (
                  <Link href={element.link}>
                    {element.label}
                  </Link>
                ) : (
                  <Typography>
                    {element.label}
                  </Typography>
                )}
              </Box>

              <Typography>,</Typography>

              <Typography sx={{ pl: 2 }}>
                {element.role}
              </Typography>

              <Typography>,</Typography>

              <Typography sx={{ pl: 2 }}>
                {element.status}
              </Typography>
            </Stack>

            <Typography variant="body2">{element.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
