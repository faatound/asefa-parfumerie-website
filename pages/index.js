import Image from "next/image";
import { Inter } from "next/font/google";
import { LuPartyPopper } from "react-icons/lu";
import Menue from "../components/menue"




export default function Home() {
  return (
    <>
      <header className="entt">
      <h2 className="titre">Livraison gratuite à partir de 50.000 fcfa  <LuPartyPopper className="icon" /></h2>
      <div>
      <Menue/>
      </div>
      </header>
    </>
  );
}
