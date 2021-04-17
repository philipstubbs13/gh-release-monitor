import { Typography } from '@material-ui/core';
import { Timeline } from '@material-ui/lab';
import { ReleaseItem } from './release-item/ReleaseItem';
import { useReleaseTimelineStyles } from './ReleaseTimeline.styles';
import PropTypes from 'prop-types';

export interface IProps {
  // eslint-disable-next-line no-unused-vars
  getReleaseById: (id: string) => void;
  releaseItems: any[];
}

export const ReleaseTimeline = (props: IProps) => {
  const classes = useReleaseTimelineStyles();

  return (
    <Timeline align={'alternate'}>
      <Typography variant={'subtitle1'} className={classes.instructions}>
        Click a release box in timeline below for more info
      </Typography>

      {props.releaseItems.map((releaseItem: any) => {
        return (
          <ReleaseItem
            getReleaseById={props.getReleaseById}
            key={releaseItem.id}
            releaseItem={releaseItem}
          />
        );
      })}
    </Timeline>
  );
};

ReleaseTimeline.propTypes = {
  getReleaseById: PropTypes.func.isRequired,
  releaseItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
