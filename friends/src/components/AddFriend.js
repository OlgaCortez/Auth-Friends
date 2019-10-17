import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const AddFriend = () => {
  const [newFriend, setNewFriend] = useState({name: '', age: '', email: ''});

    const handleChanges = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        });
    };

    const add = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', newFriend)
        .then(res => { 
            console.log(e.target)
            setNewFriend({
                ...newFriend,
                name: '',
                age: '',
                email: ''
            })
        })
        .catch(err => console.log(err));
    };

        return (
                <form onSubmit={add}>
                    <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newFriend.name}
                    onChange={handleChanges}
                    />

                    <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={newFriend.age}
                    onChange={handleChanges}
                    />

                    <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={newFriend.email}
                    onChange={handleChanges}
                    />

                    <button type="submit">Add New Friend</button>
                </form>
        );
};

export default AddFriend;