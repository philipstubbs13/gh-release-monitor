import { Typography, Box } from '@material-ui/core';
import { OpenInNewOutlined } from '@material-ui/icons';
import { useReleaseDetailsItemStyles } from './ReleaseDetailsItem.styles';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export interface IProps {
  info: string;
  isLink?: boolean;
  label: string;
}

export const ReleaseDetailsItem = (props: IProps) => {
  const classes = useReleaseDetailsItemStyles();

  return (
    <Box display={'flex'} justifyContent={'space-between'} marginTop={1}>
      <Typography className={classes.bold}>{props.label}</Typography>
      <Typography className={clsx({ [classes.link]: props.isLink })}>
        {props.info}{' '}
        <Typography component={'span'}>
          {props.isLink && <OpenInNewOutlined className={classes.openInNewIcon} />}
        </Typography>
      </Typography>
    </Box>
  );
};

ReleaseDetailsItem.propTypes = {
  info: PropTypes.string.isRequired,
  isLink: PropTypes.bool,
  label: PropTypes.string.isRequired,
};

ReleaseDetailsItem.defaultProps = {
  isLink: false,
};
