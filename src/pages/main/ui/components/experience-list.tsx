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
    from: Date;
    // Omit `to` for the current position
    to?: Date;
  };
  position: {
    label: string;
  };
}

const experienceList: IExperienceItem[] = [
  {
    label: 'Topnetics',
    link: 'https://topnetics.com/',
    description: 'Leading a full-stack team of 5–8 engineers at a B2B SaaS company. Designed and delivered 3 products from scratch in under a year, owning the architecture end-to-end: React/Next.js and TypeScript on the frontend, Node.js/NestJS, PostgreSQL/Prisma and AWS (SST) on the backend. Built an AI-native engineering workflow for the team: AI-ready repository context (CLAUDE.md, rules, skills), custom subagents, review skills and workflows, internal MCP servers connecting agents to company systems, AI-powered code review in CI/CD, and self-hosted local LLMs for private code, increasing delivery speed by more than 3x. Hired and mentored engineers and set team standards for AI-assisted design and development.',
    position: {
      label: 'Tech Lead / Team Lead'
    },
    period: {
      from: new Date(2025, 10, 1),
    },
  },
  {
    label: 'Arbipay',
    link: 'https://arbitaspay.com/',
    description: 'Developed a payment terminal system from scratch as a Full-Stack Developer and Frontend Team Lead, building complex modules for camera-based identity verification, passport scanning, cash acceptor, and printer integration using React (frontend) and AWS (backend). Led a team of 5 developers, organized meetings, conducted training, and presented demos to investors. Later led a full-stack team of 5 as Team Lead on a crypto banking application, taking it from inception to MVP/beta with React, MUI and TanStack Query on the frontend and AWS (Lambda, SQS, EventBridge, VPC, RDS, RDS Proxy, S3) on the backend.',
    position: {
      label: 'Full-Stack Developer / Team Lead'
    },
    period: {
      from: new Date(2023, 2, 16),
      to: new Date(2025, 10, 1),
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
      from: new Date(2022, 10, 1),
      to: new Date(2023, 2, 15),
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
      from: new Date(2019, 11, 21),
      to: new Date(2022, 9, 30),
    },
  },
  {
    label: 'Personal Startup: AdBot',
    description: 'Created a bot that parses notice boards and notifies users about new listings, enabling them to respond first. Built the full solution, from development to deployment, and successfully sold it to clients, gaining hands-on sales experience.',
    position: {
      label: 'Founder / Full-Stack Developer'
    },
    period: {
      from: new Date(2020, 1, 1),
      to: new Date(2020, 11, 31),
    },
  },
  {
    label: 'MOBIOS',
    link: 'https://mobios.school/',
    description: 'Built a Vue.js/Next.js e-commerce application later reused as a template for other online stores.',
    position: {
      label: 'Frontend Developer'
    },
    period: {
      from: new Date(2019, 5, 22),
      to: new Date(2019, 11, 20),
    },
  },
  {
    label: 'OLZ Group',
    description: 'Co-developed a rentals and services notice board startup across frontend and backend, including server setup and security fixes.',
    position: {
      label: 'Full-Stack Developer'
    },
    period: {
      from: new Date(2018, 9, 16),
      to: new Date(2019, 5, 20),
    },
  },
];

function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

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
                {formatDate(element.period.from)} – {element.period.to ? formatDate(element.period.to) : 'Present'}
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
