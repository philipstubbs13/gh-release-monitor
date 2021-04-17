import React, { useState } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Timeline } from '@material-ui/lab';
import { ReleaseItem } from './release-item/ReleaseItem';

const useStyles = makeStyles((theme: Theme) => ({
  secondaryTail: {
    backgroundColor: theme.palette.secondary.dark,
  },
  bold: {
    fontWeight: 'bold',
  },
  instructions: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

export interface IProps {
  getReleaseById: (id: String) => void;
  releaseItems: any[];
}

export const ReleaseTimeline = (props: IProps) => {
  const classes = useStyles();

  return (
    <Timeline align="alternate">
      <Typography variant="subtitle1" className={classes.instructions}>
        Click a release box in the timeline below for more information
      </Typography>

      {props.releaseItems.map((releaseItem: any) => {
        return (
          <ReleaseItem
            key={releaseItem.id}
            releaseItem={releaseItem}
            getReleaseById={props.getReleaseById}
          />
        );
      })}
    </Timeline>
  );
};
