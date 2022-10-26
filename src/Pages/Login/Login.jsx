import { Link } from "react-router-dom";

const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target);
  }

  return (
    <div className="container mx-auto py-5">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="text" placeholder="email" className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" placeholder="password" className="input input-bordered" />
          </div>
          <div className="form-control mt-2">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
      <div className="text-center mt-3">
        <p>Don't have an account? <Link className="link" to='/signup'>Signup Here</Link></p>
      </div>
    </div>
  );
}

export default Login;
