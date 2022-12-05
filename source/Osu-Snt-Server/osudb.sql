-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : lun. 05 déc. 2022 à 20:49
-- Version du serveur :  5.7.31
-- Version de PHP : 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `osudb`
--

-- --------------------------------------------------------

--
-- Structure de la table `beatmap`
--

DROP TABLE IF EXISTS `beatmap`;
CREATE TABLE IF NOT EXISTS `beatmap` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `SONG` varchar(255) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `DESCRIPTION` varchar(255) NOT NULL,
  `LINK` varchar(255) NOT NULL,
  `BANNER` varchar(255) NOT NULL,
  `DIFFICULTY_NAME` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `beatmap`
--

INSERT INTO `beatmap` (`ID`, `SONG`, `NAME`, `DESCRIPTION`, `LINK`, `BANNER`, `DIFFICULTY_NAME`) VALUES
(1, '', 'padowa padowa', 'pekkie another also thx for applause\r\nb g unrelated\r\nxahlt/aqua ily', 'https://osu.ppy.sh/beatmapsets/1650892#osu/3370179', 'https://assets.ppy.sh/beatmaps/1650892/covers/cover.jpg', 'insane'),
(2, '', 'Full Flavor', 'Reupload. Super Map! Like für mehr', 'https://osu.ppy.sh/beatmapsets/1279060#osu/2656985', 'https://assets.ppy.sh/beatmaps/1279060/covers/cover.jpg?1605214870', 'Full Jumps Pt. I'),
(3, '', 'Lady Brown (feat. Cise Starr)', 'map wasn\'t even good enough for loved (84,7% approval and need 85%) sry guys ask someone else if you want a ranked nujabes', 'https://osu.ppy.sh/beatmapsets/205425#osu/668460', 'https://assets.ppy.sh/beatmaps/205425/covers/cover.jpg?1491745762', 'Bonus Diff');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID` bigint(20) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(255) NOT NULL,
  `COUNTRY` varchar(255) NOT NULL,
  `AVATAR_URL` varchar(255) NOT NULL DEFAULT 'https://i.ppy.sh/5909dcab19c5f4d866da39ab5362bd046849b37c/68747470733a2f2f692e696d6775722e636f6d2f5165706e55347a2e6a7067',
  `BANNER_URL` varchar(255) NOT NULL DEFAULT '../assets/images/background/osu/image1.png',
  `FOLLOW` varchar(255) NOT NULL,
  `PLAYSTYLE` varchar(255) NOT NULL DEFAULT 'Clavier;Souris;',
  `LIKED` varchar(255) NOT NULL DEFAULT 'Dire "Welcome to Osu".',
  `PLAYED` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`ID`, `NAME`, `COUNTRY`, `AVATAR_URL`, `BANNER_URL`, `FOLLOW`, `PLAYSTYLE`, `LIKED`, `PLAYED`) VALUES
(1, 'Xelow', 'Canada', 'https://avatars.githubusercontent.com/u/48628282', 'https://safebooru.org//samples/4026/sample_20084ad9e0e19968df26f976d4ae512f83112e30.jpg?4206780', '2;3;', 'Clavier;Tablette;', 'Faire des calins', '1&122;2&23;3&10;'),
(2, 'Luniko', 'France', 'https://i.pinimg.com/564x/d1/e8/da/d1e8da599714c068e6ecf60a327914f8.jpg', 'https://www.anime-gate.net/images-mangas-fonds/jibaku-shounen-hanako-kun.jpg', '1;3;', 'Clavier;Souris;', 'Avoir Xiao', ''),
(3, 'Test', 'Allemagne', 'https://i.ppy.sh/5909dcab19c5f4d866da39ab5362bd046849b37c/68747470733a2f2f692e696d6775722e636f6d2f5165706e55347a2e6a7067', '../assets/images/background/osu/image1.png', '', 'Clavier;Souris;', 'Dire \"Welcome to Osu\".', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
