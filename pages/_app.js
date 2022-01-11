import '../styles/globals.css'
import Layout from '../components/Layout'
import Router from 'next/router'
import {useState} from 'react';
import nprogress from 'nprogress';
import Loader from '../components/Loader';
function MyApp({ Component, pageProps }) {
  const [loading,setLoading] = useState();

  Router.events.on('routeChangeStart',(url)=>{
    setLoading(true)
    nprogress.start()
  })
  Router.events.on('routeChangeComplete',(url)=>{
    setLoading(false)
    nprogress.done()
  })
  return (
    <>
      {loading?<Loader/>:
      <Layout>
        <Component {...pageProps} />
      </Layout>
  }
    </>
  )
}

export default MyApp
