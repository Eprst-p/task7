import React, { useCallback, useState } from 'react';
import './game-page.scss';
import 'devextreme/dist/css/dx.light.css';
import { getGameByID } from '../../store/selectors';
import { useAppSelector } from '../../store/redux-hooks';
import { genreSelectOpt } from '../../settings/genre-select-opt';
import {
  Form, SimpleItem, Label, ButtonItem,
} from 'devextreme-react/form';
import { Popup, ToolbarItem } from 'devextreme-react/popup';
import {TextArea} from 'devextreme-react/text-area'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const gameData = useAppSelector(getGameByID);

  const renderPicture = (data) => <img src={data.editorOptions.value} width={850} height={450} alt={'board-game'} />
  const saveBtnOptions = {
    text: "Save",
    type: "success",
    useSubmitBehavior: true,
  }

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    gameData.name = formData.get('name');
    gameData.genre = formData.get('genre');
    gameData.duration = formData.get('duration');
    gameData.players.min = formData.get('players.min');
    gameData.players.max = formData.get('players.max');
    gameData.description = formData.get('description');

    setPopupVisible(true);
}, [gameData]);

  const popupBtnOptions = {
    text: 'OK',
    onClick: () => setPopupVisible(false),
  }


  return (
    <React.Fragment>
      <h2 className={'content-block'}>Страница игры</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
        <form action="#" onSubmit={handleSubmit}>
          <Popup
            visible={popupVisible}
            onHiding={() => setPopupVisible(false)}
            dragEnabled={false}
            closeOnOutsideClick={true}
            showCloseButton={false}
            title="Сохранено"
            width={200}
            height={150}
          >
            <ToolbarItem
              widget="dxButton"
              toolbar="bottom"
              location="center"
              options={popupBtnOptions}
            />
          </Popup>
          <Form 
            id="form"
            formData={gameData}
            colCount={4}
          >
            <SimpleItem 
              dataField={'picture'}
              colSpan={4}
              render={renderPicture}
              >
                <Label text={' '}  />
             </SimpleItem>
            <SimpleItem 
              dataField={'name'}
              colSpan={2}
            >
              <Label text={'Название игры'} />
            </SimpleItem>
            <SimpleItem 
              dataField={'genre'}
              colSpan={2}
              editorType="dxSelectBox"
              editorOptions={genreSelectOpt}
              isRequired={true}
            >
              <Label text={'Жанр игры'} />
            </SimpleItem>
            
            <SimpleItem 
              dataField={'rating'}
              disabled={true}
            >
              <Label text={'Рейтинг на BGG'} />
            </SimpleItem>
            <SimpleItem 
              dataField={'duration'}
            >
              <Label text={'Длительность игры в часах'} />
            </SimpleItem>
            <SimpleItem 
              dataField={'players.min'}
            >
              <Label text={'Мин количество игроков'} />
            </SimpleItem>
            <SimpleItem 
              dataField={'players.max'}
            >
              <Label text={'Макс количество игроков'} />
            </SimpleItem>
            <SimpleItem 
              dataField={'description'} 
              colSpan={4} 
              editorType="dxTextArea"
              editorOptions={{height: '150px'}}             
            >
              <Label text={'Описание игры'} />
            </SimpleItem>
            <ButtonItem 
              buttonOptions={saveBtnOptions}
              horizontalAlignment={'center'}
            />
          </Form>
        </form>
        </div>
      </div>
    </React.Fragment>
  );
}


