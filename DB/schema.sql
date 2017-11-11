CREATE DATABASE showmyshows;
Use showmyshows;

CREATE TABLE `user_shows` (
  `relation` varchar(255) NOT NULL,
  `Status` tinyint(1) DEFAULT '1',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL DEFAULT '0',
  `ShowId` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`UserId`,`ShowId`,'relation'),
  KEY `ShowId` (`ShowId`),
  CONSTRAINT `user_shows_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_shows_ibfk_2` FOREIGN KEY (`ShowId`) REFERENCES `shows` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `shows` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `OMDB_id` int(11) NOT NULL,
  `imgURL` varchar(255) NOT NULL,
  `contentURL` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;