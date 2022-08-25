import React, { useState, useEffect } from 'react';
import Loader from './Loader/Loader';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Books() {
  const fetchBooks = () => {
    return axios.get('https://in3.dev/knygos/');
  };

  const { isLoading, isFetching, data, isError, error } = useQuery(
    ['books'],
    fetchBooks,
    {
      select: (data) => {
        const books = data.data.map((item) => ({
          id: item.id,
          type: item.type,
          img: item.img,
          author: item.author,
          title: item.title,
          price: item.price,
          time: new Date(item.time).toLocaleDateString(),
        }));
        return books;
      },
    }
  );

  if (isLoading || isFetching) {
    return <Loader />;
  }

  if (isError) {
    return (
      <p>
        Please try again: <span>{error}</span>
      </p>
    );
  }

  return (
    <ul className="book-list">
      {data?.map((book) => (
        <li key={book.id} className="book">
          <div className="book__img-container">
            <img src={book.img} alt={book.title} />
          </div>

          <div className="book__details">
            <p className="book__details--title">{book.title}</p>
            <i className="book__details--author">{book.author}</i>

            <div className="book__date">
              <p className="book__date--price">{book.price}&euro;</p>
              <p className="book__date--time">{book.time}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Books;
