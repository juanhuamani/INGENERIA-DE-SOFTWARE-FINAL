CREATE DATABASE database_events;

USE database_events;

CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY(id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

ALTER TABLE database_links.users 
MODIFY username VARCHAR(30) NOT NULL;

ALTER TABLE database_links.users 
MODIFY password VARCHAR(120) NOT NULL;

DESCRIBE users;

-- LINKS TABLES --
CREATE TABLE events(
    id INT(11) NOT NULL,
    title VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT(11),
    create_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE events
    ADD PRIMARY KEY(id);
    
ALTER TABLE events
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;
    
DESCRIBE events;