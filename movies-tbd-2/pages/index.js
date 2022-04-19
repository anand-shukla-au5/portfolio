import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Result from '../components/Result'
import request from '../utils/request'
export default function Home({ results }) {
  console.log('in REacg', results)
  return (
    <div>
      <Head>
        <title>TMBD 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Result results={results} />
    </div>
  )
}
export async function getServerSideProps(context) {
  const genre = context.query.genre
  const req = await fetch(`https://api.themoviedb.org/3/${request[genre]?.url || request.fetchTrending.url}`).then((res) => res.json())
  return {
    props: req
  }
}