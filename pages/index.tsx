import * as React from 'react';
import { LayoutApp } from '@components/Layout/LayoutApp';
import { Spacing } from '@components/Layout/Spacing';
import { LatestSeries } from '@pageSections/Home/LatestSeries';
import { LatestEpisodes } from '@pageSections/Home/LatestEpisodes';
import { LatestMovies } from '@pageSections/Home/LatestMovies';

const Home = () => (
  <LayoutApp title='Anime Online - Vimox'>
    <LatestSeries />
    <Spacing size={80} />
    <LatestEpisodes />
    <Spacing size={80} />
    <LatestMovies />
    <Spacing size={30} />
  </LayoutApp>
);

export default Home;
