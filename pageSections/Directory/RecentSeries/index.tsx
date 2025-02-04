import React from 'react';
import { useQuery } from 'react-query';
import { getSeries } from '@services/series';
import { ErrorMessage } from '@components/Feedback/ErrorMessage';
import { Title } from '@components/DataDisplay/Title';
import { Spacing } from '@components/Layout/Spacing';
import { useFilterQuery } from '@hooks/useFilterQuery';
import { usePreviousValue } from '@hooks/usePreviousValue';
import { Filter } from '@localComponents/directory/recentSeries/Filter';
import { SeriesGrid } from '@localComponents/directory/recentSeries/SeriesGrid';
import { PaginationControls } from '@localComponents/directory/recentSeries/PaginationControls';
import { Skeleton } from '@localComponents/directory/recentSeries/Skeleton';

export const RecentSeries = () => {
  const { recoverFilterQuerys } = useFilterQuery();
  const filterQuerys = recoverFilterQuerys();
  const [page, setPage] = React.useState(1);
  const previousFilterQuerys = usePreviousValue(filterQuerys);
  const previousPage = usePreviousValue(page);

  const { data, isLoading, error, refetch } = useQuery(
    'series_directory',
    async () =>
      getSeries({
        ...filterQuerys,
        limit_items: 12,
        release: 'last_premieres',
        sort_release: 'desc',
        page_index: page,
      }),
    {
      keepPreviousData: true,
      cacheTime: 900000,
      enabled:
        JSON.stringify(previousFilterQuerys) !== JSON.stringify(filterQuerys) ||
        page !== previousPage,
    }
  );

  return (
    <section>
      <Title level='4' colorScheme='white'>
        Series recientes
      </Title>
      <Spacing size={32} />
      <Filter />
      {error ? (
        <ErrorMessage onClickRetry={refetch}>{error}</ErrorMessage>
      ) : isLoading ? (
        <Skeleton />
      ) : (
        <>
          <SeriesGrid series={data.series} />
          {Array.isArray(data.series) && data.series.length > 0 && (
            <PaginationControls
              page={page}
              lastPage={data.lastPage}
              onClickNext={() => setPage(page + 1)}
              onClickPrev={() => setPage(Math.max(page - 1, 0))}
            />
          )}
        </>
      )}
    </section>
  );
};
