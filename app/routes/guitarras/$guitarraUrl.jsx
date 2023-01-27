import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.sever";

/**
 * Es una función que toma un parámetro llamado params, que es un objeto que contiene una propiedad
 * llamada guitarraUrl. Luego usa la propiedad guitarraUrl para realizar una solicitud a la API y
 * devuelve la respuesta.
 * @returns El objeto guitarra1 está siendo devuelto.
 */
export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra1 = await getGuitarra(guitarraUrl);

  if (guitarra1.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
    });
  }
  return guitarra1;
}

/**
 * Devuelve un objeto con una propiedad de título y descripción.
 * @returns Un objeto con el título y la descripción de la página.
 */
export function meta({ data }) {
  if (!data) {
    return {
      title: "GuitarLA - Guitarra no encontrada",
      description: `Guitarras, venta de guitarras, guitarra no encontrada`,
    };
  }

  return {
    title: `GuitarLA - ${data.data[0].attributes.nombre}`,
    description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}`,
  };
}

function Guitarra() {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
        <form className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select id="cantidad">
            <option value="">-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
}

export default Guitarra;
