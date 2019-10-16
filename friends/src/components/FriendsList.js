import React, {useState, useEffect} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import AddFriend from './AddFriend';
import Friend from './Friend';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
        .get('/friends')
        .then(res => setFriends(res.data))
        .catch(err => console.log(err.response));
    });

    return(
        <div>
            <AddFriend />
            <h1>Current Friends</h1>
            {friends.map(friend => (
                <div key={friend.id}>
                    <Friend friend={friend} />
                </div>
            ))}
        </div>
    )
}

export default FriendsList;