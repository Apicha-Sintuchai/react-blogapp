import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

interface Blog {
  _id: string;
  title: string;
  description: string;
  file: string;
  __v: number;
}

interface User {
  _id: string;
  username: string;
  BlogID: Blog[];
  __v: number;
}

const Personnaluser = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  const handleClick = async() => {
   await localStorage.removeItem("token");
   await localStorage.removeItem("username");
   await localStorage.removeItem("password");
   await  localStorage.removeItem("_id");
  };


  useEffect(() => {
    axios
      .get<User>("http://localhost:3000/blog-app/Seeusers/" + id)
      .then((response) => setUser(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="bg-base-100 h-screen text-yellow-50">
      <div className="navbar bg-base-300">
        <div className="flex-1 ">
          <a className="btn btn-ghost text-xl">Your post</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to={'/'} onClick={handleClick}>Signout</Link>
                </li>
             
            </ul>
        </div>
      </div>

      <div className="flex mt-7 gap-8">
        {user ? (
          <>
            {user.BlogID.map((blog) => (
              <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="w-128 h-64"
                    src={"http://localhost:3000/Picsave/" + blog.file}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{blog.title}!</h2>
                  <p>{blog.description}</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};
/*

<div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>


*/
export default Personnaluser;
