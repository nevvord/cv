import { Box, Stack, SxProps, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface ITYBlockProps {
  sx?: SxProps
}

const myInfo = [
  {
    "label": "email",
    "href": "mailto:nevvord@gmail.com"
  },
  {
    "label": "github",
    "href": "https://github.com/nevvord"
  },
  {
    "label": "telegram",
    "href": "https://t.me/nevvord"
  }
]



export function TYBlock({ sx }: ITYBlockProps) {
  const { t } = useTranslation('pages')

  return (
    <Box sx={{
      ...sx,
      '@media print': {
        pageBreakBefore: 'always',
        paddingTop: '50px'
      }
    }}>
      <Typography
        sx={{
          borderBottom: '1px solid',
          '@media print': {
            marginBottom: 2
          }
        }}
        variant="h5"
      >
        {t('ty.title')}
      </Typography>

      <Box sx={{
        mt: 2,
        '@media print': {
          marginBottom: 4
        }
      }}>
        {myInfo.map((item) => (
          <Stack direction='row' key={item.label}>
            <Typography>
              {item.label}:
            </Typography>

            <Typography
              sx={{
                ml: 1,
                color: 'black',
                '@media print': {
                  textDecoration: 'none'
                }
              }}
              component='a'
              href={item.href}
              target="_blank"
            >
              {item.href}
            </Typography>
          </Stack>
        ))}
      </Box>

      <Typography sx={{
        '@media print': {
          fontSize: '0.7em',
          lineHeight: 1
        }
      }}>
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡴⠒⠊⠉⠒⠦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡞⠁⢠⣴⣾⡶⣶⣄⠙⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣠⣶⠛⠉⠉⢍⠻⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⠟⠀⣴⣿⣿⣿⣷⣷⡜⣷⡸⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⣴⡟⠁⣠⣤⡤⣤⡁⠢⡙⢦⡀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⠀⣀⣀⣄⣀⣀⣀⡀⢀⣠⣿⠀⢰⣏⣠⣿⣿⣿⣿⣿⣿⣇⣼⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⣼⠟⠀⣼⣿⣏⣿⡘⢿⣦⡘⢆⠙⣆⠀⠀⢀⡤⠊⠉⠀⣠⡤⡶⠛⠉⠁⠀⢈⣯⠟⠃⣾⣿⡏⠀⣼⣿⡿⢿⣿⣿⣿⣿⣿⣿⣽⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⣿⠀⣼⡟⣿⣿⣿⣍⠳⣿⣿⡌⢷⠘⢧⣴⣋⢀⣠⠶⠋⠁⠀⡀⠀⠁⣢⠶⠯⠤⢤⣼⣿⣿⠁⢀⣿⣿⠾⢿⣿⣿⣿⣿⣿⣿⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⣿⠀⣿⣏⣿⣿⣿⠷⣶⢾⣿⣿⡄⢆⡘⣿⡿⢿⣁⣠⠴⠆⡖⢲⢸⣹⡴⡄⡠⡽⣿⣶⣍⣈⠑⣾⣿⣷⢾⣿⢿⣿⣿⣿⣿⡏⢸⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⣿⠀⢻⣿⣿⣿⣿⣷⣌⡓⣽⣿⣿⣀⠣⣿⣿⣆⣏⠴⢃⣤⡀⠃⠉⠙⣿⣔⡀⡻⠿⣿⣟⣿⣟⣿⠟⠻⣿⣿⣿⣿⣿⣿⣿⡇⣾⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⢻⣧⠘⣷⣿⣿⣿⣿⣽⣻⣿⣿⠛⠋⠡⣾⠿⣟⣿⡗⣾⠾⣿⣶⣧⣴⣿⣿⣿⢿⡆⢻⡇⡕⣾⡿⠠⠆⠈⠻⢿⣿⣿⣿⣿⢡⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠘⣿⡆⠸⣿⣿⣿⣿⣿⡿⠍⠀⠈⠁⠀⠠⠀⠳⠻⡟⢿⣾⣿⣷⢽⣿⠎⣿⣿⡸⠰⠻⢷⣷⣽⣧⠖⠀⠀⠂⠂⠻⣿⣿⠁⢴⣿⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠘⣿⣆⠿⣯⣿⣽⠿⠁⠀⠀⠀⠀⣀⡤⠖⠛⠛⠛⠛⣿⣷⢇⡈⢹⡄⣿⣿⣇⠀⠀⠊⣿⡏⣿⣀⣀⣀⣀⣀⠀⠈⢣⡀⣾⣿⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠘⣿⣳⡘⢿⡧⠀⣀⠀⢀⡴⠛⠁⠀⢀⣀⣠⣤⣤⣘⣿⡄⠉⠛⠳⢿⣿⣿⡀⠀⠀⣿⣷⣿⣿⣿⣿⣿⣿⣿⣦⡀⢹⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣠⣬⣳⣇⣠⠇⢀⡄⣰⠋⠀⠀⣠⣾⣿⣿⡿⠿⢿⣿⣿⣧⠀⠀⠀⣿⣿⣿⣷⡀⢰⣿⣿⣿⢟⣁⡀⠙⢿⣿⣿⣷⠀⠙⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⣤⣿⣿⡿⠋⢠⣯⡼⠁⠀⢀⣾⣿⣿⡟⠁⢀⣤⣤⣽⣿⣿⡆⠀⣾⣿⣿⣿⣿⡇⣽⣿⣿⣿⣿⠟⠹⣆⠈⣿⣿⣿⣷⠀⠚⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀
        ⣦⣀⠀⠀⠀⠀⠉⢻⣯⢠⣰⡿⠋⠀⠀⢀⣾⣿⣿⡟⠀⣰⣿⣿⠁⢈⣿⣿⣿⡆⣿⣿⣿⣿⣿⣧⣿⣿⣿⣿⣿⣦⣼⣿⠀⢻⣿⣿⣿⣯⣓⢬⡀⠀⠀⠀⣀⡤⠔⠒⠀⠉⠀⠀⠀
        ⠀⠀⠉⠙⠲⠦⣄⣿⢋⣴⡽⠃⠀⠀⠀⣼⣿⣿⣿⠁⠀⣿⣿⣿⣷⣿⣿⣿⣿⣷⠈⣿⣿⣿⣿⣷⡾⣿⣿⣿⣿⣿⣿⠟⢀⣾⣿⣿⣿⣿⣿⢷⡮⠶⠒⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⢀⡽⣻⠿⢤⣀⡀⢠⣾⣿⣿⡿⢿⣦⡀⠹⣿⣿⣿⣿⣿⣿⣿⣿⠀⢿⣿⣿⣿⡏⠁⣿⣿⣿⣿⣿⣭⣴⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠘⢫⣾⠇⠀⠀⠀⠙⣋⣛⡻⢿⣿⣶⣿⣿⣷⣞⣛⣻⣿⣿⣿⣿⣿⡄⢸⣿⣿⣿⣷⠀⠻⠿⢿⣿⣿⣿⡿⣟⣭⣿⣿⣿⣿⣿⣿⣿⣧⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀
        ⠀⠀⠀⠀⠀⣰⡿⠋⠀⠀⠀⣠⣾⣿⣿⣿⣶⣭⡙⢻⣿⣿⣿⣿⣿⣿⣿⡿⠋⠉⠀⠈⣿⣙⣷⣿⣇⣀⣀⠀⠙⠻⣿⣿⠿⠿⣟⣿⣿⣿⣿⣿⣿⣿⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉
        ⣀⣀⣀⣀⣾⣋⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣷⣿⣿⣻⣧⣍⡻⠿⣿⡟⠁⠀⠀⠀⢀⣴⣿⣿⣿⠟⠛⠉⠛⢻⣶⡄⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠰⢎⣬⠟⠋⠉⣿⣿⣟⣭⣛⣛⡛⠿⠿⠿⠿⡿⢿⣿⣿⣷⠏⠀⠀⠀⢀⣴⣿⣿⣟⣿⣿⣿⣶⣿⣿⣿⣿⣿⠀⠀⡟⢿⣿⣶⣾⣿⣿⣿⣿⣿⣿⣿⠀⠀⠒⠶⠶⠤⠤⠤⠤
        ⠀⠀⠀⢾⡇⠀⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣦⣤⣸⠋⠁⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⣰⠁⠈⠻⢿⣿⣿⣿⣿⣿⣿⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠈⠓⢦⣀⠘⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⣏⡀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠠⠁⠀⠀⠀⣻⣾⣿⣿⣿⣿⡉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠈⠓⠢⢽⣿⣿⣿⣿⣿⣿⠿⡟⣋⣽⣵⠋⠉⠀⢀⠀⠀⠀⠀⠀⠙⠛⠛⠛⠛⠛⠛⠋⠉⠁⠀⠀⢄⠀⠀⠀⢀⣿⣿⣿⡿⠋⠈⠉⠓⠢⢤⡀⠀⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⢶⠉⠉⠙⢿⣿⣋⣩⣴⣾⣿⣿⣿⠋⠀⣠⠖⠁⠀⠀⡴⠋⡁⠀⠀⠀⠀⢠⠴⠖⠂⠀⠀⠀⠀⠈⣧⢀⣤⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠈⠑⠀⠀⠀⠀⠀⠀
        ⠀⠀⠀⠀⠀⠀⠀⠈⢓⣬⣿⠛⠻⠿⣿⣿⣿⣿⣿⣇⣠⠞⠁⠀⠀⠀⠎⠀⠸⠃⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣶⣶⣿⢻⣿⣿⣷⠿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰
        ⠀⠀⠀⠀⠀⠀⣠⠴⠋⠀⢻⡷⣄⠀⠀⠈⠙⠛⢻⠟⠻⢶⣶⣤⣤⣤⣤⣤⣶⣶⣶⣶⣦⣤⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢟⣠⡤⠀⣀⣀⣀⣀⣀⣀⠀⠀⠀⢀⣀⣴⣿⣿
        ⠀⠀⠀⠀⣠⠞⠁⠀⠀⠀⠀⢷⡊⠳⠄⠀⢀⡴⠋⠀⠀⠀⠉⠛⠋⠭⠭⠭⠿⢿⣭⣿⣻⣏⢿⣏⡹⣯⣿⠿⣻⢻⣿⣿⣿⣿⣿⣻⣥⣶⢟⣛⣿⣿⣿⣿⣿⣿⣶⣾⣿⣿⣿⣿⣿
        ⠀⢀⡴⠋⠁⠀⠀⠀⠀⠀⠀⠀⠉⣳⣄⠀⠋⠀⠀⢠⣄⡀⠀⠀⠀⠀⠀⠀⠀⠤⠍⠛⢿⠷⣿⡟⡛⣭⠘⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⠧⣨⣿⣿⣿⡿⢿⣿⡿⠏⣿⣿⠻⡿⢻⣿
        ⠀⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠚⠉⢹⣿⣏⠀⠀⠀⠀⠙⠷⣴⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⡁⠁⠨⠿⡿⠿⢿⣟⡆⡹⣿⣿⠟⢀⣼⣿⡿⣽⣿⢳⣿⣿⠃⢠⣿⡇⠀⠃⢻⣿
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠿⠘⢿⣿⣆⡘⢦⣀⠀⠀⠉⠛⠛⠻⠶⢤⣄⣤⣬⡀⢄⣀⡒⣄⣄⠠⠄⣤⡀⡝⢃⣼⣿⡟⢀⣩⣿⣿⢱⣿⣇⢰⣿⣇⣤⣼⣿⠁⡄⠀⢸⣸
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠞⠃⠀⠀⠀⠈⠻⣿⡶⣤⣗⣒⣠⡀⡠⠤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢜⣟⣿⣧⢟⣿⣿⠠⣞⣿⣿⣿⣾⢿⡇⣼⣿⡟⢸⣿⣿⣗⠊⢁⣸⣿
      </Typography>
    </Box>
  )
}
