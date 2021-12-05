import { Grid, Container } from '@mui/material';
// components
import { Page } from '../components/Page';
import { CoursePostCard } from '../components/_dashboard/course';
//
import POSTS from '../_mocks_/course';

export const Course = () => {
  return (
    <Page title="Dashboard: Blog | Minimal-UI">
      <Container>
        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <CoursePostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </Page>
  );
};
