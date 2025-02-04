import styled, { css } from 'styled-components';

type SerieSlideProps = {
  isActive?: boolean;
};

export const Root = styled.div<SerieSlideProps>`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    css`
      z-index: 1;
    `}
`;

export const GenersBox = styled.div`
  display: flex;

  p:not(:last-child) {
    margin-right: 12px;
  }

  p:not(:last-child)::after {
    content: '|';
    margin-left: 12px;
  }
`;
