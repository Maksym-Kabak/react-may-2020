import React from 'react';
import { Header } from '../header/HeaderFromLecture';
import {socialMediaIcons, user} from "../../constants";


// todo: здесь нужно сделать импорт Footer из '../footer/Footer'
import {Footer} from '../footer/Footer';

// todo: здесь нужно сделать импорт usersList из '../../constants'
import {usersList} from "../../constants";
// todo: здесь нужно сделать импорт UserCard из '../user-card/UserCard'
import {UserCard} from '../user-card/UserCard'
import './App.css';

const Footer1 = (props) => {
    return (
        <div>
        footer
        </div>
    )
};

function App() {
  return (
    <div className="App">
      <Header />
       {/*  todo: здесь нужно использовать Footer по аналогии с Header */}
        <Footer />
       {/*  todo: здесь нужно использовать UserCard по аналогии с Header, как пропсу user передать usersList[0]*/}
        <UserCard1  />
    </div>
  )
};
export default App;
