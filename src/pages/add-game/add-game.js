import React, { useCallback, useState } from 'react';
import './add-game.scss';
import 'devextreme/dist/css/dx.light.css';
import { allGames } from '../../default-data/all-games';
import { genreSelectOpt } from '../../settings/genre-select-opt';
import uniqid from 'uniqid';
 import {
  Form, SimpleItem, Label, ButtonItem,
} from 'devextreme-react/form';
import {TextArea} from 'devextreme-react/text-area'
import { Popup, ToolbarItem } from 'devextreme-react/popup';


let gameData;
const setDefaultGameData = () => {
  gameData = {
    id: uniqid(),
    genre: '',
    name: '',
    rating: 0,
    duration: 0,
    players: {
        min: 0,
        max: 0,
    },
    description: '',
    picture: '/images/game-players.png',
  }
}
setDefaultGameData();

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [popupVisible, setPopupVisible] = useState(false);
  console.log('render');

  const renderPicture = (data) => <img src={data.editorOptions.value} width={850} height={450} alt={'board-game'} />
  const saveBtnOptions = {
    text: "Add new Game to List",
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

    allGames.push(gameData);
    setPopupVisible(true);
  }, []);

  const popupBtnOptions = {
    text: 'OK',
    onClick: () => setPopupVisible(false),
  }

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Добавить игру в список</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>
        <Popup
          visible={popupVisible}
          onHiding={() => setPopupVisible(false)}
          onHidden={setDefaultGameData()}
          dragEnabled={false}
          closeOnOutsideClick={true}
          showCloseButton={false}
          title="Игра добавлена"
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
        <form action="#" onSubmit={handleSubmit}>
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
              isRequired={true}
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
              isRequired={true}
            >
              <Label text={'Рейтинг на BGG'} />
            </SimpleItem>
            <SimpleItem 
              dataField={'duration'}
              isRequired={true}
            >
              <Label text={'Длительность игры в часах'} />
            </SimpleItem>
            <SimpleItem 
              dataField={'players.min'}
              isRequired={true}
            >
              <Label text={'Мин количество игроков'} />
            </SimpleItem>
            <SimpleItem 
              dataField={'players.max'}
              isRequired={true}
            >
              <Label text={'Макс количество игроков'} />
            </SimpleItem>
            <SimpleItem 
              dataField={'description'} 
              colSpan={4} 
              editorType="dxTextArea"
              editorOptions={{height: '150px', placeholder: 'Текст текстович об игре'}}             
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


