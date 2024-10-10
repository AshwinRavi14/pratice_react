import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const [displayCount, setDisplayCount] = useState(10); 

  const get_allData = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/users');
      setUsers(data);  
      console.log(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    get_allData();
  }, []);

  const handleDropdownChange = (e) => {
    setDisplayCount((e.target.value));
  };

  return (
    <div>
      <h1>User Information</h1>
      <div className='Show'>
        <label>Show Users: </label>
        <select value={displayCount} onChange={handleDropdownChange}>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </select>
      </div>
      {users.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, displayCount).map((user, index) => (
              <tr key={index}>
                <td>{user.name}{index}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.mobile}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nothing to Show</p>
      )}
    </div>
  );
};

export default FetchData;
