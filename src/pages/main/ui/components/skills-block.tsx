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
        Frontend: React, Vue.js, TypeScript, Next.js, MUI, Tanstack query, Zustand, Tailwind <br />
        Backend: Node.js, NestJS, MongoDB, REST API, PrismaORM, PostgreSQL <br />
        AWS: Lambda, SQS, EventBus, VPC, RDS, RDS Proxy, S3 <br />
        DevOps: CI/CD (Bitbucket Pipelines), Deployment Automation <br />
        Other: Team Management, WebSockets, Keycloak
      </Typography>
    </Box>
  );
}