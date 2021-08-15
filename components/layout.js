import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Daniel P. Quinn</title>
      </Head>
      <h1><Link href='/'><a>Daniel P. Quinn</a></Link></h1>
      {children}
    </>
  )
}
