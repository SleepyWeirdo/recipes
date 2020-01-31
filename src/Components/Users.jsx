import React from 'react';
import {useParams, useHistory} from 'react-router';

const Users = () => {
  const history = useHistory();
  const {name} = useParams();
  console.log(history);
  return (
    <>
      Hello user {name}!
    </>
  );
};

export default Users;
