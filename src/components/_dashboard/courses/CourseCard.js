import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
//
import { Label } from '../../Label';

// ----------------------------------------------------------------------

const CourseImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ShopCourseCard.propTypes = {
  course: PropTypes.object,
};

export default function ShopCourseCard({ course }) {
  const { name, cover, description } = course;

  return (
    <Link to="curso" component={RouterLink} underline="none">
      <Card>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          <Label
            variant="filled"
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          ></Label>
          <CourseImgStyle alt={name} src={cover} />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="subtitle1">
              <Typography
                component="span"
                variant="body1"
                sx={{
                  color: 'text.disabled',
                }}
              >
                {description}
              </Typography>
            </Typography>
          </Stack>
        </Stack>
      </Card>
    </Link>
  );
}
