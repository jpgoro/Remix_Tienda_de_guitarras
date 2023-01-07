import { useLoaderData } from "@remix-run/react";
import {formatearFecha} from "~/utils/helpers"
import {getPost} from "~/models/posts.server"
import styles from "~/styles/blog.css"

export function meta({data}){
    if(!data){
      return{
        title: 'GuitarLA - Entrada no encontrada',
        description: `Guitarras, venta de guitarras, entrada no encontrada`
      }
    }
  
    return {
      title: `GuitarLA - ${data[0].attributes.titulo}`,
      description: `Guitarras, venta de guitarras, entrada ${data[0].attributes.titulo}`
  
    }
  }

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}

/**
 * Toma un parámetro llamado params, que es un objeto que contiene una propiedad llamada postUrl, que
 * es una cadena. Luego llama a la función getPost, que devuelve una promesa que se resuelve en un
 * objeto con una propiedad llamada datos, que es una matriz. Si la matriz está vacía, arroja un objeto
 * de respuesta con un estado de 404 y un texto de estado de "Entrada no encontrada". De lo contrario,
 * devuelve la matriz.
 * @returns Los datos de la publicación
 */
export async function loader({params}){
    const {postUrl}=params;
    const post = await getPost(postUrl);
    if(post.data.length===0){
        throw new Response('',{
            status: 404,
            statusText: 'Entrada no encontrada'
        })
    }
    return post.data
}
export default function Post() {
    const post = useLoaderData();
    const{titulo, contenido, imagen, publishedAt}=post[0]?.attributes;
  return (
    <article className="contenedor post">
        <img
        className="imagen"
        src={imagen?.data?.attributes?.url}
        alt={`Imagen de  blog ${titulo}`}
      />
      <div className="contenido">
        <h3>{titulo}</h3>
        <p className="fecha">{formatearFecha(publishedAt)}</p>
        <p className="texto">{contenido}</p>
        
      </div>
    </article>
  )
}
