import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Link, Stack, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface IExperienceListProps {
  sx?: SxProps
}

interface IExperienceItem {
  label: string;
  link?: string;
  description: string;
  period: {
    from: string;
    to: string | boolean;
  };
  position: {
    label: string;
  };
}

const experienceList: IExperienceItem[] = [
  {
    label: 'Arbipay',
    link: 'https://arbitaspay.com/',
    description: 'During this time, I have already managed to bring a terminal project with payment systems to release from scratch. I have set up convenient management and organised efficient development processes. I gained experience and helped to set up the working environment in JIRA. I helped to implement best development practices and identify effective developers, helping them to integrate into the new result-oriented environment.',
    position: {
      label: 'Full-Stack Developer/Team Lead'
    },
    period: {
      from: new Date(2023, 2, 16).toDateString(),
      to: true
    },
  },
  {
    label: 'SAILTECH',
    link: 'https://sailtechinc.com/',
    description: 'Developed and maintained a robust nurse travel system, enhancing user experience and functionality.',
    position: {
      label: 'Full-Stack Developer'
    },
    period: {
      from: new Date(2023, 10, 1).toDateString(),
      to: new Date(2023, 11, 30).toDateString()
    },
  },
  {
    label: 'Planhat',
    link: 'https://www.planhat.com/',
    description: 'Worked for a large international company. Where I held the position of fullstack developer. I rewrote some modules from Angular to VueJS. Improved and redesigned some components and interfaces of the application.',
    position: {
      label: 'Full-Stack Developer'
    },
    period: {
      from: new Date(2022, 10, 1).toDateString(),
      to: new Date(2023, 2, 15).toDateString(),
    },
  },
  {
    label: 'Arbitas',
    link: 'https://www.arbitas.com/',
    description: 'I developed applications, mostly UI parts. I also developed the server part. Where I worked with banking systems, with real ATMs and got my first experience of working with an international team',
    position: {
      label: 'Full-Stack Developer'
    },
    period: {
      from: new Date(2019, 11, 21).toDateString(),
      to: new Date(2022, 9, 30).toDateString()
    },
  },
  {
    label: 'MOBIOS',
    link: 'https://mobios.school/',
    description: 'Application development using the Vue JS/Next JS framework. Completed at least 2 applications during this time.',
    position: {
      label: 'Front End Developer'
    },
    period: {
      from: new Date(2019, 5, 22).toDateString(),
      to: new Date(2019, 11, 20).toDateString()
    },
  },
  {
    label: 'OLZ Group',
    description: 'Developing a notice board application, working with telephony and developing a CRM to work with customers using telephony.',
    period: {
      from: new Date(2018, 9, 16).toDateString(),
      to: new Date(2019, 5, 20).toDateString()
    },
    position: {
      label: 'Full-Stack developer',
    },
  }
]

export function ExperienceList({ sx }: IExperienceListProps) {
  const { t } = useTranslation('pages')

  return (
    <Box sx={sx}>
      <Typography sx={{ borderBottom: '1px solid' }} variant="h5">{t('experience.title')}</Typography>

      <Box>
        {experienceList.map((element, index) => (
          <Box key={index + element.label} mt={2}>
            <Stack direction='row' sx={{ p: 1 }}>
              <ArrowRightAlt />

              <Typography sx={{ pl: 2 }}>
                {element.period.from} - {typeof element.period.to === 'boolean' ? 'now' : element.period.to}
              </Typography>

              <Typography>,</Typography>

              <Box ml={1}>
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
                {element.position.label}
              </Typography>

            </Stack>

            <Typography variant="body2">{element.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}
