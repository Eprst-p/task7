import React, { useState } from 'react';
import './user.scss';
import {
  Form, SimpleItem, Label, ButtonItem,
} from 'devextreme-react/form';
import { userData } from '../../fixtures/user-data';


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [notes, setNotes] = useState(
    'Интернет войен'
  );
  const employee = {
    ID: 7,
    FirstName: 'Sandra',
    LastName: 'Johnson',
    Prefix: 'Mrs.',
    Position: 'Controller',
    Picture: '/images/internet-warrior.png',
    BirthDate: new Date('1974/11/5'),
    HireDate: new Date('2005/05/11'),
    Notes: notes,
    Address: '4600 N Virginia Rd.'
  };

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
        <span>{notes}</span>
      </div>

      <div className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          //defaultFormData={userData}
          formData={userData}
          //onFieldDataChanged={e => e.userData === 'Notes' && setNotes(e.value)}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        >
          <SimpleItem 
            dataField={'firstName'}
          >
            <Label text={'Имя'}  />
          </SimpleItem>
          <SimpleItem 
            dataField={'lastName'}
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
