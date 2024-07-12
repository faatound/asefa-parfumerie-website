import Image from "next/image";
import { Inter } from "next/font/google";
import { LuPartyPopper } from "react-icons/lu";
import Menue from "../components/menue"
import Elements from "@/components/elements";
import Link from 'next/link';
import React, { useState } from 'react';


// const HomePage = () => {
//   const [userRating, setUserRating] = useState(0);

//   const handleRatingChange = (rating) => {
//     setUserRating(rating);
//     console.log('User rating:', rating);
//   };

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Noter ce produit</h1>
//       <StarRating onRatingChange={handleRatingChange} />
//       <p className="mt-4">Votre note : {userRating}</p>
//     </div>
//   );
// };



 export default function Home() {
   return (
<>
      <header className="entt">
         <h2 className="titre">Livraison gratuite à partir de 50.000 fcfa  <LuPartyPopper className="icon" /></h2>
         </header>
       <div>
      <Menue/>
     </div>
       <div >
       <h2 className="soutt">NOS BEST-SELLERS</h2>
       </div>
      <div>
      <Elements/>
      </div>
         <div className="boutons">
         <button><a>1</a></button>
         <button><a>2</a></button>
         <button><a>3</a></button>
       </div>
     </>

 )};
