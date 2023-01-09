import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/listado-guitarras";
import { getGuitarras } from "~/models/guitarras.sever";


export function meta() {
  return {
    title: "GuitarLA - Tienda de Guitarras",
    description: "GutiarLA - Nuestra colección de guitarras",
  };
}



/**
 * Es una función asíncrona que devuelve una promesa que se resuelve en una serie de objetos de
 * guitarra.
 * @returns Los datos de la función getGuitarras().
 */
export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data;
}

function Tienda() {
  const guitarras = useLoaderData();
  return <ListadoGuitarras guitarras={guitarras} />;
}

export default Tienda;
