

INSERT INTO customer (first_name, last_name, title, header_image, block_1_image, block_1_text, block_2_image, block_2_text, block_3_image, block_3_text,)
VALUES ("John", "Smith", "Mega-Page", (SELECT * FROM OPENROWSET(BULK N'C:\Users\bigji\Bootcamp\NODE\ClassActivities\Project2\project2\db\headerimg.jpg', SINGLE_BLOB) as T1), (SELECT * FROM OPENROWSET(BULK N'C:\Users\bigji\Bootcamp\NODE\ClassActivities\Project2\project2\db\block1img.jpg', SINGLE_BLOB) as T1), "Mermaids are all the rage with beer drinkers", (SELECT * FROM OPENROWSET(BULK N'C:\Users\bigji\Bootcamp\NODE\ClassActivities\Project2\project2\db\block2img.jpg', SINGLE_BLOB) as T1), "The dead celebrate family day", (SELECT * FROM OPENROWSET(BULK N'C:\Users\bigji\Bootcamp\NODE\ClassActivities\Project2\project2\db\block3img.jpg', SINGLE_BLOB) as T1), "The Man, The Songs, The Fedora");

INSERT INTO user_contact(user_id, e_mail, phone, place_location)
VALUES (1, "john@smith.com", 0288556644, "King St Underpass");
