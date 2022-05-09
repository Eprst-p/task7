import React from 'react';
import { GameGenre } from '../../settings/game-genre';
import 'devextreme/dist/css/dx.light.css';
import GenrePage from '../../components/genre-page/genre-page';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  return (
      <GenrePage gameGenre={GameGenre.AreaConrol} />
  )
};
