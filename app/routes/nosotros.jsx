import imagen from "../../public/img/nosotros.jpg"
import styles from '~/styles/nosotros.css';

export function meta(){
  return {
    title:'GuitarLA - Sobre Nosotros',
    description:'Venta de guitarras, blog de música'
  }
}
export function Links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
    <div className="contenido">
      <img src={imagen} alt="Imagen sobre nosotros" />
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non quam eleifend, mollis ipsum id, porttitor dolor. Mauris facilisis tempor risus vitae convallis. Etiam justo tortor, vestibulum ut elit sit amet, ultricies placerat nunc. Aenean et tempus eros. Suspendisse et sollicitudin augue. Sed pretium lectus sed lobortis condimentum. Ut ut vehicula orci, sed tincidunt diam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non quam eleifend, mollis ipsum id, porttitor dolor. Mauris facilisis tempor risus vitae convallis. Etiam justo tortor, vestibulum ut elit sit amet, ultricies placerat nunc. Aenean et tempus eros. Suspendisse et sollicitudin augue. Sed pretium lectus sed lobortis condimentum. Ut ut vehicula orci, sed tincidunt diam.</p>
      </div>
    </div>
    </main>
  )
}

export default Nosotros