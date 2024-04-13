import { Box, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ISkillsBlockProps {
  sx?: SxProps
}



export function SkillsBlock({ sx }: ISkillsBlockProps) {
  const { t } = useTranslation('pages')

  return (
    <Box sx={sx}>
      <Typography
        sx={{ borderBottom: '1px solid' }}
        variant="h5"
      >
        {t('skills.title')}
      </Typography >

      <Typography>
        NodeJS,
        TypeScript,
        Team Management,
        React,
        Vue,
        NestJs,
        MongoDB,
        RestAPI,
        Lambda
      </Typography>
    </Box>
  )
}
