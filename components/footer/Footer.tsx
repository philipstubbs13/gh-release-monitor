import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { APP_TITLE, APP_DESCRIPTION, drawerWidth } from '../../constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      left: drawerWidth,
      bottom: 0,
      width: `calc(100% - ${drawerWidth}px)`,
      textAlign: 'center',
      borderTop: `4px solid ${theme.palette.primary.main}`,
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.text.secondary,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    copyrightText: {
      marginTop: 20,
    },
    description: {
      marginBottom: 20,
    },
  })
);

export const Footer = () => {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <div className={classes.root}>
      <Typography variant={'h6'} className={classes.copyrightText}>
        {APP_TITLE} &copy; {year}
      </Typography>
      <Typography component={'small'} className={classes.description}>
        {APP_DESCRIPTION}
      </Typography>
    </div>
  );
};
