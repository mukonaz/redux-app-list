import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser, setUsers } from './UserReducer';

function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:3000/users');
                const data = await response.json();
                dispatch(setUsers(data));
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers();
    }, [dispatch]);

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3000/users/${id}`, {
                method: 'DELETE',
            });
            dispatch(deleteUser({ id }));
        } catch (error) {
            console.error('Failed to delete user:', error);
        }
    };

    return (
        <div className='container1'>
            <h2>Shopping List</h2>
            <Link to="/Create" className='btn btn-success my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Comment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>
                                {user.photo && <img src={user.photo} alt="User" width="50" height="50" />}
                            </td>
                            <td>{user.name}</td>
                            <td>{user.quantity}</td>
                            <td>{user.comments}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                                <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                                <button className='btn btn-sm btn-info ms-2'>Share</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;
