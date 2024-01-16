import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore";
import firebaseConfig from "../../../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { useContext, useState, useEffect } from "react";
import { useFetch } from "../../Hooks";
import { IdContext } from "../../IdContext";
import GoogleMapSection from "./GoogleMapSection";
import { getAuth } from "firebase/auth";

export default function Details() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  const [user, setUser] = useState(auth.currentUser);
  const [id, setId] = useContext(IdContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imgSrc, setImgSrc] = useState("/heart-regular.svg");
  let favoriteList = [];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  async function getFavoriteList() {
    const querySnapshot = await getDocs(collection(db, user.uid));

    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().favoriteList}`);

      favoriteList = [...doc.data().favoriteList];
      setIsFavorite(favoriteList.includes(id) ? true : false);
      setImgSrc(isFavorite ? "/heart-solid.svg" : "/heart-regular.svg");
    });
  }

  getFavoriteList();

  async function handleAddFavorite() {
    const userDocRef = doc(db, user.uid, "1");

    const docSnapshot = await getDoc(userDocRef);

    if (docSnapshot.exists()) {
      try {
        await updateDoc(userDocRef, {
          favoriteList: arrayUnion(id),
        });
        console.log("Document updated successfully!");
        setImgSrc("/heart-solid.svg");
      } catch (e) {
        console.error("Error updating document: ", e);
      }
    } else {
      try {
        await addDoc(collection(db, user.uid), {
          favoriteList: [id],
        });
        console.log("Document created with favoriteList: ", [id]);
        setImgSrc("/heart-solid.svg");
      } catch (e) {
        console.error("Error creating document: ", e);
      }
    }
  }

  const url = `https://api.citybik.es/v2/networks/${id}`;
  const { data: network, loading, error } = useFetch(url);

  if (loading) {
    return (
      <div>
        <img
          className="mx-auto mt-20 h-80"
          src="/loading.gif"
          alt="loading-animation"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <img
          className="mx-auto mt-20 h-80"
          src="/error.gif"
          alt="loading-animation"
        />
      </div>
    );
  }

  return (
    <div>
      <div className="px-10 bg-white shadow-md rounded-md mx-10 p-6 my-8">
        <img
          src={imgSrc}
          alt="fav-icon"
          className=" w-8 "
          onClick={handleAddFavorite}
        />
        <img
          src="/logo.jpeg"
          alt="Icon"
          className="w-24 mx-auto mb-4 rounded-sm"
        />

        <h2 className="text-xl font-bold mb-2">
          Name : {network.network.name}
        </h2>

        <p className="text-gray-600 mb-2">
          Companies : {network.network.company}
        </p>

        <p className="text-gray-600 mb-2">
          Country : {network.network.location.country}
        </p>

        <p className="text-gray-600 mb-2">
          City : {network.network.location.city}
        </p>

        <p className="text-gray-600">
          Number of Stations : {network.network.stations.length}
        </p>
      </div>
      <GoogleMapSection
        lat={network.network.location.latitude}
        lng={network.network.location.longitude}
      />
    </div>
  );
}
