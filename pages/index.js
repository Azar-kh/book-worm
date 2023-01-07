import Head from 'next/head'
import BookList from '../components/BookList'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home({ books }) {
  return (
    <div className={styles.main}>
      <Head>
        <title>Book Worm</title>
        <meta name="description" content="Check the awarded book of the year" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <BookList books={books} />
    </div>
  )
}

export async function getStaticProps() {
  const key = process.env.API_KEY
  const url = process.env.URL

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': key,
      'X-RapidAPI-Host': url,
    },
  }

  const res = await fetch(
    'https://hapi-books.p.rapidapi.com/week/horror',
    options,
  )
  const data = await res.json()
  const books = data.slice(4, 25)

  return {
    props: {
      books,
    },
  }
}
