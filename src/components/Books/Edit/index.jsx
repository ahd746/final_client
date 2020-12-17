import React, { useEffect, useState, useContext } from 'react';
import Form from '../Form';
import Header from '../../shared/Header';
import { GlobalStoreContext } from '../../shared/Globals';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { NotificationContext } from '../../shared/Notifications';

const Edit = () => {
  const { id } = useParams();
  const [preload, setPreload] = useState({});
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);
  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/books/${id}`)
    .then(({ data }) => {
      setPreload(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the Book: ${error.message}`
      });
    });
  }, [id, globalStore,setNotification]);

  return (
    <>
      <Header title="Books">
        Hi I'm an editing man-child.
      </Header>

      <Container>
        <Form endpoint="books/update" preload={preload}/>
      </Container>
    </>
  );
}
 
export default Edit;