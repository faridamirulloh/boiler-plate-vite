import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.scss';

import User from './user/user';
import {formatMessage} from '../libs/intlHelper';
import {setAppText} from '../stores/actions/appStateAction';
import {getUserData} from '../stores/businesses/userBusiness';

function App() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.appState.text);

  useEffect(() => {
    let counter = 0;

    dispatch(getUserData(1));

    setInterval(() => {
      dispatch(setAppText(`${text} ${counter}`));
      counter += 1;
    }, [1000]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {formatMessage({id: 'app.title'})}
      <br />
      <br />
      {text}
      <br />
      <br />
      <br />
      <br />
      <User />
    </div>
  );
}

export default App;
