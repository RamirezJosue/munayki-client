import PropTypes from 'prop-types';

// material
import { alpha, styled } from '@mui/material/styles';
import {
  Link,
  Card,
  Grid,
  Avatar,
  Typography,
  CardContent,
} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
//
import { SvgIconStyle } from '../../SvgIconStyle';

import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// ----------------------------------------------------------------------

const CardMediaStyle = styled('div')({
  position: 'relative',
  paddingTop: 'calc(100% * 3 / 4)',
});

const TitleStyle = styled(Link)({
  height: 44,
  overflow: 'hidden',
  WebkitLineClamp: 2,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
});

const AvatarStyle = styled(Avatar)(({ theme }) => ({
  zIndex: 9,
  width: 32,
  height: 32,
  position: 'absolute',
  left: theme.spacing(3),
  bottom: theme.spacing(-2),
}));

const CoverImgStyle = styled('img')({
  bottom: 100,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

const CourseCard = styled(Card)({
  marginTop: '20px',
  position: 'relative',
  width: '100%',
  minHeight: '400px',
  display: 'flex',
  justifyContent: 'space-between',

  '@media (max-width: 767px)': {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
});

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    backgroundColor: '#78D9EC',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: '#fff',
    '&.Mui-selected': {
      color: '#78D9EC',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  })
);

// ----------------------------------------------------------------------

CoursePostCard.propTypes = {
  post: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default function CoursePostCard({ post, index }) {
  const { cover, title, author, description } = post;
  const latestPostLarge = index === 0;
  const latestPost = index === 1 || index === 2;

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item xs={12}>
      <Card sx={{ position: 'relative', maxHeight: '370px' }}>
        <CardMediaStyle
          sx={{
            ...((latestPostLarge || latestPost) && {
              pt: 'calc(100% * 4 / 3)',
              '&:after': {
                top: 0,
                content: "''",
                width: '100%',
                height: '100%',
                position: 'absolute',
                bgcolor: (theme) => alpha(theme.palette.grey[900], 0.56),
              },
            }),
            ...(latestPostLarge && {
              pt: {
                xs: 'calc(100% * 4 / 3)',
                sm: 'calc(100% * 3 / 4.66)',
              },
            }),
          }}
        >
          <SvgIconStyle
            color="paper"
            src="/static/icons/shape-avatar.svg"
            sx={{
              width: 80,
              height: 36,
              zIndex: 9,
              bottom: -15,
              position: 'absolute',
              ...((latestPostLarge || latestPost) && { display: 'none' }),
            }}
          />
          <AvatarStyle
            alt={author.name}
            src={author.avatarUrl}
            sx={{
              ...((latestPostLarge || latestPost) && {
                zIndex: 9,
                top: 220,
                left: 24,
                width: 60,
                height: 60,
              }),
            }}
          />
          <CoverImgStyle alt={title} src={cover} />
        </CardMediaStyle>

        <CardContent
          sx={{
            pt: 4,
            ...((latestPostLarge || latestPost) && {
              bottom: 0,
              width: '100%',
              position: 'absolute',
            }),
          }}
        >
          <Typography
            gutterBottom
            variant="caption"
            sx={{ color: 'text.disabled', display: 'block' }}
          ></Typography>

          <TitleStyle
            color="inherit"
            variant="subtitle2"
            underline="none"
            sx={{
              ...(latestPostLarge && { typography: 'h3', height: 60 }),
              ...((latestPostLarge || latestPost) && {
                color: 'common.white',
              }),
            }}
          >
            {title}
          </TitleStyle>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'white',
              display: 'block',
              paddingBottom: '50px',
            }}
          >
            {description}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              paddingLeft: '80px',
              paddingBottom: '40px',
              color: 'white',
              display: 'block',
            }}
          >
            {author.name}
          </Typography>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <StyledTab label="Conceptos" href="#" />
            <StyledTab label="Apuntes" href="#" />
            <StyledTab label="Practicas" href="#" />
            <StyledTab label="Tarea" href="#" />
          </StyledTabs>
        </CardContent>
      </Card>

      <CourseCard>
        <CardMedia
          component="iframe"
          src={'https://www.youtube.com/embed/_GH3GzjMb0A'}
          title="Video 01"
          frameBorder="0"
          allowFullScreen
          height="400"
          sx={{ width: '100%' }}
        />
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
            paddingTop: '20px',
            paddingX: '20px',
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Sección 01: Introducción al curso de Razonamiento verbal" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="01. Introduccion" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="02. Antes de empezar el curso" />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick}>
            <ListItemText primary="Sección 02: Sinónimos y antónimos" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="01. Sinonimos contextuales parte 1" />
              </ListItemButton>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemText primary="02. Sinonimos contextuales parte 2" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </CourseCard>
    </Grid>
  );
}
