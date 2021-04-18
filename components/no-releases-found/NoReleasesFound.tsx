import PropTypes from 'prop-types';
import { Typography, Box, Button } from '@material-ui/core';
import { PageRoutes } from '../../constants';
import Link from 'next/link';

export interface IProps {
  organization: string | string[];
  repo: string | string[];
}

export const NoReleasesFound = (props: IProps) => {
  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} marginTop={2}>
      <Typography variant={'h6'}>
        No releases were found for {props.organization}/{props.repo}.
      </Typography>
      <Typography>
        Try heading back to the home page and searching for another repository.
      </Typography>
      <Box marginTop={3}>
        <Link href={PageRoutes.Home}>
          <Button variant={'outlined'}>Go Back Home</Button>
        </Link>
      </Box>
    </Box>
  );
};

NoReleasesFound.propTypes = {
  organization: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};
