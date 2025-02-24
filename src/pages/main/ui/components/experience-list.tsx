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
    description: 'Developed a payment terminal system from scratch as a Full-Stack Developer and Frontend Team Lead, building complex modules for camera-based identity verification, passport scanning, cash acceptor, and printer integration using React (frontend) and AWS (backend). Led a team of 5 developers, organized meetings, conducted training, and presented demos to investors. Streamlined development processes to accelerate delivery and ensure high-quality, user-friendly interfaces for fiat currency operations. Currently leading a full-stack team of 5 as Team Lead on a crypto banking application, utilizing React, MUI, TanStack Query for the frontend, and AWS (Lambda, SQS, EventBus, VPC, RDS, RDS Proxy, S3) for scalable backend solutions.',
    position: {
      label: 'Full-Stack Developer / Team Lead'
    },
    period: {
      from: new Date(2023, 2, 16).toDateString(),
      to: true
    },
  },
  {
    label: 'Planhat',
    link: 'https://www.planhat.com/',
    description: 'Refactored legacy Angular modules into reusable VueJS components as a Full-Stack Developer. Overcame challenges with legacy code by decomposing it into modular, performant solutions, meeting tight deadlines. Improved UI components, enhancing application efficiency and developer productivity.',
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
    description: 'Built a frontend application from scratch for banking system integration using React, WebSockets, HTTP requests, and Keycloak for authentication. Focused on delivering a seamless UI for real-time interactions with banking APIs, collaborating with an international team.',
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
    description: 'Developed an e-commerce application using Vue.js/Next.js, later adapted as a template for other online stores. Contributed to an online ticketing service for theaters and cinemas, focusing on frontend implementation.',
    position: {
      label: 'Frontend Developer'
    },
    period: {
      from: new Date(2019, 5, 22).toDateString(),
      to: new Date(2019, 11, 20).toDateString()
    },
  },
  {
    label: 'OLZ Group',
    description: 'Co-developed a startup notice board application for rentals and services in Odessa. Worked on both frontend and backend, setting up the server infrastructure and fixing security vulnerabilities.',
    position: {
      label: 'Full-Stack Developer'
    },
    period: {
      from: new Date(2018, 9, 16).toDateString(),
      to: new Date(2019, 5, 20).toDateString()
    },
  },
  {
    label: 'Personal Startup: AdBot',
    description: 'Created a bot that parses notice boards and notifies users about new listings, enabling them to respond first. Built the full solution, from development to deployment, and successfully sold it to clients, gaining hands-on sales experience.',
    position: {
      label: 'Founder / Full-Stack Developer'
    },
    period: {
      from: new Date(2020, 1, 1).toDateString(), // Укажи примерные даты, если точных нет
      to: new Date(2020, 12, 31).toDateString()
    },
  }
];

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
