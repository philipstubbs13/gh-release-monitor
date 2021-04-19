import PropTypes from 'prop-types';
import { Typography, TextField, Grid, Button, Box } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React from 'react';
import { useSearchOrganizationFormStyles } from './SearchOrganizationForm.styles';
import clsx from 'clsx';

export interface IProps {
  clearSearchHistory: () => void;
  getReposByOrg: () => void;
  recentSearches: string[];
  searchError: string;
  searchTerm: string;
  // eslint-disable-next-line no-unused-vars
  setSearchTerm: (value: string) => void;
}

export const SearchOrganizationForm = (props: IProps) => {
  const classes = useSearchOrganizationFormStyles();

  return (
    <React.Fragment>
      <Typography variant={'subtitle1'}>
        To start tracking releases, enter name of the organization you want to track as the name
        appears on GitHub.
      </Typography>
      <Typography variant={'subtitle1'}>
        To clear your recent searches from the autocomplete dropdown, click{' '}
        <b>CLEAR SEARCH HISTORY</b>.
      </Typography>
      <Box display={'flex'} marginTop={3}>
        <Button
          variant={'contained'}
          type={'submit'}
          className={classes.searchBtn}
          onClick={() => props.getReposByOrg()}>
          Search
        </Button>
        <Button
          variant={'contained'}
          type={'submit'}
          className={clsx(classes.clearSearchHistoryBtn, classes.searchBtn)}
          onClick={() => props.clearSearchHistory()}>
          Clear Search History
        </Button>
      </Box>
      <Grid container={true} spacing={2} alignItems={'center'}>
        <Grid item={true} xs={12} md={6}>
          <Autocomplete
            classes={{
              inputRoot: classes.inputRoot,
            }}
            freeSolo
            id="organization-search"
            disableClearable
            onInputChange={(event, newInputValue) => {
              props.setSearchTerm(newInputValue);
            }}
            options={props.recentSearches}
            renderInput={(params) => (
              <TextField
                {...params}
                error={Boolean(props.searchError)}
                margin="normal"
                variant="outlined"
                InputProps={{ ...params.InputProps, type: 'search' }}
              />
            )}
            value={props.searchTerm}
          />
        </Grid>
      </Grid>
      {Boolean(props.searchError) && (
        <Grid container={true}>
          <Grid item={true} xs={12}>
            <Typography className={classes.searchError}>{props.searchError}</Typography>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

SearchOrganizationForm.propTypes = {
  clearSearchHistory: PropTypes.func.isRequired,
  getReposByOrg: PropTypes.func.isRequired,
  searchError: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
};
