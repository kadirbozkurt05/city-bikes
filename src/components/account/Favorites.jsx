import { useEffect, useState } from "react";
import { useFetch } from "../../Hooks";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "../../../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

export default function Favorites() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  const [user, setUser] = useState(auth.currentUser);
  const [favoriteNetworks, setFavoriteNetworks] = useState([]);

  const url = "https://api.citybik.es/v2/networks/";

  let favoriteList = [];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  async function getFavoriteList() {
    if (user) {
      const querySnapshot = await getDocs(collection(db, user.uid));

      querySnapshot.forEach((doc) => {
        favoriteList = [...doc.data().favoriteList];
      });
    }

    if (data && favoriteList.length > 0) {
      const filteredList = data.networks.filter((network) =>
        favoriteList.includes(network.id)
      );
      setFavoriteNetworks(filteredList);
    }
  }
  getFavoriteList();

  const { data, loading, error } = useFetch(url);

  return (
    <div>
      <h1>My Favorites</h1>
      <div className=" md:grid-cols-3 grid-cols-1 grid">
        {favoriteNetworks.length > 0 ? (
          favoriteNetworks.map((network) => (
            <div
              className="px-10 bg-white shadow-md rounded-md mx-10 p-6 my-8"
              key={network.id}
            >
              <img
                src="/logo.jpeg"
                alt="Icon"
                className="w-24 mx-auto mb-4 rounded-sm"
              />

              <h2 className="text-xl font-bold mb-2">Name : {network.name}</h2>

              <p className="text-gray-600 mb-2">
                Companies : {network.company}
              </p>

              <p className="text-gray-600 mb-2">
                Country : {network.location.country}
              </p>

              <p className="text-gray-600 mb-2">
                City : {network.location.city}
              </p>
            </div>
          ))
        ) : (
          <div>NO FAVORITE NETWORKS</div>
        )}
      </div>
    </div>
  );
}
