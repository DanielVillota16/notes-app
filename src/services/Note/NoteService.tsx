import { Note } from "../../interfaces/Interfaces";
import makeRequest from "../Service";

const URL = "https://ocx2vsatyi.execute-api.us-east-2.amazonaws.com/items";

const GetAll = () => {
  return makeRequest(URL, 'get');
}

const GetById = (id: string) => {
  return makeRequest(`${URL}/${id}`, 'get');
}

const Put = (note: Note) => {
  return makeRequest(URL, 'put', note);
}

const Delete = (id: string) => {
  return makeRequest(`${URL}/${id}`, 'delete');
}

export { GetAll, GetById, Put, Delete };