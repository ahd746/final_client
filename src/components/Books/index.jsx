import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import Axios from 'axios';
import Header from '../shared/Header';
import { GlobalStoreContext } from '../shared/Globals';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Books = () => {
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {    
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/books`)
    .then(({ data }) => {
      setBooks(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the books: ${error.message}`
      });
    });
  }, [globalStore, setNotification]);

  return (
    <>
      <Header title="Books"/>

      <Container>
        {books && books.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book, i) => (
                <tr key={i}>
                  <td>
                    {book.title}
                  </td>
                  
                  <td>
                    {book.author}
                  </td>

                  <td>
                    <Link to={`/edit/${book._id}`}>
                      edit
                    </Link>
                    &nbsp;|&nbsp;
                    <Link to={`/destroy/${book._id}`}>
                      delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </Container>
    </>
  );
}
export default Books;