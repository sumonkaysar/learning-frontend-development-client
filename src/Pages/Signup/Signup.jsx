import { Link } from "react-router-dom";

const Signup = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target);
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
            <input type="email" name="email" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" />
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-primary">Login</button>
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
