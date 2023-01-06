
/**
 * Obtiene los datos de la guitarra de la API y los devuelve como un objeto JSON
 * @returns Una matriz de objetos.
 */
export async function getGuitarras(){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
    return await respuesta.json();
}


/**
 * Obtiene la guitarra de la API y devuelve la respuesta como JSON
 * @param url - La URL de la guitarra que desea recuperar.
 * @returns Un objeto con los datos de la guitarra.
 */
export async function getGuitarra(url){
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    return await respuesta.json()
}