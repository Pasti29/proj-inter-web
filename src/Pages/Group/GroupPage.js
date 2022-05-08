import React from 'react';
import '../../App.css'
import GroupNav from './GroupNav';
import AllGroupPage from './AllGroupPage';
import AddGroupPage from './AddGroupPage';
import { Route, Routes } from 'react-router-dom';

class GroupPage extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      groups: [
        {
          id: 1,
          name: 'Grupa 1',
          members: ['Adam Marciniak', 'Emil Górecki'],
          tags: ['backend', 'c++', 'algorytmy'],
          description: 'Szukamy jednej osoby do projektu Systemów Operacyjnych 2.',
          subject: 'SO2'
        },
        {
          id: 2,
          name: 'Grupa 2',
          members: ['Paulina Ostrowska', 'Oksana Gajewska'],
          tags: ['python', 'django', 'React'],
          description: 'Szukamy dwóch osób do Projektu Zespołowego. Najlepiej, żeby umiała JavaScript oraz React\'a.',
          subject: 'Projekt Zespołowy'
        },
      ]
    }
  }

  render() {
    return (
        <div>
          <GroupNav />
          <Routes>
            <Route  path='/' exact element={ <AllGroupPage groups={this.state} />}/>
            <Route  path='/add' exact element={ <AddGroupPage />}/>
          </Routes>
        </div>
    )
  }
}

export default GroupPage;
