import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      maxWidth: 345,
      height: '100%',
      overflow: 'hidden',
    },
    repoName: {
      marginBottom: 20,
      fontWeight: theme.typography.fontWeightBold,
    },
    module: {
      width: '250px',
      margin: '0 0 1em 0',
      overflow: 'hidden',

      '& * > p': {
        margin: 0,
      },
    },
    overflow: {
      position: 'relative',
      maxHeight: 'calc(2.0rem * 5)',
      overflow: 'hidden',
      paddingRight: '1rem',

      '&:before': {
        position: 'absolute',
        content: '...',
        bottom: 0,
        right: 0,
      },

      '&:after': {
        content: '',
        position: 'absolute',
        right: 0,
        width: '1rem',
        height: '1rem',
        background: 'white',
      },
    },
    repoDescription: {},
  };
});

export interface IProps {
  repo: any;
}

export const RepoCard = (props: IProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="subtitle1" className={classes.repoName} noWrap>
            {props.repo.name}
          </Typography>
          <div className={clsx(classes.module, classes.overflow)}>
            <Typography variant="body2" component="p" className={classes.repoDescription}>
              {props.repo.description}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
