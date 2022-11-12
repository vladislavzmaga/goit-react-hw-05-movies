import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
`;

export const CastItem = styled.li`
  display: flex;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const CastImg = styled.img`
  width: 100px;
  margin-right: 10px;
`;

export const CastInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CastInfoTitle = styled.h3`
  margin-right: 10px;
`;
