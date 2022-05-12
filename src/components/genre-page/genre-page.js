import React from 'react';
import './genre-page.scss';
import { changeGenre, changeID } from '../../store/data-process';
import { useAppSelector, useAppDispatch } from '../../store/redux-hooks';
import { getChosenGenre} from '../../store/selectors';
import 'devextreme/dist/css/dx.light.css';
import {allGames} from '../../fixtures/sources'
import { useHistory } from 'react-router-dom';

import {
  DataGrid,
  Column,
  SearchPanel,
  FilterRow,
  Editing,
  Button,
} from 'devextreme-react/data-grid';

// eslint-disable-next-line import/no-anonymous-default-export
export default function GenrePage({gameGenre}) {
  const history = useHistory();
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

  const handlerEnterBtnClick = (e) => {
    dispatch(changeID(e.row.data.id));
    history.push('/game-page');
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
              <Editing 
                allowDeleting={true}
                allowUpdating={true}
                mode="row"
              />
              <Column 
                width={100}
                type={'buttons'}
                name={'edit-buttons'}
              >
                <Button name={"edit"} />
                <Button name={"delete"} />
              </Column>
              <Column 
                dataField={"name"}
                caption='Название игры'
              />
              <Column 
                width={70}
                type={'buttons'}
                name={'game-page-btn'}
              >
                <Button 
                  name={"enter-page"}
                  onClick={handlerEnterBtnClick}
                  icon={'movetofolder'}                
                  
                />
              </Column>
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
