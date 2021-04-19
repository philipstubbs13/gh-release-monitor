import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Avatar,
  Divider,
  Button,
  CardActions,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { ReleaseDetailsItem } from '@components/release-details-item/ReleaseDetailsItem';
import { formatDate } from '../../utils/date.utils';

export interface IProps {
  author: string;
  authorAvatarUrl: string;
  createdAt: string;
  isDraft: boolean;
  isPrerelease: boolean;
  name: string;
  publishedAt: string;
  releaseUrl: string;
  removeFromFavorites: () => void;
  tagName: string;
}

export const FavoriteCard = (props: IProps) => {
  const releaseName = props.name ? props.name : props.tagName;
  const isDraft = props.isDraft ? 'Yes' : 'No';
  const isPrerelease = props.isPrerelease ? 'Yes' : 'No';

  return (
    <Card elevation={1}>
      <CardHeader
        avatar={<Avatar src={props.authorAvatarUrl} alt={props.author} />}
        action={
          <IconButton onClick={props.removeFromFavorites}>
            <DeleteOutlined />
          </IconButton>
        }
        title={releaseName}
      />
      <Divider />
      <CardContent>
        <ReleaseDetailsItem label={'Created At'} info={formatDate(props.createdAt)} />
        <ReleaseDetailsItem label={'Published At'} info={formatDate(props.publishedAt)} />
        <ReleaseDetailsItem label={'Tag'} info={props.tagName} />
        <ReleaseDetailsItem label="Is Prerelease?" info={isPrerelease} />
        <ReleaseDetailsItem label="Is Draft?" info={isDraft} />
      </CardContent>
      <CardActions>
        <a href={props.releaseUrl} target={'_blank'} rel={'noopener noreferrer'}>
          <Button>More Info</Button>
        </a>
      </CardActions>
    </Card>
  );
};

FavoriteCard.propTypes = {
  author: PropTypes.string.isRequired,
  authorAvatarUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  isDraft: PropTypes.bool.isRequired,
  isPrerelease: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  releaseUrl: PropTypes.string.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
  tagName: PropTypes.string.isRequired,
};
