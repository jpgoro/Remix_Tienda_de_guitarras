
/**
 * Obtiene las publicaciones de la API y las devuelve como un objeto JSON
 * @returns Una matriz de objetos.
 */
export async function getPosts(){
    const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
    return await respuesta.json();
}

/**
 * Obtiene la publicación de la API y la devuelve como un objeto JSON
 * @param url - La URL de la publicación que desea recuperar.
 * @returns Un objeto con los datos de la publicación.
 */
export async function getPost(url){
    const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}
