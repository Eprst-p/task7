import React from 'react';
import { GameGenre } from '../../settings/game-genre';
import { changeGenre } from '../../store/data-process';
import { useAppSelector, useAppDispatch } from '../../store/redux-hooks';
import { getAllGames, getGamesForGenre } from '../../store/selectors';
import './games.scss';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const allGames = useAppSelector(getAllGames);
  const dispatch = useAppDispatch();
  dispatch(changeGenre(GameGenre.AreaConrol));

  console.log(allGames);
  const GamesForGenre = useAppSelector(getGamesForGenre);
  console.log(GamesForGenre);


  return (
    <>
      <h2 className={'content-block'}>Games</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
          Put your content here
        </div>
      </div>
    </>
  )
};
