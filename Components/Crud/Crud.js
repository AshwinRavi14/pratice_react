import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../FireBase/index';  
import Button from '../Button/Button';
import './Crud.css'

const Crud = () => {
  const [users, setUsers] = useState([]);  
  const [newUser, setNewUser] = useState({
    name: '',
    age: '',
    gender: '',
    mobile: '',
    email: '',
    address: ''
  });  
  const [editUserId, setEditUserId] = useState(null);  

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const querySnapshot = await getDocs(collection(db, 'users'));
    const usersList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setUsers(usersList);
  };

  
  const addUser = async () => {
    await addDoc(collection(db, 'users'), newUser);
    setNewUser({
      name: '',
      age: '',
      gender: '',
      mobile: '',
      email: '',
      address: ''
    });
    fetchUsers();  
  };

  const updateUser = async (userId) => {
    const userDoc = doc(db, 'users', userId);
    await updateDoc(userDoc, newUser);
    setEditUserId(null);
    setNewUser({
      name: '',
      age: '',
      gender: '',
      mobile: '',
      email: '',
      address: ''
    });
    fetchUsers();  
  };

  const deleteUser = async (userId) => {
    const userDoc = doc(db, 'users', userId);
    await deleteDoc(userDoc);
    fetchUsers();  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editUserId) {
      updateUser(editUserId);
    } else {
      addUser();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const startEditUser = (user) => {
    setNewUser(user);
    setEditUserId(user.id);
  };

  return (
    <div className='Add_New_User'> 
      <h1>Add New User Information</h1>
      <form onSubmit={handleSubmit} className='AddUser'>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="number"
          name="age"
          value={newUser.age}
          onChange={handleInputChange}
          placeholder="Age"
          required
        />
        <input
          type="text"
          name="gender"
          value={newUser.gender}
          onChange={handleInputChange}
          placeholder="Gender"
          required
        />
        <input
          type="text"
          name="mobile"
          value={newUser.mobile}
          onChange={handleInputChange}
          placeholder="Mobile"
          required
        />
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="address"
          value={newUser.address}
          onChange={handleInputChange}
          placeholder="Address"
          required
        />
        <Button value={editUserId ? 'Update User' : 'Add User'} />
      </form>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td>
                <Button color="skyblue" value="Edit" onClick={() => startEditUser(user)}/>
                <Button color="Red" value="Delete" onClick={() => deleteUser(user.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Crud;
