import '../styles/globals.scss'

//? This will act as high order on every pages
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
