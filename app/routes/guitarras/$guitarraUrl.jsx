import { useLoaderData } from "@remix-run/react"
import {getGuitarra} from "~/models/guitarras.sever"
import styles from "~/styles/guitarras.css"

export function meta({data}){
  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`

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


export async function loader({params}){
   const {guitarraUrl} = params
   const guitarra1 = await getGuitarra(guitarraUrl)
   return guitarra1
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