import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Box,
  IconButton,
} from '@material-ui/core';
import { ReleaseDetailsItem } from '@components/release-details-item/ReleaseDetailsItem';
import { formatDate } from '../../utils/date.utils';
import { useReleaseDetailsStyles } from './ReleaseDetails.styles';
import React from 'react';
import { Close, Favorite, FavoriteBorder, Check } from '@material-ui/icons';

export interface IProps {
  addToFavorites: () => void;
  author: string;
  authorUrl: string;
  createdAt: string;
  description?: string;
  id: number;
  isDraft: boolean;
  isFavorite?: boolean;
  isPrerelease: boolean;
  name: string;
  onClose: () => void;
  publishedAt: string;
  releasesMarkedSeen: number[];
  tagName: string;
}

export const ReleaseDetails = (props: IProps) => {
  const classes = useReleaseDetailsStyles();
  const isDraft = props.isDraft ? 'Yes' : 'No';
  const isPrerelease = props.isPrerelease ? 'Yes' : 'No';
  const releaseName = props.name ? props.name : props.tagName;

  return (
    <React.Fragment>
      <Dialog
        onClose={props.onClose}
        aria-labelledby="customized-dialog-title"
        fullWidth={true}
        maxWidth={'xs'}
        open={true}>
        <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
          Release: {releaseName}
          <IconButton aria-label="close" className={classes.closeButton} onClick={props.onClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <a href={props.authorUrl} target={'_blank'} rel={'noopener noreferrer'}>
            <ReleaseDetailsItem label="Author" info={props.author} isLink={true} />
          </a>
          {props.description && (
            <Box display={'flex'} marginTop={1}>
              <Typography className={classes.bold}>Description</Typography>
              <Typography>{props.description}</Typography>
            </Box>
          )}
          <ReleaseDetailsItem label={'Created At'} info={formatDate(props.createdAt)} />
          <ReleaseDetailsItem label={'Published At'} info={formatDate(props.publishedAt)} />
          <ReleaseDetailsItem label={'Tag'} info={props.tagName} />
          <ReleaseDetailsItem label="Is Prerelease?" info={isPrerelease} />
          <ReleaseDetailsItem label="Is Draft?" info={isDraft} />
          <Box display={'flex'} justifyContent={'space-between'} marginTop={1}>
            <Typography className={classes.bold}>Seen</Typography>
            <Check className={classes.green} />
          </Box>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={props.addToFavorites} color="primary">
            {props.isFavorite ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

ReleaseDetails.propTypes = {
  addToFavorites: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string,
  isDraft: PropTypes.bool.isRequired,
  isPrerelease: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  publishedAt: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
};

ReleaseDetails.defaultProps = {
  description: '',
  isFavorite: false,
};
