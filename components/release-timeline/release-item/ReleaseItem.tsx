import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab';
import { Paper, Typography, Avatar, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    padding: '6px 16px',
    border: `2px solid ${theme.palette.secondary.dark}`,
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  bold: {
    fontWeight: 'bold',
  },
  muted: {
    opacity: 0.5,
  },
}));

export interface IProps {
  releaseItem: any;
  getReleaseById: (id: String) => void;
}

export const ReleaseItem = (props: IProps) => {
  const classes = useStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body2">{props.releaseItem.published_at}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <a href={props.releaseItem.author.html_url} target="_blank" rel="noopener noreferrer">
          <TimelineDot>
            <Avatar
              alt={props.releaseItem.author.login}
              src={props.releaseItem.author.avatar_url}
              className={classes.avatar}
            />
          </TimelineDot>
        </a>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Button onClick={() => props.getReleaseById(props.releaseItem.id)}>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="body1" className={classes.bold}>
              {props.releaseItem.name}
            </Typography>
          </Paper>
        </Button>
      </TimelineContent>
    </TimelineItem>
  );
};
