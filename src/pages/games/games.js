import React from 'react';
import { GameGenre } from '../../settings/game-genre';
import { changeGenre } from '../../store/data-process';
import { useAppSelector, useAppDispatch } from '../../store/redux-hooks';
import { getAllGames, getGamesForGenre } from '../../store/selectors';
import './games.scss';
import 'devextreme/dist/css/dx.light.css';

import {
  DataGrid,
  Column,
  SearchPanel,
  FilterRow
} from 'devextreme-react/data-grid';

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
            <DataGrid 
              id="dataGrid"
              dataSource={allGames}
              keyExpr="name"
              allowColumnReordering={true}
              columnAutoWidth={true}
              allowColumnResizing={true}
              >
              <Column 
                dataField={"name"}
                caption='Название игры'
              />
              <Column 
                dataField="rating"
                caption='Рейтинг на BGG'
                width={150}
                sortOrder="desc"
                alignment={'center'}
              />
              <Column 
                dataField="genre"
                caption='Жанр игры'
              />
              <Column 
                dataField="duration"
                caption='Длительность'
                customizeText={(cellInfo)=>`${cellInfo.value} ч`}
                width={150}
                alignment={'center'}
              />
              <Column 
                dataField="players"
                caption='Количество игроков'
                customizeText={(cellInfo)=> `${cellInfo.value.min}-${cellInfo.value.max} чел`}
                width={150}
                alignment={'center'}
              />          
              <SearchPanel visible={true} />
              <FilterRow visible={true} />

            </DataGrid>
        </div>
      </div>
    </>
  )
};
