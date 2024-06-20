import Image from "next/image";
import { Inter } from "next/font/google";
import { LuPartyPopper } from "react-icons/lu";
import Menue from "../components/menue"
import Elements from "@/components/elements";




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
  );
}
