import Head from "next/head"
import Header from "../components/Header"

function AppLayout({children, title}) {
  return (
    
    <>
       <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      
      <main>
        {children}
      </main>
    </>
  )
}

export default AppLayout