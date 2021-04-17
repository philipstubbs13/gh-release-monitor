import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Link from 'next/link';

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
      maxHeight: 'calc(2.0rem * 3)',
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
    actions: {},
    card: {},
    body: {
      minHeight: 220,
    },
  };
});

export interface IProps {
  repo: any;
}

export const RepoCard = (props: IProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.card}>
        <CardContent className={classes.body}>
          <Typography gutterBottom variant="subtitle1" className={classes.repoName} noWrap>
            {props.repo.name}
          </Typography>
          <div className={clsx(classes.module, classes.overflow)}>
            <Typography variant="body2" component="p">
              {props.repo.description}
            </Typography>
          </div>
        </CardContent>
        <CardActions className={classes.actions}>
          <Button size="small" color="primary">
            <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer">
              Repo
            </a>
          </Button>
          <Button size="small" color="primary">
            <Link href={`/releases/${props.repo.full_name}`}>Releases</Link>
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
