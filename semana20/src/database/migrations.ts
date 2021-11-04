import dotenv from 'dotenv'
import knex, { Knex } from 'knex'

dotenv.config()

export const connection: Knex = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: 3306,
      multipleStatements: true
   }
})

connection
   .raw(`
   CREATE TABLE S20User (
      id varchar(255) UNIQUE PRIMARY KEY NOT NULL,
      name varchar(255) NOT NULL,
      email varchar(255) UNIQUE NOT NULL,
      password varchar(255) NOT NULL
    );
    
    CREATE TABLE S20Post (
      id varchar(255) UNIQUE PRIMARY KEY NOT NULL,
      photo varchar(255) NOT NULL,
      description varchar(255) NOT NULL,
      type ENUM ('normal', 'event') NOT NULL,
      created_at timestamp,
      authorId varchar(255),
      foreign key (authorId) references S20User(id)
    );
    
    CREATE TABLE S20Friendship (
      id_followed varchar(255) NOT NULL,
      id_following varchar(255) NOT NULL,
      foreign key (id_followed) references S20User(id),
      foreign key (id_following) references S20User(id)
    );
    
    CREATE TABLE S20Liked (
      id_user varchar(255) NOT NULL,
      id_post varchar(255) NOT NULL,
      foreign key (id_user) references S20User(id),
      foreign key (id_post) references S20Post(id)
    );
    
    CREATE TABLE S20Comments (
      id_post varchar(255) NOT NULL,
      id_user varchar(255) NOT NULL,
      comment text NOT NULL,
      foreign key (id_post) references S20Post(id),
      foreign key (id_user) references S20User(id)
    );

   `)
   .then(() => connection.destroy())
   .then(console.log)
   .catch(console.log)