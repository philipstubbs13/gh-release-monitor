import { Timeline } from '@material-ui/lab';
import { ReleaseItem } from './release-item/ReleaseItem';
import PropTypes from 'prop-types';

export interface IProps {
  // eslint-disable-next-line no-unused-vars
  getReleaseById: (id: number) => void;
  releaseItems: any[];
  releasesMarkedSeen: number[];
}

export const ReleaseTimeline = (props: IProps) => {
  return (
    <Timeline align={'alternate'}>
      {props.releaseItems.map((releaseItem: any) => {
        return (
          <ReleaseItem
            author={releaseItem.author.login}
            authorUrl={releaseItem.author.html_url}
            avatarUrl={releaseItem.author.avatar_url}
            getReleaseById={props.getReleaseById}
            id={releaseItem.id}
            key={releaseItem.id}
            name={releaseItem.name}
            publishedAt={releaseItem.published_at}
            releasesMarkedSeen={props.releasesMarkedSeen}
            tagName={releaseItem.tag_name}
          />
        );
      })}
    </Timeline>
  );
};

ReleaseTimeline.propTypes = {
  getReleaseById: PropTypes.func.isRequired,
  releaseItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  releasesMarkedSeen: PropTypes.arrayOf(PropTypes.number).isRequired,
};
