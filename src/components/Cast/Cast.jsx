import { fetchMovieCast } from 'components/API/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
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
      <ul>
        {actors.map(actor => {
          return (
            <li key={actor.id}>
              <div>
                <img src={IMG_REGUEST + actor.profile_path} alt={actor.name} />
              </div>
              <div>
                <p>Actor: {actor.name}</p>
                <span>Сharacter: {actor.character}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
