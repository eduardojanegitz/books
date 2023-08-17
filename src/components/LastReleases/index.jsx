import React from 'react'
import { books } from '../Search/data'

const LastReleases = () => {
  return (
    <div>

        <h2>ÚLTIMOS LANÇAMENTOS</h2>
        {
            books.map(book => (
                <img src={book.src} alt={book.nome} />
            ))
        }
    </div>
    )
}

export default LastReleases;