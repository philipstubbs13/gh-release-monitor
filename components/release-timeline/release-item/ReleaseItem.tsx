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
import clsx from 'clsx';

export interface IProps {
  author: string;
  authorUrl: string;
  avatarUrl: string;
  // eslint-disable-next-line no-unused-vars
  getReleaseById: (id: string) => void;
  id: string;
  name: string;
  publishedAt: string;
  releasesMarkedSeen: string[];
  tagName: string;
}

export const ReleaseItem = (props: IProps) => {
  const classes = useReleaseItemStyles();
  const releaseName = props.name ? props.name : props.tagName;
  const isMarkedSeen = props.releasesMarkedSeen.includes(props.id);

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant={'body2'}>Publisehd</Typography>
        <Typography variant={'body2'}>{formatDate(props.publishedAt)}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <a href={props.authorUrl} target={'_blank'} rel={'noopener noreferrer'}>
          <TimelineDot>
            <Avatar alt={props.author} src={props.avatarUrl} className={classes.avatar} />
          </TimelineDot>
        </a>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Button onClick={() => props.getReleaseById(props.id)}>
          <Paper
            className={clsx({
              [classes.paper]: true,
              [classes.paperMarkedSeen]: isMarkedSeen,
            })}
            elevation={3}>
            <Typography variant={'body1'} className={classes.bold}>
              {releaseName}
            </Typography>
          </Paper>
        </Button>
      </TimelineContent>
    </TimelineItem>
  );
};

ReleaseItem.PropTypes = {
  author: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  getReleaseById: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
};
