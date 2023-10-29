import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../configs/firebase";

export default function HomePages() {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      await getDocs(collection(db, "recipe")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data,
          id: doc.id,
        }));
        setRecipe(newData);
        console.log(newData);
      });
    };
    fetchPost();
  }, []);
  return (
    <>
      <h2>Main Home Pages</h2>
      <Link to="/login">Login</Link>
      <Link to="/add-recipes">Add Recipe</Link>
    </>
  );
}
