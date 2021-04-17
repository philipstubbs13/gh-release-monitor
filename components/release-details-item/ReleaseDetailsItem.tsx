import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { OpenInNewOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  bold: {
    fontWeight: theme.typography.fontWeightBold,
  },
}));

export interface IProps {
  label: String;
  info: String;
  isLink?: boolean;
}

export const ReleaseDetailsItem = (props: IProps) => {
  const classes = useStyles();

  return (
    <Box display={'flex'} flexDirection={'column'} marginTop={2}>
      <Typography className={classes.bold}>{props.label}</Typography>
      <Typography>
        {props.info}{' '}
        <Typography component={'span'}>
          {' '}
          {props.isLink && <OpenInNewOutlined fontSize={'small'} />}
        </Typography>
      </Typography>
    </Box>
  );
};
