import pool from './db';



interface UserRow  {
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}

// Create a User class
export class User {
  // Define properties of the User class
  id: number;
  username: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;

  // Create a constructor that initializes the properties of the User class
  constructor(id: number, username: string, email: string, password: string, created_at: Date, updated_at: Date) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }

}

