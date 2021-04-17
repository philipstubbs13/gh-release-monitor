import {
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@material-ui/lab';
import { Paper, Typography, Avatar, Button } from '@material-ui/core';
import { formatDate } from '../../../utils/date.utils';
import { useReleaseItemStyles } from './ReleaseItem.styles';
import PropTypes from 'prop-types';

export interface IProps {
  // eslint-disable-next-line no-unused-vars
  getReleaseById: (id: string) => void;
  releaseItem: any;
}

export const ReleaseItem = (props: IProps) => {
  const classes = useReleaseItemStyles();

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant={'body2'}>{formatDate(props.releaseItem.published_at)}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <a href={props.releaseItem.author.html_url} target={'_blank'} rel={'noopener noreferrer'}>
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
            <Typography variant={'body1'} className={classes.bold}>
              {props.releaseItem.name}
            </Typography>
          </Paper>
        </Button>
      </TimelineContent>
    </TimelineItem>
  );
};

ReleaseItem.PropTypes = {
  getReleaseById: PropTypes.func.isRequired,
  releaseItem: PropTypes.object.isRequired,
};
