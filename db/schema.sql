DROP DATABASE IF EXISTS one_page_manDB;
CREATE database one_page_manDB;

USE one_page_manDB;

CREATE TABLE customer (
  user_id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  title VARCHAR(70),
  header_image BLOB,
  block_1_image BLOB,
  block_1_text TEXT,
  block_2_image BLOB,
  block_2_text TEXT,
  block_3_image BLOB,
  block_3_text TEXT, 
  PRIMARY KEY (user_id)
);

CREATE TABLE user_contact (
  FOREIGN KEY (user_id) REFERENCES customer(user_id),
  e_mail VARCHAR(100),
  phone VARCHAR(15),
  place_location VARCHAR(100),
)

