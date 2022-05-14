import React from 'react';
import './user.scss';
import {
  Form, SimpleItem, Label, ButtonItem,
} from 'devextreme-react/form';
import { userData } from '../../fixtures/user-data';
import {TextArea} from 'devextreme-react/text-area'


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Профиль</h2>

      <div className={'content-block dx-card responsive-paddings'}>
        <div className={'form-avatar'}>
          <img
            alt={''}
            src={userData.picture}
          />
        </div>
        <span>{userData.notes}</span>
      </div>

      <div className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          formData={userData}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        >
          <SimpleItem 
            dataField={'firstName'}
            colSpan={4}
          >
            <Label text={'Имя'}  />
          </SimpleItem>
          <SimpleItem 
            dataField={'lastName'}
            colSpan={4}
          >
            <Label text={'Фамилия'}  />
          </SimpleItem>
          <SimpleItem 
            dataField={'notes'}
            colSpan={4}
            editorType="dxTextArea"
            editorOptions={{height: '150px', placeholder: 'О своих бицепсах'}}             
          >
            <Label text={'Заметки про нашего мальчика'}  />
          </SimpleItem>
        </Form>
      </div>
    </React.Fragment>
  );
}

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
