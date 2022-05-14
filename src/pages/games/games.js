import React from 'react';
import { useAppDispatch } from '../../store/redux-hooks';
import './games.scss';
import 'devextreme/dist/css/dx.light.css';
import { allGames } from '../../default-data/all-games';
import { useHistory } from 'react-router';
import { changeID } from '../../store/data-process';

import {
  DataGrid,
  Column,
  SearchPanel,
  FilterRow,
  Button,
  Editing
} from 'devextreme-react/data-grid';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

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
      <h2 className={'content-block'}>Все игры</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
            <DataGrid 
              id="dataGrid"
              dataSource={allGames}
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
                width={100}
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
