import { useLoaderData } from "@remix-run/react";
import ListadoGuitarras from "~/components/listado-guitarras";
import { getGuitarras } from "~/models/guitarras.sever"
import styles from "~/styles/guitarras.css"

export function meta(){
  return {
    title: 'GuitarLA - Tienda de Guitarras',
    description: 'GutiarLA - Nuestra colección de guitarras'
  }
}

export function links(){
  return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}

/**
 * Es una función asíncrona que devuelve una promesa que se resuelve en una serie de objetos de
 * guitarra.
 * @returns Los datos de la función getGuitarras().
 */
export async function loader(){
  const guitarras = await getGuitarras()
  return guitarras.data
}

function Tienda() {
  const guitarras = useLoaderData();
  return (
    <main className="contenedor">
      
      <ListadoGuitarras 
      guitarras={guitarras}
      />
    </main>
  )
}

export default Tienda