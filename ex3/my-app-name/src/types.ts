export interface Note {
  id: string;
  content: string;
}
// same as
// export type Note {
//   id: string;
//   content: string;
// }
export type NewNote = Omit<Note, "id">;

// INTERFACE merging example
// interface User {
//   name: string;
// }
// interface User {
//   age: number;
// }
// const u: User = { name: 'Alice', age: 25 }; // OK

// but with TYPE
// type User = { name: string };
// type User = { age: number }; // ❌ Ошибка: Type 'User' already declared
