import { Box, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ISkillsBlockProps {
  sx?: SxProps
}



export function SkillsBlock({ sx }: ISkillsBlockProps) {
  const { t } = useTranslation('pages');

  return (
    <Box sx={sx}>
      <Typography sx={{ borderBottom: '1px solid' }} variant="h5">
        {t('skills.title')}
      </Typography>

      <Typography>
        AI: Claude Code, Claude API, Cursor, Copilot, subagents &amp; skills, MCP servers, LLM integration, local LLMs (Ollama, vLLM, LM Studio), AI code review in CI/CD <br />
        Frontend: React, Next.js, TypeScript, Vue.js, MUI, TanStack Query, Zustand, Tailwind <br />
        Backend: Node.js, NestJS, PostgreSQL, Prisma ORM, MongoDB, REST API, WebSockets, Keycloak <br />
        AWS &amp; IaC: Lambda, SQS, EventBridge, VPC, RDS, RDS Proxy, S3, SST <br />
        DevOps: GitHub Actions, Bitbucket Pipelines, Docker, Sentry, CloudWatch <br />
        Testing: Vitest, Jest, Playwright <br />
        Leadership: Team Leadership, System Architecture, Hiring &amp; Mentoring <br />
        Languages: English (B2), Russian (native), Ukrainian (native)
      </Typography>
    </Box>
  );
}