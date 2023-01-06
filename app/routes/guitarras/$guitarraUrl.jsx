import { useLoaderData } from "@remix-run/react"
import {getGuitarra} from "~/models/guitarras.sever"
import styles from "~/styles/guitarras.css"


export async function loader({params}){
   const {guitarraUrl} = params
   const guitarra1 = await getGuitarra(guitarraUrl)

   if(guitarra1.data.length === 0){
    throw new Response('',{
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
   }
   return guitarra1
}

/**
 * Toma los datos de la API y devuelve un título y una descripción para la página.
 * @returns Un objeto con el título y la descripción de la página.
 */
export function meta({data}){
  if(!data){
    return{
      title: 'GuitarLA - Guitarra no encontrada',
      description: `Guitarras, venta de guitarras, guitarra no encontrada`
    }
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`

  }
}


/**
 * Devuelve una matriz de objetos que contienen los atributos rel y href de la etiqueta de enlace.
 * @returns Una matriz de objetos.
 */
export function links(){
 return [
    {
      rel: "stylesheet",
      href: styles
    }
  ]
}




function Guitarra() {
  const guitarra = useLoaderData();
  const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes
  return (
    <main className="contenedor guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  )
}

export default Guitarra