import React from 'react';
import {useSelector} from 'react-redux';

function User() {
  const data = useSelector((state) => state.userState);

  return (
    <div>
      User data:
      <br />
      id: {data.id}
      <br />
      name: {data.firstName} {data.lastName}
      <br />
      email: {data.email}
      <br />
      {data.avatar ? <img alt="avatar" src={data.avatar} /> : null}
    </div>
  );
}

export default User;
