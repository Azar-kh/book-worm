import Link from 'next/link'
import BookInfoStyles from '../styles/BookInfo.module.css'
import { BsArrowLeftShort } from 'react-icons/bs'

const BookInfo = ({ bookInfo }) => {
  return (
    <div className={BookInfoStyles.bookinfocontainer}>
      <Link href="/" legacyBehavior>
        <a className={BookInfoStyles.link}>
          <BsArrowLeftShort size={30} />
          Go Back
        </a>
      </Link>
      <div className={BookInfoStyles.details}>
        <div className={BookInfoStyles.first_col}>
          <img
            height={350}
            width={250}
            src={bookInfo.cover}
            className={BookInfoStyles.pic}
          />
          <div className={BookInfoStyles.first_col_info}>
            <h5>Pages: {bookInfo.pages}</h5>
            <h5>Rating: {bookInfo.rating}</h5>
            <h5>Published: {bookInfo.published_date}</h5>
          </div>
        </div>
        <div className={BookInfoStyles.second_col}>
          <div className={BookInfoStyles.second_col_info}>
            <h2>{bookInfo.name}</h2>
            <p>by {bookInfo.authors[0]}</p>
          </div>
          <p>{bookInfo.synopsis}</p>
        </div>
      </div>
    </div>
  )
}

export default BookInfo

export async function getServerSideProps(context) {
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
    `https://hapi-books.p.rapidapi.com/book/${context.params.id}`,
    options,
  )
  const bookInfo = await res.json()

  return {
    props: {
      bookInfo,
    },
  }
}
