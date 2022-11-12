import { fetchMovieCast } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastList,
  CastItem,
  CastImg,
  CastInfoWrapper,
  CastInfoTitle,
} from './Cast.styled';

const Cast = () => {
  const params = useParams();
  const [actors, setActors] = useState(null);
  const IMG_REGUEST = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    fetchMovieCast(params.movieId).then(respounse => {
      const result = respounse.data.cast;
      setActors(result);
    });
  }, [params.movieId]);

  if (!actors) {
    return;
  }

  return (
    <div>
      <CastList>
        {actors.map(actor => {
          return (
            <CastItem key={actor.id}>
              <div>
                <CastImg
                  src={IMG_REGUEST + actor.profile_path}
                  alt={actor.name}
                />
              </div>
              <div>
                <CastInfoWrapper>
                  <CastInfoTitle>Actor:</CastInfoTitle>
                  <span>{actor.name}.</span>
                </CastInfoWrapper>
                <CastInfoWrapper>
                  <CastInfoTitle>Сharacter:</CastInfoTitle>
                  <span>{actor.character}.</span>
                </CastInfoWrapper>
              </div>
            </CastItem>
          );
        })}
      </CastList>
    </div>
  );
};

export default Cast;
