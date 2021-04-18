import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { ReleaseDetailsItem } from '@components/release-details-item/ReleaseDetailsItem';
import { formatDate } from '../../utils/date.utils';
import { useReleaseDetailsStyles } from './ReleaseDetails.styles';
import React from 'react';

export interface IProps {
  author: string;
  authorUrl: string;
  createdAt: string;
  description?: string;
  isDraft: boolean;
  isPrerelease: boolean;
  name: string;
  publishedAt: string;
  tagName: string;
}

export const ReleaseDetails = (props: IProps) => {
  const classes = useReleaseDetailsStyles();
  const isDraft = props.isDraft ? 'Yes' : 'No';
  const isPrerelease = props.isPrerelease ? 'Yes' : 'No';
  const releaseName = props.name ? props.name : props.tagName;

  return (
    <React.Fragment>
      <Typography variant={'subtitle1'} className={classes.releaseDetails}>
        Release: {releaseName}
      </Typography>
      <a href={props.authorUrl} target={'_blank'} rel={'noopener noreferrer'}>
        <ReleaseDetailsItem label="Author" info={props.author} isLink={true} />
      </a>
      {props.description && <ReleaseDetailsItem label={'Description'} info={props.description} />}
      <ReleaseDetailsItem label={'Created At'} info={formatDate(props.createdAt)} />
      <ReleaseDetailsItem label={'Published At'} info={formatDate(props.publishedAt)} />
      <ReleaseDetailsItem label={'Tag'} info={props.tagName} />
      <ReleaseDetailsItem label="Is Prerelease?" info={isPrerelease} />
      <ReleaseDetailsItem label="Is Draft?" info={isDraft} />
    </React.Fragment>
  );
};

ReleaseDetails.propTypes = {
  author: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string,
  isDraft: PropTypes.bool.isRequired,
  isPrerelease: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  tagName: PropTypes.string.isRequired,
};

ReleaseDetails.defaultProps = {
  description: '',
};
