import { useEffect, useState } from "react";

import axios from "axios";

const App = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/blog-app/seeuser")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        {users
          ? users.map((user, index) => {
              return (
                <div key={index}>
                  {user.BlogID.map((blog, index) => (
                    <div
                      className="card lg:card-side bg-base-100 shadow-xl bg-white mt-7"
                      key={index}
                    >
                      <figure>
                        <img
                          className="w-128 h-64"
                          src={"http://localhost:3000/Picsave/" + blog.file}
                        />
                      </figure>
                      <div className="card-body text-black">
                        <h1 className="card-title"> ผู้ใช้ {user.username}</h1>
                        <h2 className="card-title">{blog.title}</h2>
                        <p>{blog.description}</p>
                        <div className="card-actions justify-end">
                          <a
                            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="btn btn-primary">Listen</button>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default App;
