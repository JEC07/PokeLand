import * as React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/notFoundPage.css'

const NotFoundPage: React.FC = () => {
  return (
    <main className='not-found-container' >
      <section className='not-found' >
        <h1 className='not-found__title' >
          Page not found
          <span className='not-found__title-error' >404 error</span>
        </h1>

        <p className='not-found__text' >
          We could not find the page.
        </p>

        <Link
            className='not-found__link'
            to={'/'}
          >
            Back to homepage
        </Link>
      </section>
    </main>
  )
}

export default NotFoundPage
