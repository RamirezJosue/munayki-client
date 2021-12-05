// material
import { Container, Stack, Typography } from '@mui/material';
// components
import { Page } from '../components/Page';
import { CourseList } from '../components/_dashboard/courses';
//
import COURSES from '../_mocks_/courses';

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  return (
    <Page title="Cursos | Proyecto educativo">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Cursos
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack
            direction="row"
            spacing={1}
            flexShrink={0}
            sx={{ my: 1 }}
          ></Stack>
        </Stack>

        <CourseList courses={COURSES} />
      </Container>
    </Page>
  );
}
