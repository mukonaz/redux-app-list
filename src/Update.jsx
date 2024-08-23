import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from './UserReducer';

function Update() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.find((user) => user.id === parseInt(id));

    const [uname, setName] = useState(existingUser.name);
    const [uquantity, setQuantity] = useState(existingUser.quantity);
    const [ucomments, setComments] = useState(existingUser.comments);
    const [uphoto, setPhoto] = useState(existingUser.photo);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhoto(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: parseInt(id),
            name: uname,
            quantity: uquantity,
            comments: ucomments,
            photo: uphoto,
        }));
        navigate('/');
    };

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Update List</h3>
                <form onSubmit={handleUpdate}>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Photo:</label>
                        <input className="form-control" type="file" id="formFile" onChange={handleFileChange} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='form-control' placeholder='Enter name'
                            value={uname}
                            onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="col-md-5">
                        <label htmlFor='quantity'>Quantity:</label>
                        <input type='text' name='quantity' className='form-control' placeholder='How many items'
                            value={uquantity}
                            onChange={e => setQuantity(e.target.value)} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor='comments'>Comments:</label>
                        <input type='text' name='comments' className='form-control' placeholder='Leave a comment here'
                            value={ucomments}
                            onChange={e => setComments(e.target.value)} />
                    </div>
                    <br />
                    <button className='btn btn-info'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Update;
