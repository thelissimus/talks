CREATE TABLE users (
    id       INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    fullname TEXT,
    email    TEXT
) STRICT;

CREATE TABLE errors_catalog (
    id     TEXT PRIMARY KEY,
    title  TEXT,
    detail TEXT
) STRICT;
