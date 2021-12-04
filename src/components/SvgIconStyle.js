import PropTypes from 'prop-types';
import { Box } from '@mui/material';

export const SvgIconStyle = ({ src, color = 'inherit', sx }) => {
  return (
    <Box
      component="span"
      sx={{
        width: 24,
        height: 24,
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
        bgcolor: `${color}.main`,
        ...(color === 'inherit' && { bgcolor: 'currentColor' }),
        ...(color === 'action' && { bgcolor: 'action.active' }),
        ...(color === 'disabled' && { bgcolor: 'action.disabled' }),
        ...(color === 'paper' && { bgcolor: 'background.paper' }),
        ...sx
      }}
    />
  );
}

SvgIconStyle.propTypes = {
  src: PropTypes.string.isRequired,
  color: PropTypes.string,
  sx: PropTypes.object
};
