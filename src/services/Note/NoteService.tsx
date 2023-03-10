import { Note } from "../../interfaces/Interfaces";
import makeRequest from "../Service";

const URL = "http://localhost:5000/tasks";

const GetAll = () => {
  return makeRequest(URL, 'GET');
}

const GetById = (id: string) => {
  return makeRequest(`${URL}/${id}`, 'GET');
}

const Post = (note: Note) => {
  return makeRequest(URL, 'POST', note);
}

const Put = (note: Note) => {
  return makeRequest(`${URL}/${note.id}`, 'PUT', note);
}

const Delete = (id: string) => {
  return makeRequest(`${URL}/${id}`, 'DELETE');
}

export { GetAll, GetById, Post, Put, Delete };