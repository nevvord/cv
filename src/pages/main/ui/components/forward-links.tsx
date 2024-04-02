import { Stack, Typography, Link, styled, Skeleton } from "@mui/material"
import { useQuery } from "@tanstack/react-query"

import { queryKeys } from "@shared/constants"
import { fetchForwardLinks } from "../../api"



const StyledListElement = styled('div')({
  display: 'flex',
  marginLeft: 4,
  ":not(:last-child):after": {
    content: "','"
  }
})


export function ForwardLinks() {
  const { isLoading, data } = useQuery({
    queryKey: [queryKeys.forwardLinks],
    queryFn: fetchForwardLinks
  })

  if (isLoading) {
    return (
      <Stack direction='row' gap={1} mt={1} >
        <Skeleton variant="rounded" width={180} height={24} />
        <Skeleton variant="rounded" width={76} height={24} />
        <Skeleton variant="rounded" width={76} height={24} />
        <Skeleton variant="rounded" width={76} height={24} />
        <Skeleton variant="rounded" width={76} height={24} />
      </Stack>
    )
  }

  return (
    <Stack direction='row' mt={1}>
      <Typography>
        UTC time, Slovakia.
      </Typography>



      {data?.map((link) => (
        <StyledListElement key={link.label} >
          <Link href={link.href}>
            {link.label}
          </Link>
        </StyledListElement>
      )
      )}
    </Stack>
  )
}
