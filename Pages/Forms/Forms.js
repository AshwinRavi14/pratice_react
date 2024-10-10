import React from 'react'
//import UserForm from '../UserForm';
//import EnhancedUserForm from '../EnhancedUserForm';
//import Count from '../Count';
import FetchData from '../../Components/FetchData/fetchData.js';
import Crud from '../../Components/Crud/Crud.js';

const Forms = () => {
  return (
    <div className='Forms'>
        {/* <Count/>
        <UserForm />
        <EnhancedUserForm /> 
        <FetchData/>*/}
        <Crud />
    </div>
  )
}

export default Forms