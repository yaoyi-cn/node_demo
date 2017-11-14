import React from 'react';
import { connect } from 'dva';
import UserList from '../components/UserList';

const Users = ({ dispatch, users }) => {
  function handleDelete(id) {
    dispatch({
      type: 'users/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Users</h2>
      <ProductList onDelete={handleDelete} users={users} />
    </div>
  );
};

// export default Products;
export default connect(({ users }) => ({
  users,
}))(Users);
