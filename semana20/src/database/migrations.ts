import { connection } from "../index"

connection
   .raw(`
      CREATE TABLE IF NOT EXISTS "S20-User" (
         "id" varchar(255) UNIQUE PRIMARY KEY,
         "name" varchar(255),
         "email" varchar(255) UNIQUE,
         "password" varchar(255)
      );
      
      CREATE TABLE IF NOT EXISTS "S20-Post" (
         "id" varchar(255) UNIQUE PRIMARY KEY,
         "photo" varchar(255),
         "description" varchar(255),
         "type" ENUM ('normal', 'event'),
         "created_at" timestamp,
         "authorId" varchar(255)
      );
      
      CREATE TABLE IF NOT EXISTS "S20-friendship" (
         "id_followed" varchar(255),
         "id_following" varchar(255)
      );
      
      CREATE TABLE IF NOT EXISTS "S20-liked" (
         "id_user" varchar(255),
         "id_post" varchar(255)
      );
      
      CREATE TABLE IF NOT EXISTS "S20-comments" (
         "id_post" varchar(255),
         "id_user" varchar(255),
         "description" text
      );
      
      ALTER TABLE "S20-User" ADD FOREIGN KEY ("id") REFERENCES "S20-Post" ("authorId");
      
      ALTER TABLE "S20-User" ADD FOREIGN KEY ("id") REFERENCES "S20-friendship" ("id_followed");
      
      ALTER TABLE "S20-User" ADD FOREIGN KEY ("id") REFERENCES "S20-friendship" ("id_following");
      
      ALTER TABLE "S20-User" ADD FOREIGN KEY ("id") REFERENCES "S20-liked" ("id_user");
      
      ALTER TABLE "S20-Post" ADD FOREIGN KEY ("id") REFERENCES "S20-liked" ("id_post");
      
      ALTER TABLE "S20-Post" ADD FOREIGN KEY ("id") REFERENCES "S20-comments" ("id_post");
      
      ALTER TABLE "S20-User" ADD FOREIGN KEY ("id") REFERENCES "S20-comments" ("id_user");
      )
   `)
   .then(console.log)
   .catch(console.log)