import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email,setEmail]=useState('');
    // const [success,setSuccess] = useState(false);
    const {token} = useAuth();
    // console.log(token);
    // console.log(email);
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit = (e) =>{
        // console.log(email);
        const user= {email};
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'authorization': `Bearer ${token}`,
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data.modifiedCount);

            if(data.modifiedCount===1){
                // setSuccess(true);
                console.log(data.modifiedCount);
                alert('make admin successfully')
                
            }
          
         
        }
            )
        e.preventDefault();
    }
    return (
        <div className="makeAdmin">
           <div className="container">
           <h3>Make an Admin</h3>
            <form onSubmit={handleAdminSubmit}>
            <input style={{width:'50%',margin:"auto"}} label="Email" type="email" variant="standard" onBlur={handleOnBlur} />
            <Button type="submit">Make Admin</Button>

            </form>
            {/* {
                    success && (<Alert severity="success">Amin added successfully!</Alert>) 
                } */}
           </div>
        </div>
    );
};

export default MakeAdmin;