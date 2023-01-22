import './App.css';
import PersonalForm from './components/PersonalForm'
import UserForm from './components/UserForm'
import Confirm from './components/Confirm'
import ThankYou from './components/ThankYou'
import { useState } from 'react';
import UserContext from './context/userContext';

const userDetails = {
  fName: '',
  lName: '',
  email: '',
  occupation: '',
  bio: '',
  city: ''
}

function App() {
  const [displayUser, setDisplayUser] = useState(true)
  const [displayPersonal, setDisplayPersonal] = useState(false)
  const [displayConfirm, setDisplayConfirm] = useState(false)
  const [displayThankYou, setDisplayThankYou] = useState(false)

  function changeComponents(whatClicked){
    if(whatClicked.componentClicked == 'UserForm'){
     setDisplayUser(false)
     setDisplayPersonal(true)
    }
    else if(whatClicked.componentClicked == 'PersonalForm' && whatClicked.button == 'continue'){
      setDisplayPersonal(false)
      setDisplayConfirm(true)
    }
    else if(whatClicked.componentClicked == 'PersonalForm' && whatClicked.button == 'back'){
      setDisplayPersonal(false)
      setDisplayUser(true)
    }
    else if(whatClicked.componentClicked == 'Confirm' && whatClicked.button == 'continue'){
      setDisplayConfirm(false)
      setDisplayThankYou(true)
    }
    else if(whatClicked.componentClicked == 'Confirm' && whatClicked.button == 'back'){
      setDisplayConfirm(false)
      setDisplayPersonal(true)
    }
    else{
      setDisplayUser(true)
      setDisplayThankYou(false)
    }
  }

  return (
    <UserContext.Provider value={userDetails}>
      <div id="App">
        {(displayUser == true) ? <UserForm changeComponents={changeComponents}/> : null}
        {(displayPersonal == true) ? <PersonalForm changeComponents={changeComponents}/> : null}
        {(displayConfirm == true) ? <Confirm changeComponents={changeComponents}/> : null}
        {(displayThankYou == true) ? <ThankYou changeComponents={changeComponents}/> : null}
    </div>
    </UserContext.Provider>
  );
}

export default App;