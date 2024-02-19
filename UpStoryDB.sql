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

-- Dumping data for table upstorydb.apartments: ~1 rows (approximately)
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.bank_accounts: ~0 rows (approximately)

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
	('qbit', 996, '[{"PreviousWorth":1000,"NewWorth":999},{"PreviousWorth":999,"NewWorth":999},{"PreviousWorth":999,"NewWorth":996},{"PreviousWorth":996,"NewWorth":996}]');

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
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.players: ~2 rows (approximately)
INSERT INTO `players` (`id`, `citizenid`, `cid`, `license`, `name`, `money`, `charinfo`, `job`, `gang`, `position`, `metadata`, `inventory`, `last_updated`) VALUES
	(1, 'BKD55994', 1, 'license:d1fabd5c6707fdb5ad9f4d6adc03d5b10d7fb139', 'sugaa', '{"cash":500,"crypto":0,"bank":5110}', '{"cid":1,"phone":"5289346568","birthdate":"2001-11-18","account":"US02QBCore3381368599","firstname":"Tokyo","backstory":"placeholder backstory","gender":1,"lastname":"Raven","nationality":"Portugal"}', '{"isboss":false,"name":"unemployed","label":"Civilian","payment":10,"grade":{"name":"Freelancer","level":0},"type":"none","onduty":true}', '{"isboss":false,"grade":{"name":"none","level":0},"name":"none","label":"No Gang Affiliaton"}', '{"x":-1084.931884765625,"y":-789.3626098632813,"z":19.2711181640625}', '{"criminalrecord":{"hasRecord":false},"phone":[],"hunger":45.39999999999995,"callsign":"NO CALLSIGN","status":[],"ishandcuffed":false,"thirst":50.60000000000003,"dealerrep":0,"phonedata":{"InstalledApps":[],"SerialNumber":14625933},"injail":0,"walletid":"QB-37492843","fingerprint":"bq619J95lnw4784","attachmentcraftingrep":0,"isdead":false,"tracker":false,"bloodtype":"O-","inside":{"apartment":[]},"armor":0,"craftingrep":0,"fitbit":[],"jobrep":{"hotdog":0,"tow":0,"trucker":0,"taxi":0},"jailitems":[],"stress":0,"licences":{"driver":true,"business":false,"weapon":false},"inlaststand":false}', '[{"name":"driver_license","type":"item","amount":1,"slot":1,"info":{"birthdate":"2001-11-18","firstname":"Tokyo","lastname":"Raven","type":"Class C Driver License"}},{"name":"phone","type":"item","amount":1,"slot":2,"info":[]},{"name":"id_card","type":"item","amount":1,"slot":3,"info":{"birthdate":"2001-11-18","nationality":"Portugal","citizenid":"BKD55994","firstname":"Tokyo","gender":1,"lastname":"Raven"}},{"name":"weapon_pistol","type":"weapon","amount":1,"slot":4,"info":{"quality":97.59999999999993,"ammo":104,"serie":"96sDh6Ja088FecW"}},{"name":"radio","type":"item","amount":1,"slot":5,"info":[]}]', '2024-02-19 17:22:45'),
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Dumping data for table upstorydb.playerskins: ~1 rows (approximately)
INSERT INTO `playerskins` (`id`, `citizenid`, `model`, `skin`, `active`) VALUES
	(1, 'BKD55994', 'mp_f_freemode_01', '{"eyeColor":3,"props":[{"texture":-1,"drawable":-1,"prop_id":2},{"texture":-1,"drawable":-1,"prop_id":7},{"texture":0,"drawable":-1,"prop_id":0},{"texture":0,"drawable":-1,"prop_id":1},{"texture":0,"drawable":-1,"prop_id":6}],"headBlend":{"thirdMix":0,"shapeMix":0.7,"shapeFirst":45,"skinFirst":12,"shapeSecond":25,"skinSecond":29,"shapeThird":0,"skinMix":0,"skinThird":0},"tattoos":[],"faceFeatures":{"cheeksWidth":0,"jawBoneBackSize":0,"chinBoneLenght":0,"jawBoneWidth":-0.3,"nosePeakSize":0,"nosePeakLowering":0.1,"chinHole":0,"noseBoneTwist":0,"eyeBrownForward":0,"chinBoneSize":0,"chinBoneLowering":0,"cheeksBoneHigh":0,"nosePeakHigh":0.2,"eyesOpening":0,"eyeBrownHigh":0,"cheeksBoneWidth":0,"neckThickness":0.2,"noseWidth":-0.4,"lipsThickness":-0.7,"noseBoneHigh":0.4},"components":[{"texture":0,"component_id":0,"drawable":0},{"texture":0,"component_id":2,"drawable":0},{"texture":2,"component_id":4,"drawable":304},{"texture":0,"component_id":11,"drawable":716},{"texture":0,"component_id":8,"drawable":416},{"texture":2,"component_id":7,"drawable":249},{"texture":0,"component_id":3,"drawable":304},{"texture":2,"component_id":6,"drawable":225},{"texture":7,"component_id":10,"drawable":18},{"texture":0,"component_id":5,"drawable":35},{"texture":0,"component_id":9,"drawable":0},{"texture":0,"component_id":1,"drawable":295}],"hair":{"style":94,"highlight":9,"color":20,"texture":0},"model":"mp_f_freemode_01","headOverlays":{"eyebrows":{"style":11,"color":0,"opacity":1,"secondColor":0},"ageing":{"style":0,"color":0,"opacity":0,"secondColor":0},"lipstick":{"style":4,"color":7,"opacity":0.5,"secondColor":0},"beard":{"style":0,"color":0,"opacity":0,"secondColor":0},"makeUp":{"style":14,"color":56,"opacity":1,"secondColor":10},"blush":{"style":2,"color":6,"opacity":0.5,"secondColor":0},"moleAndFreckles":{"style":0,"color":0,"opacity":0.7,"secondColor":0},"blemishes":{"style":0,"color":0,"opacity":0,"secondColor":0},"complexion":{"style":0,"color":0,"opacity":0,"secondColor":0},"bodyBlemishes":{"style":0,"color":0,"opacity":0,"secondColor":0},"chestHair":{"style":0,"color":0,"opacity":0,"secondColor":0},"sunDamage":{"style":0,"color":0,"opacity":0,"secondColor":0}}}', 1),
	(2, 'XVR60631', 'mp_m_freemode_01', '{"tattoos":[],"hair":{"style":0,"texture":0,"highlight":0,"color":0},"eyeColor":0,"props":[{"texture":-1,"drawable":-1,"prop_id":0},{"texture":-1,"drawable":-1,"prop_id":1},{"texture":-1,"drawable":-1,"prop_id":2},{"texture":-1,"drawable":-1,"prop_id":6},{"texture":-1,"drawable":-1,"prop_id":7}],"headBlend":{"skinThird":0,"shapeThird":0,"skinMix":0,"shapeFirst":0,"shapeMix":0,"thirdMix":0,"shapeSecond":0,"skinSecond":0,"skinFirst":0},"faceFeatures":{"chinBoneSize":0,"lipsThickness":0,"cheeksBoneHigh":0,"nosePeakSize":0,"nosePeakHigh":0,"noseWidth":0,"noseBoneTwist":0,"noseBoneHigh":0,"cheeksBoneWidth":0,"chinBoneLenght":0,"eyesOpening":0,"eyeBrownHigh":0,"chinBoneLowering":0,"eyeBrownForward":0,"neckThickness":0,"jawBoneWidth":0,"nosePeakLowering":0,"cheeksWidth":0,"jawBoneBackSize":0,"chinHole":0},"components":[{"texture":0,"drawable":0,"component_id":0},{"texture":0,"drawable":0,"component_id":1},{"texture":0,"drawable":0,"component_id":2},{"texture":0,"drawable":0,"component_id":3},{"texture":0,"drawable":0,"component_id":4},{"texture":0,"drawable":0,"component_id":5},{"texture":0,"drawable":0,"component_id":6},{"texture":0,"drawable":0,"component_id":7},{"texture":0,"drawable":0,"component_id":8},{"texture":0,"drawable":0,"component_id":9},{"texture":0,"drawable":0,"component_id":10},{"texture":0,"drawable":0,"component_id":11}],"model":"mp_m_freemode_01","headOverlays":{"eyebrows":{"opacity":0,"secondColor":0,"style":0,"color":0},"sunDamage":{"opacity":0,"secondColor":0,"style":0,"color":0},"moleAndFreckles":{"opacity":0,"secondColor":0,"style":0,"color":0},"lipstick":{"opacity":0,"secondColor":0,"style":0,"color":0},"complexion":{"opacity":0,"secondColor":0,"style":0,"color":0},"ageing":{"opacity":0,"secondColor":0,"style":0,"color":0},"chestHair":{"opacity":0,"secondColor":0,"style":0,"color":0},"makeUp":{"opacity":0,"secondColor":0,"style":0,"color":0},"bodyBlemishes":{"opacity":0,"secondColor":0,"style":0,"color":0},"blemishes":{"opacity":0,"secondColor":0,"style":0,"color":0},"beard":{"opacity":0,"secondColor":0,"style":0,"color":0},"blush":{"opacity":0,"secondColor":0,"style":0,"color":0}}}', 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.player_outfits: ~0 rows (approximately)

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

-- Dumping structure for table upstorydb.stashitems
CREATE TABLE IF NOT EXISTS `stashitems` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stash` varchar(255) NOT NULL DEFAULT '[]',
  `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`stash`),
  KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table upstorydb.stashitems: ~0 rows (approximately)

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
