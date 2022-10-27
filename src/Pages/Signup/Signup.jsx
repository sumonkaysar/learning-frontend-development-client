import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import {toast} from 'react-hot-toast';

const Signup = () => {
  const {createUser, updateUserData, verifyEmail} = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // handle signup submit
  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password && name && photoURL) {
      createUser({email, password})
      .then(({user}) => {
        console.log(user);
        handleUpdateUser({displayName: name, photoURL});
        handleVerifyEmail();
        form.reset();
        setTimeout(() => navigate('/login'), 4000);
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      });
    }else{
      setError("No input can be blank");
    }
  }

  // Email verify alert
  const handleVerifyEmail = () => {
    verifyEmail()
    .then(() => {
      toast.success('Email verification link sent to your email address. Please verify your email address. (Check your spam messages also)');
    })
    .catch(err => console.log(err));
  }

  // update user name and photo
  const handleUpdateUser = (data) => {
    updateUserData(data)
    .then(() => {})
    .catch(err => console.error(err));
  }

  return (
    <div className="container mx-auto pb-5">
      <h3 className="text-center text-3xl font-bold mb-5">Signup</h3>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input type="text" name="name" placeholder="full name" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photoURL" placeholder="photo url" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          </div>
          <p className="text-error">{error}</p>
          <div className="form-control mt-2">
            <button className="btn btn-primary">Signup</button>
          </div>
        </form>
      </div>
      <div className="text-center mt-3">
        <p>Already have an account? <Link className="link" to='/login'>Login Here</Link></p>
      </div>
    </div>
  );
}

export default Signup;
