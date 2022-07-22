-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: ejercicio
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `empleados`
--

DROP TABLE IF EXISTS `empleados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empleados` (
  `id_emp` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(20) NOT NULL,
  `apellido` varchar(20) NOT NULL,
  `trabajo` varchar(100) DEFAULT NULL,
  `edad` int NOT NULL,
  `salario` decimal(10,2) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_emp`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empleados`
--

LOCK TABLES `empleados` WRITE;
/*!40000 ALTER TABLE `empleados` DISABLE KEYS */;
INSERT INTO `empleados` VALUES (1,'Juan','Hagan','Programador Senior',32,120000.00,'juan_hagan@bignet.com'),(2,'Gonzalo','Pillai','Programador Senior',32,110000.00,'g_pillai@bignet.com'),(3,'Ana','Dharma','Desarrollador Web',27,90000.00,'ana@bignet.com'),(4,'Maria','Anchor','Desarrollador Web',26,85000.00,'mary@bignet.com'),(5,'Alfred','Fernandez','Programador',31,75000.00,'af@bignet.com'),(6,'Juan','Agüero','Programador',36,85000.00,'juan@bignet.com'),(7,'Eduardo','Sacan','Programador',25,85000.00,'eddi@bignet.com'),(8,'Alejandro','Nanda','Programador',32,70000.00,'alenanda@bignet.com'),(10,'Pablo','Simon','Especialista Multimedia',43,85000.00,'ps@bignet.com'),(11,'Arturo','Hernandez','Especialista Multimedia',32,75000.00,'arturo@bignet.com'),(12,'Jimena','Cazado','Diseñador Web',32,110000.00,'jimena@bignet.com'),(13,'Roberto','Luis','Administrador de sistemas',35,100000.00,'roberto@bignet.com'),(14,'Daniel','Gutierrez','Administrador de sistemas',34,90000.00,'daniel@bignet.com'),(15,'Miguel','Harper','Ejecutivo de Ventas Senior',36,120000.00,'miguel@bignet.com'),(16,'Monica','Sanchez','Ejecutivo de ventas',30,90000.00,'monica@bignet.com'),(17,'Alicia','Simlai','Ejecutivo de ventas',27,70000.00,'alicia@bignet.com'),(18,'Jose','Iriarte','Ejecutivo de ventas',27,72000.00,'jose@bignet.com'),(19,'Sabrina','Allende','Gerente de Soporte tecnico',32,200000.00,'sabrina@bignet.com'),(20,'Pedro','Campeon','Gerente de finanzas',36,220000.00,'pedro@bignet.com'),(21,'Mariano','Dharma','Presidente',28,300000.00,'mariano@bignet.com'),(22,'Francisco','Perez','Programador',26,90000.00,'francisco@bignet.com'),(23,'Juan','Lopez','docente',38,1500.00,'juanlopez@gmail.com');
/*!40000 ALTER TABLE `empleados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'ejercicio'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-22  0:04:04
