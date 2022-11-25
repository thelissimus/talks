INSERT INTO users (username, fullname, email)
VALUES ('bober', 'Bob Builder', 'bob@gmail.com'),
    ('martin', 'Martin Luther', 'martin@gmail.com'),
    ('john42', 'John Doe', 'john2@johnplace.com');
--
INSERT INTO errors_catalog (id, title, detail)
VALUES (
        'qmk-1',
        'User cannot be created',
        'You may have entered wrong credentials'
    ),
    (
        'qmk-2',
        'User cannot be found',
        'User may have deleted their account or wrong username@@@Please check if you entered identifiers right'
    ),
    (
        'qmk-3',
        'User is suspended',
        'User account is suspended due to legal reasons@@@Account is not recoverable'
    );
