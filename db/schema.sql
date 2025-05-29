DROP TABLE IF EXISTS folders CASCADE;
DROP TABLE IF EXISTS files;


CREATE TABLE folders (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
)

CREATE TABLE files (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL, 
  size INTEGER NOT NULL,  
  folder_id INTEGER NOT NULL UNIQUE,
  

  indexes (
    (name, folder_id) [unique]
  )
)