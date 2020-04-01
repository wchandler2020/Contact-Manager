import axios from "axios";
import { GET_CONTACTS } from "./type";

//GET LEADS
export const getContacts = () => dispatch => {
  axios
    .get("/api/contacts/")
    .then(res => {
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// DELETE a contact
export const deleteContact = id => dispatch => {
  axios
    .delete(`/api/contacts/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_CONTACT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};
