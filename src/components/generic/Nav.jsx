import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebaseConfig from "../../../firebaseConfig";

export default function Nav() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="flex ml-auto pt-4">
      <ul className="flex flex-row list-none items-center text-sm ml-0">
        <Link to="/about">
          <li className="text-l mr-2 md:mr-4 hover:text-blue-400">About</li>
        </Link>
        <Link to="/pricing">
          <li className="text-l mr-2 md:mr-4 hover:text-blue-400">Pricing</li>
        </Link>
        {user ? (
          <Link to={"/myaccount"}>
            <li className="cursor-pointer text-l md:mr-4 border-solid border-orange-400 border-2 rounded-md px-1 py-1 hover:bg-orange-200">
              My Account
            </li>
          </Link>
        ) : (
          <Link to="/login">
            <li className="text-l border-solid border-orange-400 border-2 rounded-md px-1 py-1 hover:bg-orange-200">
              Login
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
}
