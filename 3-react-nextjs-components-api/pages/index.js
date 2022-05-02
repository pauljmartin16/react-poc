import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h3>NextJS Test Application</h3>
      <div className='row'>        
        <h3>Client-Side Renderings</h3>
        <Link href="/csr/speakers-csr" passHref prefetch={false} >
          <button className='btn btn-primary col-2' style={{ "marginRight": "30px" }} >Open Speakers CSR Page</button>
        </Link>
        <Link href="/csr/houses-csr" passHref prefetch={false} >
          <button className='btn btn-primary col-2' style={{ "marginRight": "30px" }} >Open Houses CSR Page</button>
        </Link>
      </div>

<br/>
      <div className='row'>
        <h3>Server-Side Renderings</h3>
        <Link href="/ssr/speakers-ssr" passHref prefetch={false}>
          <button className='btn btn-secondary col-2' style={{ "marginRight": "30px" }}>Open Speakers SSR Page</button>
        </Link>
        <Link href="/ssr/houses-ssr" passHref prefetch={false}>
          <button className='btn btn-secondary col-2' style={{ "marginRight": "30px" }}>Open Houses SSR Page</button>
        </Link>
      </div>

      <br/>
      <div className='row'>
        <h3>Static-Site Generation</h3>
        <Link href="/ssg/speakers-ssg" passHref prefetch={false}>
          <button className='btn btn-secondary col-2' style={{ "marginRight": "30px", "background": "green" }}>Open Speakers SSG Page</button>
        </Link>
        <Link href="/ssg/houses-ssg" passHref prefetch={false}>
          <button className='btn btn-secondary col-2' style={{ "marginRight": "30px", "background": "green" }}>Open Houses SSG Page</button>
        </Link>
      </div>
    </div>
  )
}
