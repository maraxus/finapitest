CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE USER wallet WITH PASSWORD 'wallet';
CREATE DATABASE walletdb;
GRANT ALL PRIVILEGES ON DATABASE walletdb TO wallet;

\connect walletdb

CREATE TABLE "users" (
                         useruid uuid PRIMARY KEY,
                         name varchar(60) NOT NULL,
                         username varchar(50) NOT NULL,
                         password varchar(300) NOT NULL
);

CREATE TABLE "wallets" (
                           walletuid uuid PRIMARY KEY,
                           user_id uuid UNIQUE NOT NULL REFERENCES users(useruid),
                           balance integer NOT NULL DEFAULT 0
);

CREATE TABLE "Transfers" (
                             transaction_id uuid PRIMARY KEY,
                             origin uuid NOT NULL ,
                             destination uuid NOT NULL,
                             value integer NOT NULL,
                             status text CHECK ( status IN ('pending', 'completed', 'reverted')) NOT NULL,
                             created timestamp NOT NULL,
                             completed timestamp,
                             reverted timestamp
);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO wallet;