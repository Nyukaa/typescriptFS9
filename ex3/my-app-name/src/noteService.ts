import axios from "axios";
import { Note, NewNote } from "./types";

const baseUrl = "http://localhost:3001/notes";
//axios.get<T>() — generic-функция где мы указываем тип возвращаемых данных
//Generic = функция, которой мы сами говорим, с какими типами она работает.
// T = Note[]  значит response.data → Note[]

//мы говорим TypeScript: «Поверь мне, сервер вернёт Note[]» same as response.data as Note[]
export const getAllNotes = () => {
  return axios.get<Note[]>(baseUrl).then((response) => response.data);
};

export const createNote = (object: NewNote) => {
  return axios.post<Note>(baseUrl, object).then((response) => response.data);
};
