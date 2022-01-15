

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    id_company INTEGER,
    name VARCHAR (40),
    email TEXT,
    password VARCHAR(8),
    img VARCHAR(500),
    last_score INTEGER,
    correct_answer VARCHAR[],
    created timestamp NOT NULL DEFAULT now (),
    FOREIGN KEY (id_company) REFERENCES company (id_company)
);

CREATE TABLE company (
    id_company SERIAL PRIMARY KEY,
    name VARCHAR (50)
);

INSERT INTO company (name)
VALUES ('The Bridge');

INSERT INTO users (id_company, name, user_name,password,email,img)
VALUES (1, 'Marcos Guzman', 'Marcos','1234','mmarcos@gmail.com','https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png')