/**
 * Obtiene las publicaciones de la API y las devuelve como un objeto JSON
 * @returns Una matriz de objetos.
 */
export async function getPosts(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    return await respuesta.json();
}
