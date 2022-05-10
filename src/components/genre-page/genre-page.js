import React from 'react';
import './genre-page.scss';
import { changeGenre } from '../../store/data-process';
import { useAppSelector, useAppDispatch } from '../../store/redux-hooks';
import { getChosenGenre, getGamesForGenre } from '../../store/selectors';
import 'devextreme/dist/css/dx.light.css';
import {allGames} from '../../fixtures/sources'


import {
  DataGrid,
  Column,
  SearchPanel,
  FilterRow
} from 'devextreme-react/data-grid';

// eslint-disable-next-line import/no-anonymous-default-export
export default function GenrePage({gameGenre}) {
  const dispatch = useAppDispatch();
  dispatch(changeGenre(gameGenre));
  const chosenGenre = useAppSelector(getChosenGenre)
  const gamesForGenre = allGames.filter((game) => game.genre === chosenGenre);

  const writePlayersAmount = (cellInfo) => {
    const min = cellInfo.value.min;
    const max = cellInfo.value.max;
    if (min===max) {
      return `${min} чел`;
    }
    return `${min}-${max} чел`;
  }

  return (
    <>
      <h2 className={'content-block'}>{gameGenre}</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
            <DataGrid 
              id="dataGrid"
              dataSource={gamesForGenre}
              keyExpr="id"
              allowColumnReordering={true}
              columnAutoWidth={true}
              allowColumnResizing={true}
              focusedRowEnabled={true}
              defaultFocusedRowIndex={0}
              >
              <Column 
                dataField={"name"}
                caption='Название игры'
              />
              <Column 
                dataField="rating"
                caption='Рейтинг на BGG'
                width={200}
                sortOrder="desc"
                alignment={'center'}
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
                customizeText={writePlayersAmount}
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
