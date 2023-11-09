CREATE DATABASE vertigoRPG CHARACTER SET 'utf8mb4';
USE vertigoRPG;
CREATE TABLE countries (
	id TINYINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    countryName VARCHAR(32) NOT NULL
);

CREATE TABLE players (
	id SMALLINT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nickname VARCHAR(24) NOT NULL,
    pass VARCHAR(200) NOT NULL,
    email VARCHAR(50) NOT NULL,
    pol ENUM("M", "F") NOT NULL,
    godine TINYINT NOT NULL,
    selectedCountryId TINYINT NOT NULL,
    createdAtCountryId TINYINT NOT NULL,
    createdAtTimestamp TIMESTAMP NOT NULL DEFAULT NOW(),
    FOREIGN KEY (selectedCountryId) REFERENCES countries(id),
    FOREIGN KEY (createdAtCountryId) REFERENCES countries(id)
);
