import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import clsx from 'clsx';
import Link from 'next/link';
import { useRepoCardStyles } from './RepoCard.styles';

export interface IProps {
  repo: any;
}

export const RepoCard = (props: IProps) => {
  const classes = useRepoCardStyles();

  return (
    <Card className={classes.root}>
      <div>
        <CardContent className={classes.body}>
          <Typography gutterBottom variant={'subtitle1'} className={classes.repoName} noWrap={true}>
            {props.repo.name}
          </Typography>
          <div className={clsx(classes.module, classes.overflow)}>
            <Typography variant={'body2'} component={'p'}>
              {props.repo.description}
            </Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button size={'small'} color={'primary'}>
            <a href={props.repo.html_url} target={'_blank'} rel={'noopener noreferrer'}>
              Repo
            </a>
          </Button>
          <Button size={'small'} color={'primary'}>
            <Link href={`/releases/${props.repo.full_name}`}>Releases</Link>
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
