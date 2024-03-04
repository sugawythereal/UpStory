-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.11.6-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for upstorydb
CREATE DATABASE IF NOT EXISTS `upstorydb` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci */;
USE `upstorydb`;

-- Dumping structure for table upstorydb.apartments
CREATE TABLE IF NOT EXISTS `apartments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `citizenid` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `citizenid` (`citizenid`),
  KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.apartments: ~0 rows (approximately)
INSERT INTO `apartments` (`id`, `name`, `type`, `label`, `citizenid`) VALUES
	(1, 'apartment35754', 'apartment3', 'Integrity Way 5754', 'BKD55994'),
	(2, 'apartment37141', 'apartment3', 'Integrity Way 7141', 'XVR60631');

-- Dumping structure for table upstorydb.bank_accounts
CREATE TABLE IF NOT EXISTS `bank_accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(11) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `account_balance` int(11) NOT NULL DEFAULT 0,
  `account_type` enum('shared','job','gang') NOT NULL,
  `users` longtext DEFAULT '[]',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `account_name` (`account_name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.bank_accounts: ~0 rows (approximately)
INSERT INTO `bank_accounts` (`id`, `citizenid`, `account_name`, `account_balance`, `account_type`, `users`) VALUES
	(1, NULL, 'mechanic', 0, 'job', '[]');

-- Dumping structure for table upstorydb.bank_statements
CREATE TABLE IF NOT EXISTS `bank_statements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(11) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT 'checking',
  `amount` int(11) DEFAULT NULL,
  `reason` varchar(50) DEFAULT NULL,
  `statement_type` enum('deposit','withdraw') DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `citizenid` (`citizenid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.bank_statements: ~0 rows (approximately)

-- Dumping structure for table upstorydb.bans
CREATE TABLE IF NOT EXISTS `bans` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `license` varchar(50) DEFAULT NULL,
  `discord` varchar(50) DEFAULT NULL,
  `ip` varchar(50) DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `expire` int(11) DEFAULT NULL,
  `bannedby` varchar(255) NOT NULL DEFAULT 'LeBanhammer',
  PRIMARY KEY (`id`),
  KEY `license` (`license`),
  KEY `discord` (`discord`),
  KEY `ip` (`ip`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.bans: ~0 rows (approximately)

-- Dumping structure for table upstorydb.cl_spawnselector
CREATE TABLE IF NOT EXISTS `cl_spawnselector` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `location_data` longtext DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=375 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.cl_spawnselector: ~5 rows (approximately)
INSERT INTO `cl_spawnselector` (`id`, `location_data`) VALUES
	(1, '{"locationText":"Hospital","iconColor":"rgb(51, 51, 51)","iconName":"fas fa-hospital","screenPosition":{"left":510,"resolution":{"height":1080,"width":1920},"top":571},"backgroundColor":"rgb(253, 92, 99)"}'),
	(2, '{"locationText":"Legion Square","iconColor":"rgb(51, 51, 51)","iconName":"fas fa-tree","screenPosition":{"left":477,"resolution":{"height":1080,"width":1920},"top":546},"backgroundColor":"#c3f2cb"}'),
	(3, '{"locationText":"Airport","iconColor":"rgb(51, 51, 51)","iconName":"fas fa-cart-flatbed-suitcase","screenPosition":{"left":167,"resolution":{"height":1080,"width":1920},"top":391},"backgroundColor":"rgb(200, 237, 253)"}'),
	(4, '{"locationText":"Mount Chiliad","iconColor":"rgb(51, 51, 51)","iconName":"fas fa-person-hiking","screenPosition":{"left":1520,"resolution":{"height":1080,"width":1920},"top":595},"backgroundColor":"rgb(129, 104, 2)"}'),
	(5, '{"locationText":"MRPD","iconColor":"rgb(51, 51, 51)","iconName":"fas fa-shield","screenPosition":{"left":454,"resolution":{"height":1080,"width":1920},"top":587},"backgroundColor":"rgb(124, 185, 232)"}');

-- Dumping structure for table upstorydb.crypto
CREATE TABLE IF NOT EXISTS `crypto` (
  `crypto` varchar(50) NOT NULL DEFAULT 'qbit',
  `worth` int(11) NOT NULL DEFAULT 0,
  `history` text DEFAULT NULL,
  PRIMARY KEY (`crypto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- Dumping data for table upstorydb.crypto: ~0 rows (approximately)
INSERT INTO `crypto` (`crypto`, `worth`, `history`) VALUES
	('qbit', 1018, '[{"PreviousWorth":1018,"NewWorth":1018},{"PreviousWorth":1018,"NewWorth":1018},{"PreviousWorth":1018,"NewWorth":1018},{"PreviousWorth":1018,"NewWorth":1018}]');

-- Dumping structure for table upstorydb.crypto_transactions
CREATE TABLE IF NOT EXISTS `crypto_transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(11) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `message` varchar(50) DEFAULT NULL,
  `date` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `citizenid` (`citizenid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.crypto_transactions: ~0 rows (approximately)

-- Dumping structure for table upstorydb.dealers
CREATE TABLE IF NOT EXISTS `dealers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '0',
  `coords` longtext DEFAULT NULL,
  `time` longtext DEFAULT NULL,
  `createdby` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.dealers: ~0 rows (approximately)

-- Dumping structure for table upstorydb.gloveboxitems
CREATE TABLE IF NOT EXISTS `gloveboxitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plate` varchar(8) NOT NULL DEFAULT '[]',
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`plate`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.gloveboxitems: ~0 rows (approximately)

-- Dumping structure for table upstorydb.houselocations
CREATE TABLE IF NOT EXISTS `houselocations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `coords` text DEFAULT NULL,
  `owned` tinyint(1) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `tier` tinyint(4) DEFAULT NULL,
  `garage` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.houselocations: ~0 rows (approximately)

-- Dumping structure for table upstorydb.house_plants
CREATE TABLE IF NOT EXISTS `house_plants` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `building` varchar(50) DEFAULT NULL,
  `stage` int(11) DEFAULT 1,
  `sort` varchar(50) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `food` int(11) DEFAULT 100,
  `health` int(11) DEFAULT 100,
  `progress` int(11) DEFAULT 0,
  `coords` text DEFAULT NULL,
  `plantid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `building` (`building`),
  KEY `plantid` (`plantid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.house_plants: ~0 rows (approximately)

-- Dumping structure for table upstorydb.lapraces
CREATE TABLE IF NOT EXISTS `lapraces` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `checkpoints` text DEFAULT NULL,
  `records` text DEFAULT NULL,
  `creator` varchar(50) DEFAULT NULL,
  `distance` int(11) DEFAULT NULL,
  `raceid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `raceid` (`raceid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.lapraces: ~0 rows (approximately)

-- Dumping structure for table upstorydb.management_outfits
CREATE TABLE IF NOT EXISTS `management_outfits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_name` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `minrank` int(11) NOT NULL DEFAULT 0,
  `name` varchar(50) NOT NULL DEFAULT 'Cool Outfit',
  `gender` varchar(50) NOT NULL DEFAULT 'male',
  `model` varchar(50) DEFAULT NULL,
  `props` varchar(1000) DEFAULT NULL,
  `components` varchar(1500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.management_outfits: ~0 rows (approximately)

-- Dumping structure for table upstorydb.mdt_bolos
CREATE TABLE IF NOT EXISTS `mdt_bolos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `plate` varchar(50) DEFAULT NULL,
  `owner` varchar(50) DEFAULT NULL,
  `individual` varchar(50) DEFAULT NULL,
  `detail` text DEFAULT NULL,
  `tags` text DEFAULT NULL,
  `gallery` text DEFAULT NULL,
  `officersinvolved` text DEFAULT NULL,
  `time` varchar(20) DEFAULT NULL,
  `jobtype` varchar(25) NOT NULL DEFAULT 'police',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.mdt_bolos: ~0 rows (approximately)

-- Dumping structure for table upstorydb.mdt_bulletin
CREATE TABLE IF NOT EXISTS `mdt_bulletin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` text NOT NULL,
  `desc` text NOT NULL,
  `author` varchar(50) NOT NULL,
  `time` varchar(20) NOT NULL,
  `jobtype` varchar(25) DEFAULT 'police',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.mdt_bulletin: ~0 rows (approximately)

-- Dumping structure for table upstorydb.mdt_clocking
CREATE TABLE IF NOT EXISTS `mdt_clocking` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(50) NOT NULL DEFAULT '',
  `firstname` varchar(255) NOT NULL DEFAULT '',
  `lastname` varchar(255) NOT NULL DEFAULT '',
  `clock_in_time` varchar(255) NOT NULL DEFAULT '',
  `clock_out_time` varchar(50) DEFAULT NULL,
  `total_time` int(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (`user_id`) USING BTREE,
  KEY `id` (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.mdt_clocking: ~0 rows (approximately)
INSERT INTO `mdt_clocking` (`id`, `user_id`, `firstname`, `lastname`, `clock_in_time`, `clock_out_time`, `total_time`) VALUES
	(7, 'BKD55994', 'Tokyo', 'Raven', '2024-02-19 19:59:32', '2024-02-22 19:54:50', 258918);

-- Dumping structure for table upstorydb.mdt_convictions
CREATE TABLE IF NOT EXISTS `mdt_convictions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` varchar(50) DEFAULT NULL,
  `linkedincident` int(11) NOT NULL DEFAULT 0,
  `warrant` varchar(50) DEFAULT NULL,
  `guilty` varchar(50) DEFAULT NULL,
  `processed` varchar(50) DEFAULT NULL,
  `associated` varchar(50) DEFAULT '0',
  `charges` text DEFAULT NULL,
  `fine` int(11) DEFAULT 0,
  `sentence` int(11) DEFAULT 0,
  `recfine` int(11) DEFAULT 0,
  `recsentence` int(11) DEFAULT 0,
  `time` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.mdt_convictions: ~0 rows (approximately)
INSERT INTO `mdt_convictions` (`id`, `cid`, `linkedincident`, `warrant`, `guilty`, `processed`, `associated`, `charges`, `fine`, `sentence`, `recfine`, `recsentence`, `time`) VALUES
	(1, 'BKD55994', 1, '0', '0', '0', '0', '[]', 0, 3, NULL, NULL, '1708371643060');

-- Dumping structure for table upstorydb.mdt_data
CREATE TABLE IF NOT EXISTS `mdt_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cid` varchar(20) NOT NULL,
  `information` mediumtext DEFAULT NULL,
  `tags` text NOT NULL,
  `gallery` text NOT NULL,
  `jobtype` varchar(25) DEFAULT 'police',
  `pfp` text DEFAULT NULL,
  `fingerprint` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cid`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.mdt_data: ~0 rows (approximately)
INSERT INTO `mdt_data` (`id`, `cid`, `information`, `tags`, `gallery`, `jobtype`, `pfp`, `fingerprint`) VALUES
	(1, 'BKD55994', NULL, 'null', '["https://cdn.discordapp.com/attachments/1209219475606347897/1209620640219275335/screenshot.jpg?ex=65e79602&is=65d52102&hm=9d29f6335ad75406f460b0d8883007758a5bb41c5648a2f2ee29ab5e854e1101&"]', 'police', 'https://cdn.discordapp.com/attachments/1209219475606347897/1209620640219275335/screenshot.jpg?ex=65e79602&is=65d52102&hm=9d29f6335ad75406f460b0d8883007758a5bb41c5648a2f2ee29ab5e854e1101&', NULL);

-- Dumping structure for table upstorydb.mdt_impound
CREATE TABLE IF NOT EXISTS `mdt_impound` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicleid` int(11) NOT NULL,
  `linkedreport` int(11) NOT NULL,
  `fee` int(11) DEFAULT NULL,
  `time` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.mdt_impound: ~0 rows (approximately)

-- Dumping structure for table upstorydb.mdt_incidents
CREATE TABLE IF NOT EXISTS `mdt_incidents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(50) NOT NULL DEFAULT '',
  `title` varchar(50) NOT NULL DEFAULT '0',
  `details` text NOT NULL,
  `tags` text NOT NULL,
  `officersinvolved` text NOT NULL,
  `civsinvolved` text NOT NULL,
  `evidence` text NOT NULL,
  `time` varchar(20) DEFAULT NULL,
  `jobtype` varchar(25) NOT NULL DEFAULT 'police',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.mdt_incidents: ~0 rows (approximately)
INSERT INTO `mdt_incidents` (`id`, `author`, `title`, `details`, `tags`, `officersinvolved`, `civsinvolved`, `evidence`, `time`, `jobtype`) VALUES
	(1, 'Tokyo Raven', 'Name - Charge - 2/19/2024', '\n      <div style="color: white;">\n          <p><strong>📝 Summary:</strong></p>\n          <p><em>[Insert Report Summary Here]</em></p>\n          <p>&nbsp;</p>\n          <p><strong>🧍 Hostage:</strong> [Name Here]</p>\n          <p>&nbsp;</p>\n          <p><strong>🗄️ Evidence Location:</strong> Stash # | Drawer #</p>\n          <p>&nbsp;</p>\n          <p><strong>🔪 Weapons/Items Confiscated:</strong></p>\n          <p><em>· [Insert List Here]</em></p>\n          <p>&nbsp;</p>\n          <p>-----</p>\n          <p><strong style="background-color: var(--color-1);">💸 Fine:</strong></p>\n          <p>&nbsp;</p>\n          <p><strong>⌚ Sentence:</strong></p>\n          <p>-----</p>\n      </div>\n  ', '[]', '[]', '[]', '[]', '1708371643060', 'police');

-- Dumping structure for table upstorydb.mdt_logs
CREATE TABLE IF NOT EXISTS `mdt_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `time` varchar(20) DEFAULT NULL,
  `jobtype` varchar(25) DEFAULT 'police',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.mdt_logs: ~0 rows (approximately)

-- Dumping structure for table upstorydb.mdt_reports
CREATE TABLE IF NOT EXISTS `mdt_reports` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(50) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `details` text DEFAULT NULL,
  `tags` text DEFAULT NULL,
  `officersinvolved` text DEFAULT NULL,
  `civsinvolved` text DEFAULT NULL,
  `gallery` text DEFAULT NULL,
  `time` varchar(20) DEFAULT NULL,
  `jobtype` varchar(25) DEFAULT 'police',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.mdt_reports: ~0 rows (approximately)

-- Dumping structure for table upstorydb.mdt_vehicleinfo
CREATE TABLE IF NOT EXISTS `mdt_vehicleinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plate` varchar(50) DEFAULT NULL,
  `information` text NOT NULL DEFAULT '',
  `stolen` tinyint(1) NOT NULL DEFAULT 0,
  `code5` tinyint(1) NOT NULL DEFAULT 0,
  `image` text NOT NULL DEFAULT '',
  `points` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.mdt_vehicleinfo: ~0 rows (approximately)

-- Dumping structure for table upstorydb.mdt_weaponinfo
CREATE TABLE IF NOT EXISTS `mdt_weaponinfo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `serial` varchar(50) DEFAULT NULL,
  `owner` varchar(50) DEFAULT NULL,
  `information` text NOT NULL DEFAULT '',
  `weapClass` varchar(50) DEFAULT NULL,
  `weapModel` varchar(50) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `serial` (`serial`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.mdt_weaponinfo: ~0 rows (approximately)

-- Dumping structure for table upstorydb.occasion_vehicles
CREATE TABLE IF NOT EXISTS `occasion_vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seller` varchar(50) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `plate` varchar(50) DEFAULT NULL,
  `model` varchar(50) DEFAULT NULL,
  `mods` text DEFAULT NULL,
  `occasionid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `occasionId` (`occasionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.occasion_vehicles: ~0 rows (approximately)

-- Dumping structure for table upstorydb.ox_doorlock
CREATE TABLE IF NOT EXISTS `ox_doorlock` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `data` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- Dumping data for table upstorydb.ox_doorlock: ~0 rows (approximately)
INSERT INTO `ox_doorlock` (`id`, `name`, `data`) VALUES
	(1, 'Bolling1', '{"state":1,"coords":{"x":1796.927734375,"y":2596.490234375,"z":46.3873062133789},"maxDistance":2,"doors":false,"heading":180,"model":-1156020871,"unlockSound":"door_bolt","groups":{"police":0},"lockSound":"door_bolt"}');

-- Dumping structure for table upstorydb.phone_gallery
CREATE TABLE IF NOT EXISTS `phone_gallery` (
  `citizenid` varchar(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `date` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.phone_gallery: ~0 rows (approximately)

-- Dumping structure for table upstorydb.phone_invoices
CREATE TABLE IF NOT EXISTS `phone_invoices` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(11) DEFAULT NULL,
  `amount` int(11) NOT NULL DEFAULT 0,
  `society` tinytext DEFAULT NULL,
  `sender` varchar(50) DEFAULT NULL,
  `sendercitizenid` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `citizenid` (`citizenid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.phone_invoices: ~0 rows (approximately)

-- Dumping structure for table upstorydb.phone_messages
CREATE TABLE IF NOT EXISTS `phone_messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(11) DEFAULT NULL,
  `number` varchar(50) DEFAULT NULL,
  `messages` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `citizenid` (`citizenid`),
  KEY `number` (`number`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.phone_messages: ~0 rows (approximately)

-- Dumping structure for table upstorydb.phone_tweets
CREATE TABLE IF NOT EXISTS `phone_tweets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(11) DEFAULT NULL,
  `firstName` varchar(25) DEFAULT NULL,
  `lastName` varchar(25) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `date` datetime DEFAULT current_timestamp(),
  `url` text DEFAULT NULL,
  `picture` varchar(512) DEFAULT './img/default.png',
  `tweetId` varchar(25) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `citizenid` (`citizenid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.phone_tweets: ~0 rows (approximately)

-- Dumping structure for table upstorydb.players
CREATE TABLE IF NOT EXISTS `players` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(11) NOT NULL,
  `cid` int(11) DEFAULT NULL,
  `license` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `money` text NOT NULL,
  `charinfo` text DEFAULT NULL,
  `job` text NOT NULL,
  `gang` text DEFAULT NULL,
  `position` text NOT NULL,
  `metadata` text NOT NULL,
  `inventory` longtext DEFAULT NULL,
  `last_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`citizenid`),
  KEY `id` (`id`),
  KEY `last_updated` (`last_updated`),
  KEY `license` (`license`)
) ENGINE=InnoDB AUTO_INCREMENT=331 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.players: ~3 rows (approximately)
INSERT INTO `players` (`id`, `citizenid`, `cid`, `license`, `name`, `money`, `charinfo`, `job`, `gang`, `position`, `metadata`, `inventory`, `last_updated`) VALUES
	(1, 'BKD55994', 1, 'license:d1fabd5c6707fdb5ad9f4d6adc03d5b10d7fb139', 'oopsie', '{"crypto":0,"cash":99865000,"bank":100001950}', '{"lastname":"Raven","cid":1,"phone":"5289346568","account":"US02QBCore3381368599","gender":1,"backstory":"placeholder backstory","nationality":"Portugal","firstname":"Tokyo","birthdate":"2001-11-18"}', '{"name":"bennys","label":"Benny\'s Original Motor Works","payment":150,"onduty":true,"type":"mechanic","grade":{"name":"Manager","level":4},"isboss":true}', '{"name":"none","label":"No Gang Affiliaton","grade":{"name":"none","level":0},"isboss":false}', '{"x":198.38241577148438,"y":-927.2703247070313,"z":30.6783447265625}', '{"phone":[],"phonedata":{"InstalledApps":[],"SerialNumber":14625933},"ishandcuffed":false,"callsign":"NO CALLSIGN","walletid":"QB-37492843","fingerprint":"bq619J95lnw4784","armor":0,"injail":0,"status":[],"fitbit":[],"tracker":false,"attachmentcraftingrep":0,"thirst":58.20000000000003,"criminalrecord":{"date":{"sec":33,"isdst":false,"year":2024,"month":2,"wday":3,"yday":51,"hour":22,"min":0,"day":20},"hasRecord":true},"isdead":false,"inlaststand":false,"hunger":53.79999999999997,"dealerrep":0,"stress":6,"jailitems":[],"inside":{"apartment":[]},"licences":{"business":false,"driver":true,"weapon":false},"craftingrep":0,"bloodtype":"O-","jobrep":{"tow":0,"taxi":0,"trucker":0,"hotdog":0}}', '[{"name":"veh_toolbox","type":"item","amount":1,"created":1708796029,"info":{"quality":100},"slot":15},{"name":"veh_exterior","type":"item","amount":7,"created":1709058048,"info":{"quality":100},"slot":16},{"name":"veh_exterior","type":"item","amount":6,"created":1708804894,"info":{"quality":100},"slot":17},{"name":"weapon_pistol","type":"weapon","amount":1,"created":1708803464,"info":{"ammo":98,"quality":78.99999999999925,"serie":"96sDh6Ja088FecW"},"slot":18},{"name":"lockpick","type":"item","amount":3,"created":1708795993,"info":{"quality":100},"slot":5},{"name":"phone","type":"item","amount":1,"info":[],"slot":6},{"name":"id_card","type":"item","amount":1,"info":{"gender":1,"firstname":"Tokyo","lastname":"Raven","citizenid":"BKD55994","birthdate":"2001-11-18","nationality":"Portugal"},"slot":7},{"name":"radio","type":"item","amount":1,"created":1708795985,"info":{"quality":100},"slot":8},{"name":"driver_license","type":"item","amount":1,"created":1708796372,"info":{"quality":100,"type":"Class C Driver License","lastname":"Raven","birthdate":"2001-11-18","firstname":"Tokyo"},"slot":9},{"name":"veh_exterior","type":"item","amount":7,"created":1708805166,"info":{"quality":100},"slot":24},{"name":"veh_wheels","type":"item","amount":1,"created":1709058046,"info":{"quality":100},"slot":22},{"name":"veh_suspension","type":"item","amount":1,"created":1709058049,"info":{"quality":100},"slot":23},{"name":"veh_brakes","type":"item","amount":1,"created":1709058051,"info":{"quality":100},"slot":21}]', '2024-02-27 19:30:27'),
	(320, 'CGT85440', 1, 'license:f0914631fc045d0324a092b1f79a9616ccb23495', 'New', '{"cash":500,"bank":5000,"crypto":0}', '{"firstname":"Didi","backstory":"placeholder backstory","phone":"9055461572","lastname":"Nana","account":"US04QBCore1541449019","gender":0,"nationality":"Afghanistan","birthdate":"2024-02-27","cid":1}', '{"name":"unemployed","type":"none","label":"Civilian","grade":{"name":"Freelancer","level":0},"isboss":false,"onduty":true,"payment":10}', '{"name":"none","grade":{"name":"none","level":0},"isboss":false,"label":"No Gang Affiliaton"}', '{"x":-1273.76708984375,"y":-372.5142822265625,"z":36.6263427734375}', '{"isdead":false,"status":[],"hunger":91.6,"stress":0,"inlaststand":false,"phone":[],"attachmentcraftingrep":0,"craftingrep":0,"jobrep":{"taxi":0,"hotdog":0,"tow":0,"trucker":0},"walletid":"QB-62170045","jailitems":[],"licences":{"weapon":false,"business":false,"driver":true},"inside":{"apartment":[]},"phonedata":{"InstalledApps":[],"SerialNumber":17866551},"criminalrecord":{"hasRecord":false},"thirst":92.4,"callsign":"NO CALLSIGN","fitbit":[],"bloodtype":"A+","dealerrep":0,"ishandcuffed":false,"tracker":false,"fingerprint":"uv540E56qkx3092","injail":0,"armor":0}', '[{"name":"phone","created":1709061277,"info":{"quality":100},"slot":6,"amount":1,"type":"item"},{"name":"id_card","created":1709061277,"info":{"citizenid":"CGT85440","gender":0,"lastname":"Nana","quality":100,"nationality":"Afghanistan","firstname":"Didi","birthdate":"2024-02-27"},"slot":7,"amount":1,"type":"item"},{"name":"driver_license","created":1709061277,"info":{"lastname":"Nana","quality":100,"type":"Class C Driver License","firstname":"Didi","birthdate":"2024-02-27"},"slot":8,"amount":1,"type":"item"}]', '2024-02-27 19:23:09'),
	(62, 'XVR60631', 2, 'license:d1fabd5c6707fdb5ad9f4d6adc03d5b10d7fb139', 'sugaa', '{"cash":500,"crypto":0,"bank":5010}', '{"cid":2,"phone":"1089661839","birthdate":"09/02/44","account":"US09QBCore7663239539","nationality":"USA","backstory":"Coisas sla","gender":0,"lastname":"Char","firstname":"Test"}', '{"onduty":true,"name":"unemployed","isboss":false,"payment":10,"grade":{"name":"Freelancer","level":0},"type":"none","label":"Civilian"}', '{"isboss":false,"grade":{"name":"none","level":0},"name":"none","label":"No Gang Affiliaton"}', '{"x":269.73626708984377,"y":-640.7604370117188,"z":42.00146484375}', '{"criminalrecord":{"hasRecord":false},"phone":[],"hunger":95.8,"attachmentcraftingrep":0,"status":[],"ishandcuffed":false,"thirst":96.2,"dealerrep":0,"phonedata":{"InstalledApps":[],"SerialNumber":37214603},"injail":0,"bloodtype":"AB+","armor":0,"walletid":"QB-35539386","fingerprint":"Es947I08ZmU8982","callsign":"NO CALLSIGN","jobrep":{"hotdog":0,"trucker":0,"tow":0,"taxi":0},"inside":{"apartment":[]},"isdead":false,"craftingrep":0,"fitbit":[],"tracker":false,"jailitems":[],"stress":0,"licences":{"driver":true,"business":false,"weapon":false},"inlaststand":false}', '[{"name":"phone","type":"item","amount":1,"slot":1,"info":[]},{"name":"id_card","type":"item","amount":1,"slot":2,"info":{"birthdate":"09/02/44","gender":0,"citizenid":"XVR60631","firstname":"Test","nationality":"USA","lastname":"Char"}},{"name":"driver_license","type":"item","amount":1,"slot":3,"info":{"birthdate":"09/02/44","firstname":"Test","lastname":"Char","type":"Class C Driver License"}}]', '2024-02-19 17:42:00');

-- Dumping structure for table upstorydb.playerskins
CREATE TABLE IF NOT EXISTS `playerskins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `skin` text NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `citizenid` (`citizenid`),
  KEY `active` (`active`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table upstorydb.playerskins: ~3 rows (approximately)
INSERT INTO `playerskins` (`id`, `citizenid`, `model`, `skin`, `active`) VALUES
	(2, 'XVR60631', 'mp_m_freemode_01', '{"tattoos":[],"hair":{"style":0,"texture":0,"highlight":0,"color":0},"eyeColor":0,"props":[{"texture":-1,"drawable":-1,"prop_id":0},{"texture":-1,"drawable":-1,"prop_id":1},{"texture":-1,"drawable":-1,"prop_id":2},{"texture":-1,"drawable":-1,"prop_id":6},{"texture":-1,"drawable":-1,"prop_id":7}],"headBlend":{"skinThird":0,"shapeThird":0,"skinMix":0,"shapeFirst":0,"shapeMix":0,"thirdMix":0,"shapeSecond":0,"skinSecond":0,"skinFirst":0},"faceFeatures":{"chinBoneSize":0,"lipsThickness":0,"cheeksBoneHigh":0,"nosePeakSize":0,"nosePeakHigh":0,"noseWidth":0,"noseBoneTwist":0,"noseBoneHigh":0,"cheeksBoneWidth":0,"chinBoneLenght":0,"eyesOpening":0,"eyeBrownHigh":0,"chinBoneLowering":0,"eyeBrownForward":0,"neckThickness":0,"jawBoneWidth":0,"nosePeakLowering":0,"cheeksWidth":0,"jawBoneBackSize":0,"chinHole":0},"components":[{"texture":0,"drawable":0,"component_id":0},{"texture":0,"drawable":0,"component_id":1},{"texture":0,"drawable":0,"component_id":2},{"texture":0,"drawable":0,"component_id":3},{"texture":0,"drawable":0,"component_id":4},{"texture":0,"drawable":0,"component_id":5},{"texture":0,"drawable":0,"component_id":6},{"texture":0,"drawable":0,"component_id":7},{"texture":0,"drawable":0,"component_id":8},{"texture":0,"drawable":0,"component_id":9},{"texture":0,"drawable":0,"component_id":10},{"texture":0,"drawable":0,"component_id":11}],"model":"mp_m_freemode_01","headOverlays":{"eyebrows":{"opacity":0,"secondColor":0,"style":0,"color":0},"sunDamage":{"opacity":0,"secondColor":0,"style":0,"color":0},"moleAndFreckles":{"opacity":0,"secondColor":0,"style":0,"color":0},"lipstick":{"opacity":0,"secondColor":0,"style":0,"color":0},"complexion":{"opacity":0,"secondColor":0,"style":0,"color":0},"ageing":{"opacity":0,"secondColor":0,"style":0,"color":0},"chestHair":{"opacity":0,"secondColor":0,"style":0,"color":0},"makeUp":{"opacity":0,"secondColor":0,"style":0,"color":0},"bodyBlemishes":{"opacity":0,"secondColor":0,"style":0,"color":0},"blemishes":{"opacity":0,"secondColor":0,"style":0,"color":0},"beard":{"opacity":0,"secondColor":0,"style":0,"color":0},"blush":{"opacity":0,"secondColor":0,"style":0,"color":0}}}', 1),
	(6, 'BKD55994', 'mp_f_freemode_01', '{"hair":{"style":94,"highlight":9,"color":20,"texture":0},"model":"mp_f_freemode_01","eyeColor":3,"headOverlays":{"makeUp":{"secondColor":10,"opacity":1.0,"color":56,"style":14},"ageing":{"secondColor":0,"opacity":0,"color":0,"style":0},"blemishes":{"secondColor":0,"opacity":0,"color":0,"style":0},"complexion":{"secondColor":0,"opacity":0,"color":0,"style":0},"beard":{"secondColor":0,"opacity":0,"color":0,"style":0},"sunDamage":{"secondColor":0,"opacity":0,"color":0,"style":0},"bodyBlemishes":{"secondColor":0,"opacity":0,"color":0,"style":0},"eyebrows":{"secondColor":0,"opacity":1.0,"color":0,"style":11},"blush":{"secondColor":0,"opacity":0.5,"color":6,"style":2},"moleAndFreckles":{"secondColor":0,"opacity":0.7,"color":0,"style":0},"lipstick":{"secondColor":0,"opacity":0.5,"color":7,"style":4},"chestHair":{"secondColor":0,"opacity":0,"color":0,"style":0}},"headBlend":{"skinSecond":29,"shapeMix":0.68,"skinFirst":12,"skinMix":0.0,"shapeFirst":45,"shapeSecond":25,"skinThird":0,"thirdMix":0.0,"shapeThird":0},"components":[{"drawable":0,"texture":0,"component_id":0},{"drawable":295,"texture":0,"component_id":1},{"drawable":94,"texture":0,"component_id":2},{"drawable":304,"texture":0,"component_id":3},{"drawable":304,"texture":2,"component_id":4},{"drawable":35,"texture":0,"component_id":5},{"drawable":225,"texture":2,"component_id":6},{"drawable":249,"texture":2,"component_id":7},{"drawable":416,"texture":0,"component_id":8},{"drawable":0,"texture":0,"component_id":9},{"drawable":18,"texture":7,"component_id":10},{"drawable":716,"texture":0,"component_id":11}],"props":[{"drawable":-1,"prop_id":0,"texture":-1},{"drawable":-1,"prop_id":1,"texture":-1},{"drawable":-1,"prop_id":2,"texture":-1},{"drawable":-1,"prop_id":6,"texture":-1},{"drawable":-1,"prop_id":7,"texture":-1}],"faceFeatures":{"eyesOpening":0.0,"noseWidth":-0.4,"noseBoneHigh":0.4,"cheeksBoneHigh":0.0,"chinBoneLenght":0.0,"neckThickness":0.2,"eyeBrownForward":0.0,"chinBoneSize":0.0,"chinHole":0.0,"lipsThickness":-0.7,"cheeksBoneWidth":0.0,"nosePeakLowering":0.1,"nosePeakSize":0.0,"jawBoneBackSize":0.0,"eyeBrownHigh":0.0,"chinBoneLowering":0.0,"jawBoneWidth":-0.3,"noseBoneTwist":0.0,"nosePeakHigh":0.2,"cheeksWidth":0.0},"tattoos":[]}', 1),
	(7, 'CGT85440', 'mp_m_freemode_01', '{"tattoos":[],"faceFeatures":{"nosePeakHigh":0,"eyeBrownHigh":0,"cheeksBoneHigh":0,"chinBoneSize":0,"jawBoneBackSize":0,"neckThickness":0,"cheeksBoneWidth":0,"eyesOpening":0,"eyeBrownForward":0,"chinBoneLowering":0,"lipsThickness":0,"noseWidth":0,"nosePeakSize":0,"jawBoneWidth":0,"noseBoneHigh":0,"chinBoneLenght":0,"nosePeakLowering":0,"chinHole":0,"cheeksWidth":0,"noseBoneTwist":0},"headBlend":{"shapeThird":0,"skinSecond":0,"thirdMix":0,"skinFirst":0,"skinMix":0,"shapeFirst":0,"shapeMix":0,"skinThird":0,"shapeSecond":0},"props":[{"texture":-1,"drawable":-1,"prop_id":0},{"texture":-1,"drawable":-1,"prop_id":1},{"texture":-1,"drawable":-1,"prop_id":2},{"texture":-1,"drawable":-1,"prop_id":6},{"texture":-1,"drawable":-1,"prop_id":7}],"hair":{"texture":0,"style":0,"color":0,"highlight":0},"components":[{"texture":0,"component_id":0,"drawable":0},{"texture":0,"component_id":1,"drawable":0},{"texture":0,"component_id":2,"drawable":0},{"texture":0,"component_id":3,"drawable":0},{"texture":0,"component_id":4,"drawable":0},{"texture":0,"component_id":5,"drawable":0},{"texture":0,"component_id":7,"drawable":0},{"texture":0,"component_id":9,"drawable":0},{"texture":0,"component_id":10,"drawable":0},{"texture":0,"component_id":8,"drawable":15},{"texture":1,"component_id":11,"drawable":1},{"texture":0,"component_id":6,"drawable":238}],"model":"mp_m_freemode_01","headOverlays":{"bodyBlemishes":{"opacity":0,"style":0,"secondColor":0,"color":0},"complexion":{"opacity":0,"style":0,"secondColor":0,"color":0},"ageing":{"opacity":0,"style":0,"secondColor":0,"color":0},"moleAndFreckles":{"opacity":0,"style":0,"secondColor":0,"color":0},"blemishes":{"opacity":0,"style":0,"secondColor":0,"color":0},"chestHair":{"opacity":0,"style":0,"secondColor":0,"color":0},"beard":{"opacity":0,"style":0,"secondColor":0,"color":0},"eyebrows":{"opacity":0,"style":0,"secondColor":0,"color":0},"lipstick":{"opacity":0,"style":0,"secondColor":0,"color":0},"makeUp":{"opacity":0,"style":0,"secondColor":0,"color":0},"sunDamage":{"opacity":0,"style":0,"secondColor":0,"color":0},"blush":{"opacity":0,"style":0,"secondColor":0,"color":0}},"eyeColor":0}', 1);

-- Dumping structure for table upstorydb.player_contacts
CREATE TABLE IF NOT EXISTS `player_contacts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(11) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `number` varchar(50) DEFAULT NULL,
  `iban` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `citizenid` (`citizenid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.player_contacts: ~0 rows (approximately)

-- Dumping structure for table upstorydb.player_houses
CREATE TABLE IF NOT EXISTS `player_houses` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `house` varchar(50) NOT NULL,
  `identifier` varchar(50) DEFAULT NULL,
  `citizenid` varchar(11) DEFAULT NULL,
  `keyholders` text DEFAULT NULL,
  `decorations` text DEFAULT NULL,
  `stash` text DEFAULT NULL,
  `outfit` text DEFAULT NULL,
  `logout` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `house` (`house`),
  KEY `citizenid` (`citizenid`),
  KEY `identifier` (`identifier`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.player_houses: ~0 rows (approximately)

-- Dumping structure for table upstorydb.player_mails
CREATE TABLE IF NOT EXISTS `player_mails` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(11) DEFAULT NULL,
  `sender` varchar(50) DEFAULT NULL,
  `subject` varchar(50) DEFAULT NULL,
  `message` text DEFAULT NULL,
  `read` tinyint(4) DEFAULT 0,
  `mailid` int(11) DEFAULT NULL,
  `date` timestamp NULL DEFAULT current_timestamp(),
  `button` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `citizenid` (`citizenid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.player_mails: ~0 rows (approximately)

-- Dumping structure for table upstorydb.player_outfits
CREATE TABLE IF NOT EXISTS `player_outfits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `citizenid` varchar(50) DEFAULT NULL,
  `outfitname` varchar(50) NOT NULL DEFAULT '0',
  `model` varchar(50) DEFAULT NULL,
  `props` varchar(1000) DEFAULT NULL,
  `components` varchar(1500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `citizenid_outfitname_model` (`citizenid`,`outfitname`,`model`),
  KEY `citizenid` (`citizenid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.player_outfits: ~2 rows (approximately)
INSERT INTO `player_outfits` (`id`, `citizenid`, `outfitname`, `model`, `props`, `components`) VALUES
	(26, 'BKD55994', 'pink skirt white ', 'mp_f_freemode_01', '[{"texture":-1,"drawable":-1,"prop_id":0},{"texture":-1,"drawable":-1,"prop_id":1},{"texture":-1,"drawable":-1,"prop_id":2},{"texture":-1,"drawable":-1,"prop_id":6},{"texture":-1,"drawable":-1,"prop_id":7}]', '[{"component_id":0,"drawable":0,"texture":0},{"component_id":1,"drawable":295,"texture":0},{"component_id":2,"drawable":94,"texture":0},{"component_id":3,"drawable":304,"texture":0},{"component_id":4,"drawable":304,"texture":2},{"component_id":5,"drawable":35,"texture":0},{"component_id":6,"drawable":225,"texture":2},{"component_id":7,"drawable":249,"texture":2},{"component_id":8,"drawable":416,"texture":0},{"component_id":9,"drawable":0,"texture":0},{"component_id":10,"drawable":18,"texture":7},{"component_id":11,"drawable":716,"texture":0}]'),
	(27, 'BKD55994', '2', 'mp_f_freemode_01', '[{"texture":-1,"drawable":-1,"prop_id":0},{"texture":-1,"drawable":-1,"prop_id":1},{"texture":-1,"drawable":-1,"prop_id":2},{"texture":-1,"drawable":-1,"prop_id":6},{"texture":-1,"drawable":-1,"prop_id":7}]', '[{"component_id":0,"drawable":0,"texture":0},{"component_id":1,"drawable":295,"texture":2},{"component_id":2,"drawable":94,"texture":0},{"component_id":3,"drawable":300,"texture":0},{"component_id":4,"drawable":304,"texture":2},{"component_id":5,"drawable":136,"texture":1},{"component_id":6,"drawable":225,"texture":2},{"component_id":7,"drawable":264,"texture":0},{"component_id":8,"drawable":382,"texture":2},{"component_id":9,"drawable":0,"texture":0},{"component_id":10,"drawable":18,"texture":7},{"component_id":11,"drawable":705,"texture":0}]');

-- Dumping structure for table upstorydb.player_outfit_codes
CREATE TABLE IF NOT EXISTS `player_outfit_codes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `outfitid` int(11) NOT NULL,
  `code` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `FK_player_outfit_codes_player_outfits` (`outfitid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.player_outfit_codes: ~0 rows (approximately)

-- Dumping structure for table upstorydb.player_vehicles
CREATE TABLE IF NOT EXISTS `player_vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `license` varchar(50) DEFAULT NULL,
  `citizenid` varchar(11) DEFAULT NULL,
  `vehicle` varchar(50) DEFAULT NULL,
  `hash` varchar(50) DEFAULT NULL,
  `mods` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `plate` varchar(8) NOT NULL,
  `fakeplate` varchar(8) DEFAULT NULL,
  `garage` varchar(50) DEFAULT NULL,
  `fuel` int(11) DEFAULT 100,
  `engine` float DEFAULT 1000,
  `body` float DEFAULT 1000,
  `state` int(11) DEFAULT 1,
  `depotprice` int(11) NOT NULL DEFAULT 0,
  `drivingdistance` int(50) DEFAULT NULL,
  `status` text DEFAULT NULL,
  `balance` int(11) NOT NULL DEFAULT 0,
  `paymentamount` int(11) NOT NULL DEFAULT 0,
  `paymentsleft` int(11) NOT NULL DEFAULT 0,
  `financetime` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `plate` (`plate`),
  KEY `citizenid` (`citizenid`),
  KEY `license` (`license`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.player_vehicles: ~0 rows (approximately)

-- Dumping structure for table upstorydb.player_warns
CREATE TABLE IF NOT EXISTS `player_warns` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `senderIdentifier` varchar(50) DEFAULT NULL,
  `targetIdentifier` varchar(50) DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `warnId` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.player_warns: ~0 rows (approximately)

-- Dumping structure for table upstorydb.properties
CREATE TABLE IF NOT EXISTS `properties` (
  `property_id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_citizenid` varchar(50) DEFAULT NULL,
  `street` varchar(100) DEFAULT NULL,
  `region` varchar(100) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `has_access` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT json_array() CHECK (json_valid(`has_access`)),
  `extra_imgs` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT json_array() CHECK (json_valid(`extra_imgs`)),
  `furnitures` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT json_array() CHECK (json_valid(`furnitures`)),
  `for_sale` tinyint(1) NOT NULL DEFAULT 1,
  `price` int(11) NOT NULL DEFAULT 0,
  `shell` varchar(50) NOT NULL,
  `apartment` varchar(50) DEFAULT NULL,
  `door_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`door_data`)),
  `garage_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`garage_data`)),
  PRIMARY KEY (`property_id`),
  UNIQUE KEY `UQ_owner_apartment` (`owner_citizenid`,`apartment`),
  CONSTRAINT `FK_owner_citizenid` FOREIGN KEY (`owner_citizenid`) REFERENCES `players` (`citizenid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.properties: ~2 rows (approximately)
INSERT INTO `properties` (`property_id`, `owner_citizenid`, `street`, `region`, `description`, `has_access`, `extra_imgs`, `furnitures`, `for_sale`, `price`, `shell`, `apartment`, `door_data`, `garage_data`) VALUES
	(1, 'BKD55994', NULL, NULL, 'This is Tokyo Raven\'s apartment in Integrity Way', '[]', '[]', '[{"type":"storage","rotation":{"z":0.0,"y":-0.0,"x":0.0},"id":"4327621","label":"Storage Unit","position":{"z":-1.4901,"y":-3.67,"x":4.4799},"object":"v_res_tre_storagebox"},{"type":"clothing","rotation":{"z":-91.99999237060549,"y":-0.0,"x":0.0},"id":"4696631","label":"Wardrobe","position":{"z":-1.5101,"y":-1.0484,"x":2.9776},"object":"v_res_tre_wardrobe"},{"rotation":{"x":0.0,"y":-0.0,"z":0.0},"id":"2171481","label":"Lamp AA","position":{"z":-0.73,"y":-5.6,"x":4.22},"object":"v_res_d_lampa"}]', 0, 0, 'Apartment Furnished', 'Integrity Way', '[]', '[]'),
	(6, 'CGT85440', NULL, NULL, 'This is Didi Nana\'s apartment in Morningwood Blvd', '[]', '[]', '[]', 0, 0, 'Apartment Furnished', 'Morningwood Blvd', '[]', '[]');

-- Dumping structure for table upstorydb.stashitems
CREATE TABLE IF NOT EXISTS `stashitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stash` varchar(255) NOT NULL DEFAULT '[]',
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`stash`),
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.stashitems: ~1 rows (approximately)
INSERT INTO `stashitems` (`id`, `stash`, `items`) VALUES
	(3, 'bennys_stash', '[]'),
	(1, 'property_1', '[]'),
	(4, 'property_6', '[]');

-- Dumping structure for table upstorydb.trunkitems
CREATE TABLE IF NOT EXISTS `trunkitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plate` varchar(8) NOT NULL DEFAULT '[]',
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`plate`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.trunkitems: ~0 rows (approximately)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
