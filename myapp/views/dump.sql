-- MySQL dump 10.13  Distrib 5.7.20, for Linux (x86_64)
--
-- Host: localhost    Database: fa17g02
-- ------------------------------------------------------
-- Server version	5.7.20-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `listing`
--

DROP TABLE IF EXISTS `listing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `listing` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `City` varchar(30) DEFAULT NULL,
  `State` varchar(30) DEFAULT NULL,
  `Zip` int(11) DEFAULT NULL,
  `Image` varchar(100) DEFAULT NULL,
  `Address` varchar(100) DEFAULT NULL,
  `Price` varchar(30) DEFAULT NULL,
  `Bedrooms` int(11) DEFAULT NULL,
  `Bathrooms` int(11) DEFAULT NULL,
  `AgentName` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listing`
--

LOCK TABLES `listing` WRITE;
/*!40000 ALTER TABLE `listing` DISABLE KEYS */;
INSERT INTO `listing` VALUES (1,'San Francisco','CA',94132,'business.jpg','1600 Holloway Avenue','$150000',2,2,NULL),(2,'San Francisco','CA',94103,'downtown.jpg','835 Market Street','$350000',4,6,NULL),(3,'Daly City','CA',94105,'library.jpg','355 Daly City','$55000',3,6,NULL),(4,'San Jose','CA',95110,'cesarChavez.jpg','1024 Monterey Road','$55000',4,4,NULL),(5,'Austin','TX',92133,'fine_arts.jpg','101 Lakeway','$15000',1,2,NULL),(6,'San Francisco','CA',94134,'downdload.jpg','150 Font Blvd','9999',4,3,NULL),(7,'San Francisco','CA',94136,'download.jpg','150 Font Blvd','9999',4,3,NULL),(8,'San Francisco','CA',94132,'download.jpg','100 Font Blvd','10001',2,2,NULL),(9,'San Francisco','CA',94132,'19066376476_a441db39bf_z.jpg','106 Garces Drive','12000',5,4,NULL),(10,'San Jose','CA',95125,'humanities-bldg-400x240.jpg','115 Lennon Way','20000',2,2,NULL),(11,'san francisco','ca',94015,'library.jpg','1520 Junipero st','50000000',100,50,NULL),(12,'San Jose','CA',95125,'undergrad-resources.jpg','150 Font Blvd','100',2,1,NULL),(13,'Los Angeles','CA',90001,'123.jpg','125 WestWood blvd','12312',3,1,NULL),(14,'San Jose','CA',95192,'hmcarchitects.jpg','253 Washington Sq','26000',7,7,NULL),(15,'San Jose','CA',94134,'83fd39f409d12f32038ca06db8086f6d--san-francisco-state-university-art-centers.jpg','3655 N 1st St','300000',4,3,NULL);
/*!40000 ALTER TABLE `listing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(30) DEFAULT NULL,
  `LastName` varchar(30) DEFAULT NULL,
  `Email` varchar(30) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Role` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'test','test','test@test.com','test','Buyer'),(2,'Savan','Patel','savan.p.755@gmail.com','12345','Seller');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-12-18  4:42:06
