import { Outlet } from "@remix-run/react";

// import { getPosts } from "~/models/posts.server";
import styles from "~/styles/blog.css";

// export async function loader() {
//   const posts = await getPosts();
//   return posts.data;
// }

// export function meta(){
//   return {
//       title: 'GuitarLA - Nuestro Blog',
//       description: 'GuitarLA - Blog de música y venta de guitarras'
//   }
// }

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

function Blog() {


  return (
    <main className="contenedor">
     
    <Outlet />
    </main>
  );
}

export default Blog;
