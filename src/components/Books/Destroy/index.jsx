import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

const Destroy = () => {
  const { id } = useParams();
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.post(`${globalStore.REACT_APP_ENDPOINT}/books/destroy`, { _id: id })
    .then(() => {
      setNotification(`Book was destroyed successfully.`);
    })
    .catch(error => {
      setNotification(`Couldn't destroy the selected book due to an error: ${error.message}`);
    });
  }, [globalStore, id, setNotification]);

  return <Redirect to="/"/>;
}
 
export default Destroy;