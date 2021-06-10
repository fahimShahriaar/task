import React, { useState } from 'react';
import './TaskOne.css';

const TaskOne = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });
    const [inputField, setInputField] = useState(true);

    const handleAddUser = (e) => {
        if (newUser.name && newUser.email) {
            const isInTable = users.find(user => user.email === newUser.email);
            !isInTable && newUser.name && newUser.email && setUsers([...users, newUser]);
            setInputField(true);
        }

        else {
            setInputField(false);
        }

        e.preventDefault();
    }

    const handleDeleteUser = (i) => {
        const updateUsers = [...users];
        updateUsers.splice(i, 1);
        setUsers(updateUsers);
        // console.log('update list', users);
    }

    return (
        <div className="container p-5">
            <h3>Task One</h3>
            <div className="row">
                <div className="col-md-6 shadow p-5 mt-3">
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" onBlur={(e) => { setNewUser({ ...newUser, name: e.target.value }) }} className="form-control form-control-sm w-75 my-2" id="name" placeholder="Enter your name" required />
                        <label htmlFor="email">Email</label>
                        <input type="text" onBlur={(e) => { setNewUser({ ...newUser, email: e.target.value }) }} className="form-control form-control-sm w-75 my-2" id="email" placeholder="Enter you email" required />
                        <button onClick={handleAddUser} className="btn btn-primary btn-sm px-4 mt-2">Add User</button>
                        
                        {!inputField && <small className="alert alert-danger mt-3 w-75 d-block" style={{lineHeight: '5px'}}>Please fill all fields</small> }
                    </form>
                </div>
                <div className="col-md-6 p-5 mt-3">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                users.map((user, i) => <tr key={i}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><button onClick={() => handleDeleteUser(i)} className="btn btn-danger btn-sm px-3">Delete</button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default TaskOne;