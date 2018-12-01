/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : testchat

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-12-01 17:35:25
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `chattblusers`
-- ----------------------------
DROP TABLE IF EXISTS `chattblusers`;
CREATE TABLE `chattblusers` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(200) DEFAULT NULL,
  `MailId` varchar(255) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `CreatedDate` varchar(255) DEFAULT NULL,
  `CreatedBy` varchar(255) DEFAULT NULL,
  `UpdatedDate` varchar(255) DEFAULT NULL,
  `UpdatedBy` varchar(255) DEFAULT NULL,
  `Status` int(11) DEFAULT '1',
  `Role` int(11) DEFAULT '1',
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of chattblusers
-- ----------------------------
INSERT INTO chattblusers VALUES ('1', 'Subin Rabin', 'subinrabin@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', null, null, null, null, '1', '1');
INSERT INTO chattblusers VALUES ('2', 'Neethu', 'jollyjohnsonneethu@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', null, null, null, null, '1', '1');
INSERT INTO chattblusers VALUES ('3', 'Jibi John David', 'jibijohndavid@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', null, null, null, null, '1', '1');
