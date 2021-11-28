-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: project
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(45) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Beauty'),(2,'Cellphone'),(3,'Accessories'),(4,'Clothing'),(5,'Shoes'),(6,'Jewelries'),(7,'Sports'),(8,'Toys'),(9,'Games'),(10,'Books');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(320) DEFAULT NULL,
  `description` varchar(320) DEFAULT NULL,
  `price` int NOT NULL,
  `image` varchar(100) DEFAULT NULL,
  `rating` varchar(45) DEFAULT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (11,'theBalm Clean and Green theBalm and the Beautiful Eyeshadow Palette','Introducing The Balm and the Beautiful Episode 2, a distinctly binge-worthy eyeshadow palette featuring eight gorgeous matte and sparkling shades.',29,'https://m.media-amazon.com/images/I/81Dggx3Gy2L._SL1500_.jpg',NULL,1),(12,'CeraVe Moisturizing Cream Body and Face Moisturizer for Dry Skin Body Cream with Hyaluronic Acid and Ceramides, Normal, Fragrance Free','With hyaluronic acid, ceramides and MVE technology for 24 hour hydration. Rich, velvety texture that leaves skin feeling smooth, it is absorbed quickly for softened skin without greasy, sticky, feel.',16,'https://m.media-amazon.com/images/I/61S7BrCBj7L._SL1000_.jpg',NULL,1),(21,'OnePlus Nord N200','5G Unlocked Android Smartphone U.S Version | 6.49\" Full HD+LCD Screen | 90Hz Smooth Display | Large 5000mAh Battery | Fast Charging | 64GB Storage | Triple Camera,Blue Quantum',199,'https://m.media-amazon.com/images/I/71DCZOdq92S._AC_SL1500_.jpg',NULL,2),(22,'Samsung Galaxy A52 5G','Factory Unlocked Smartphone, Android Cell Phone, Water Resistant, 64MP Camera, US Version, 128GB, Black',496,'https://m.media-amazon.com/images/I/81afsli5ctL._AC_SL1500_.jpg',NULL,2),(31,'Battery Case ','Upgraded 6800mAh Extended Rechargeable Charging Case Protective Portable Battery Pack for iPhone 11 External Charging Cover 6.1 inch Smart Case - Black',28,'https://m.media-amazon.com/images/I/61x-jWcpOXL._AC_SL1500_.jpg',NULL,3),(32,'Amazon Basics Dual-Port USB Car Charger Adapter','for Apple and Android Devices, 4.8 Amp, 24W, Black',9,'https://m.media-amazon.com/images/I/51tyP2e0dzL._AC_SL1474_.jpg',NULL,3),(41,'#followme Microfleece Men’s Plaid Pajama Pants with Pockets','DESIGNED FOR COMFORT: These comfy pajama pants are perfect for hitting the sheets or kicking back at home on a lazy weekend. Made from ultra-soft 100% polyester micro fleece, the pajama bottoms feel great against the skin and keep you nice & warm on those chilly nights.',17,'https://m.media-amazon.com/images/I/81gJRRL5f9L._AC_UL480_FMwebp_QL65_.jpg',NULL,4),(42,'Champion Men\'s Powerblend Fleece Pullover Hoodie, Classic Script Logo','Exceptionally soft cotton/polyester blend resists shrinking and pilling. Fabric: 50% Cotton/50% polyester; oxford: 90% cotton/10% polyester.',24,'https://m.media-amazon.com/images/I/61+IOLxlGWL._AC_UL480_FMwebp_QL65_.jpg',NULL,4);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `idProfile` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `sex` varchar(20) NOT NULL,
  `dob` date NOT NULL,
  `phone` varchar(15) NOT NULL,
  `email` varchar(320) NOT NULL,
  `registered_date` datetime NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`idProfile`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `review_text` varchar(3200) NOT NULL,
  `review_time` datetime NOT NULL,
  `overall` varchar(3200) DEFAULT NULL,
  `user_id` int NOT NULL,
  `product_id` int NOT NULL,
  PRIMARY KEY (`review_id`),
  KEY `user_id_idx` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_id_review` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,'Very oily and creamy. Not at all what I expected... ordered this to try to highlight and contour and it just looked awful!!! Plus, took FOREVER to arrive.','2014-01-30 13:00:00','1.0',1,11),(2,'This palette was a decent price and I was looking for a few different shades. This palette conceals decently, however, it does somewhat cake up and crease.','2014-04-18 13:00:00','3.0',2,11),(3,'The texture of this concealer pallet is fantastic, it has great coverage and a wide variety of uses, I guess it\'s meant for professional makeup artists and a lot of the colours are of no use to me but I use at least two of them on a regular basis, and two more occasionally, which is the only reason I\'m giving it for stars, I feel like the range of colors is kind of a waste for me, but the  product itself  is wonderful, it\'s not cakey, gives me a natural for and concealed my imperfections, therefore I highly recommend it','2013-06-09 11:00:00','4.0',3,11),(4,'I really can\'t tell what exactly this thing is. It\'s not powder but a kind of oil-ish pasty fluid. And so far I tried twice but it doesnt really show any color on my face.','2013-12-08 08:00:00','2.0',4,11),(5,'It was a little smaller than I expected, but that was okay because it lasted me for a long time. I think it does great coverage for the price I paid. It is heavy, and wears off within 30-1hr. It kinda dries your skin. I\'d recommend it to people who are just looking for a cheap coverage, or beginners who are just learning to conceal.','2013-10-19 22:00:00','3.0',5,11),(6,'I was very happy to get this palette, now I wish it was offered in subscription form like some of the makeup we use daily is.  In this unnamed set you can do a lot of blending, sculpting, highlighting and concealing.  The product is nicely pigmented, it\'s smooth and applies well then blends out beautifully. I have normal to dry skin as I\'m 59 years, this works wonderfully under my foundation.  I also use a silicone based primer,which works well for my skin type to give me the fresh, dewy look I love.You get a good amount of product for your money here, so this is well worth the cost.  What more can you say, if one is willing to repurchase a product then that says more than mere words.','2013-04-15 05:00:00','5.0',6,11),(7,'PLEASE DONT DO IT! this just rachett the palette size is not like in the picture, the colors go on sheer, slides on face like wax don\'t expect  your makeup to stay put with this one. just spend the money for the good stuff. 2 thumbs down','2013-08-16 11:40:00','1.0',7,11),(8,'Chalky,Not Pigmented,Wears off easily,Not a Coastal Scents Dupe,Too many highlighter colors,Does not show up on dark skinned women.I would not recommend.The coastal scents is currently on sale. It\'s worth the few extra bucks.','2013-09-04 04:00:00','2.0',8,11),(9,'Did nothing for me. Stings when I put it on. I used the whole tube and it just did nothing, no Lightening, no Brightening,......NOTHING. Also it tends to dry out my skin and made my face feel weird the next day. I stuck with it hoping it would LIGHTEN,.....but it didn\'t','2014-07-13 11:10:00','2.0',11,12),(10,'I bought this product to get rid of the dark spots I had on my face due to acne scars and it did help a bit.My dark spots aren\'t quite as noticeable but they\'re still there.I saw a lot of good reviews on this product, I wish it would have worked better.','2013-12-27 00:01:00','3.0',4,12),(11,'I have mixed feelings about this product. When I first started using it, I can see and feel the difference. It actually started to literally peel the dark skin away. There\'s a bit of a sting but that\'s how I know it was working. My skin was lighter in just a couple weeks! However, once I\'ve stopped using it when I reached my desired skin color, it went back to being dark. I applied more and suddenly it was no longer working. It didn\'t peel or sting. I wonder what went wrong or if it has an expiration date or something. Overall, it works but definitely not consistent.','2014-05-20 05:30:00','3.0',10,12),(12,'Did nothing for my skin. Used as suggested and no signs of brightness. Wish it worked for me, but it didn\'t.','2014-02-18 06:00:00','1.0',9,12),(13,'I bought this product about 3 months ago, I finished my tube of xtreme  brite, as soon as I was almost done with the product I started seeing results. As I applied the gel in a circular motion i was doing so, I started to see dirt like skin come off. It was incredible :) as of today my arm pits are still white, well as they should look.','2014-01-23 07:00:00','5.0',1,12),(14,'This skincare did nothing at all. I religiously put it on specific areas for weeks and nothing changed. DON\'T WASTE YOUR TIME','2014-01-11 02:00:00','1.0',5,12),(15,'i got this to get rid of a scar and it did just that, if you are looking to remove any discoloration (spot) this will get rid of it, i dont know about putting it all over your face but it def work for a spot','2014-02-18 15:05:00','5.0',3,12),(16,'I used it for anal bleaching and it burned a bit there are no directions on it about time and how long to wear it','2014-04-06 14:00:00','2.0',7,12),(17,'I order this cream along with their soap. It actually worked for me but after I finished the tube, I ordered different brand just to get quicker results (BAD IDEA). I am definitely ordering 3 more tubes so that my underarm pigment gets treated completely.','2013-09-14 09:00:00','5.0',2,12),(18,'Good product. Use a little bit on your spot and the next day its already shedding the first layer of skin. By the 3 rd day the spot is almost gone. Cant get these results from the most expensive products','2013-10-18 10:00:00','4.0',6,12),(19,'I didn\'t use it past a week. The reason why is that it\'s smelled kind of funny. will look for another product that doesn\'t smell so perfumy.','2013-11-01 17:30:00','3.0',8,12),(20,'It phone make calls','2021-10-30 10:40:00','5.0',1,21),(21,'This is a Super Nice phone. It has an advanced technology, operating system, function, and the fingerprint reader works better than any phone I\'ve had. Having said that, it\'s very easy to setup. I have AT&T as my carrier, I just swaped the sim card from my old phone and it was ready to setup. Keep in mind this phone does have a Setup Wizard which guides you throught the process. It does have a slot for expandable memory. ','2021-11-22 12:30:00','5.0',2,21),(22,'This phone is pretty much a disappointment. I\'ve owned a number of iPhones and Android devices in the past, from $800+ devices down to $200 phones like this one. I cannot recall when was the last time I had such a terrible phone. After a month of use, I\'m throwing it in the trash to buy another. Money wasted.','2021-10-22 12:30:00','1.0',3,21),(23,'This phone is not unlocked. It is T-Mobile Only. I have sprint, and even though they are a merged company they can not activate it, even with giving me a T-Mobile/Sprint SIM card. Sprint users- do not buy this phone. I can\'t speak for anyone else, but it definitely will not work for Sprint.','2020-05-15 12:30:00','1.0',4,21),(24,'Seems great so far. New 5G tower about 100 feet from the house so it always getting 5 bars now. It\'s heavy but the price for a mega sized battery. ','2015-11-20 01:40:00','4.0',5,21),(25,'09/14/21 Update on drags and slows sometimes. There is a video on YouTube on how to erase the cache. This works.','2021-09-14 08:00:00','4.0',6,21),(26,'I’m an iPhone user who bought this phone as a backup. I love the design the battery life and the user interface. It has a 90hz display by the cpu is the bottleneck and it’s more janky than my old iPhone X. The camera is also bad, despite there are 3 of them…..','2021-08-11 09:00:00','3.0',7,21),(27,'If you are looking for a solid 5G phone this is the one to get. Not only is it one of the cheaper 5G phones you can get. It also sports a huge battery. I would say I am a light to moderate user and I have pushed the phone to get 3 days on a single charge with charge left to spare. My last phone, Moto G7, I was lucky to get a day and a half of usage.','2021-09-28 10:00:00','5.0',8,21),(28,'Actually, it\'s a really great phone, with features I have not seen on other phones. Or maybe that\'s the 5G? Only issue I have is when the USB port gives a \"liquid or debris\" message and stops working. Other than that, it\'s fast, intuitive, very nice looking, and wasn\'t very pricey. Very pleased.','2021-09-26 11:00:00','5.0',9,21),(29,'First of all, I am a techy type of person and I did not want to spend 1,000 or more on a Flagship Samsung Phone. I decided to purchase the Samsung A52 5G Phone. I purchased it a brick and mortar store close to my home. I placed my existing AT&T Sim Card in it and it worked beautifully.','2021-05-06 12:00:00','5.0',10,22),(30,'Very nice phone, sleep and stylish. Would have given it a 4 stars if it was as described. Purchased this phone because it says unlocked. Traveled overseas with it and could not use it. Even it says unlocked it was not.','2021-07-06 13:00:00','1.0',11,22),(31,'Ordered this item Expecting to receive a phone as it states in the description. I received a phone case. The case I received isn\'t even for the phone described.','2021-05-29 14:00:00','1.0',12,22),(32,'The quality of the pictures with this phone is awful! It reminds me to my very old phone from 2005. The phone only looks modern but in reality is just and old device','2021-05-30 15:00:00','1.0',13,22),(33,'Horrible. I unfortunately had bad luck. Speaker doesnt work. I had to call Amazon and Samsung and wasted so much time . Samsung sent me with U break I fix and of course at that time the speaker wasn\'t acting up. I get home and can\'t listen to anything because the speaker sounds just horrible. Worst investment every. Has LG and regret this purchase .','2021-07-09 16:00:00','1.0',1,22),(34,'Bought the phone to go with Mint mobile. Phone was locked! Phone would not recognized SIM cards. Called customer service they are sending me a new phone. I will update when it arrives.','2021-07-12 17:00:00','1.0',2,22),(35,'The glass must be cheap because it came with a scratch in it, even though there was filmed wrapped around the device. I had screen protectors ready to put on the phone as soon as I opened it so i was disappointed. The device itself seems okay but I didn’t get to use it that much.','2021-05-09 18:00:00','3.0',3,22),(36,'This phone is good the only problem I have is it\'s only 32gb not 128gb','2021-05-22 19:00:00','3.0',4,22),(37,'WRONG DESCRIPTION!The description says US version but it\'s actually the International version. It has two card slots.','2021-07-07 20:00:00','2.0',5,22),(38,'Perfect i did a lot of research. Almost went to iPhone but this phone has met and exceeded all my expectations.','2021-04-26 05:00:00','5.0',6,22),(39,'The best 5G phone for under $500 available. Very fast excellent battery life and stereo speakers. Charging is very quick with the included charger. Has most of the bells and whistles of 5G phones costing $1000 or more.','2021-05-06 06:00:00','5.0',7,22),(40,'Great phone. Wish it had wireless charging. Nice keyboard. Great camera. Long battery life. Buying another one.','2021-06-11 07:00:00','5.0',8,22),(41,'it worked for the first week then it only charge my phone to 20%. it is a waste of money.','2013-11-21 08:00:00','1.0',9,31),(42,'Good case, solid build. Protects phone all around with good access to buttons. Battery charges with full battery lasts me a full day. I usually leave my house around 7am and return at 10pm. I\'m glad that it lasts from start to end. 5/5','2013-09-25 09:00:00','5.0',10,31),(43,'This is a fantastic case. Very stylish and protects my phone. Easy access to all buttons and features, without any loss of phone reception. But most importantly, it double power, just as promised. Great buy','2014-04-03 10:00:00','5.0',11,31),(44,'this case fits perfectly on the s4 and keeps me powerd all day I can\'t complain! a+ recommend it to all','2014-03-13 11:00:00','5.0',12,31),(45,'This is the first battery case I have had for my Galaxy S4. The S4 fits very well, is slim and doesn\'t add much weight to the Galaxy S4. It doubles the battery life. You can charge either the battery, the phone or both. There is a handy on-off switch with leds to indicate the level of charge.The battery case came on time and was packaged well. Well worth the price.','2013-11-20 12:00:00','5.0',13,31),(46,'Performs exactly as advertised . It\'s very  sturdily built,and provides lots of boost . It does exactly what it\'s supposed too .Easy to insert phone in and out . Definitely a 5 star experience. Don\'t know what I would do without this case LOVE LOVE LOVE it.','2013-12-05 13:00:00','5.0',1,31),(47,'Just what I needed. I needed a phone case for myself and my two sons, but I also needed new replacement batteries. Now this isn\'t the case, since I got both in one. Awesome thanks A+','2014-02-21 14:00:00','5.0',2,31),(48,'When there is no outlets, or chargers near by its Powerbear to the rescue! Ordered one for my husband, and myself. Great purchase!!','2014-04-18 15:00:00','5.0',3,31),(49,'It works great. Doesn\'t heat up like crazy like the other ones I got, and cheaper too! Its definetly the best power case for the S4 you can get, thats why I got one for me and my wife. I wonder why its called power bear..','2013-08-25 16:00:00','5.0',4,31),(50,'Surprisingly, this inexpensive version works just as well and just as reliably as the expensive variety. It has been working for me for months now. No problem. Excellent value.','2013-05-11 17:00:00','5.0',5,32),(51,'I have tested this against the griffin dual output unit.I checked the charging current.This unit was charging my galaxy note battery with 70 ma.Griffin was charging with 40 ma! And the griffin was 4 times more expensive.I have not used these for very long. I bought 15 of them, because they are so cheap and because they actually do seem to provide high current.No idea how long they last. I assume they will work fine. I have not been using them much. I did the testing , just to stock up on a high current charger. This passed and I stocked up.','2012-09-19 16:45:00','5.0',6,32),(52,'It worked great for the first couple of weeks then it just stopped completely.. so basically a small waste of money.','2013-05-29 18:00:00','1.0',7,32),(53,'I love that it has two ports for my phone and ipod. Who wants to be putting too many things in one socket.  Sleek and convenient to store and I just love it.','2014-06-06 19:00:00','5.0',8,32),(54,'just what you need, I am always having to charge my phone and then find I have another item to charge also.','2013-11-29 20:00:00','5.0',9,32),(55,'does not have the need amps to charge things like ipads, or hp touchpads. but its super small and compact.','2013-05-18 09:30:00','3.0',10,32),(56,'They are nothing special for sure, but it\'s nice that you can tell when it is powered up by the led that glows in it.  able to charge two phones at once in the car which is nice.','2014-06-08 09:40:00','4.0',11,32),(57,'I have several chargers. Have more than one vehicle so I keep more than one of these in each. Nothing more frustrating than finding all of a sudden one quits working, and you have no way to recharge your phone. That is always when you need it most.  This one works well for any of my products.','2014-01-11 10:20:00','4.0',12,32),(58,'I bought this a little skeptical. After I tried it I bought two more. It works great and so far it has lasted for about 3 months. If that changes I will update this review.','2013-09-21 11:10:00','5.0',13,32),(59,'I am disappointed that the 1A didn\'t work with my iPad.  That\'s what I get for buying a cheap adapter.','2014-06-23 12:00:00','2.0',14,32),(60,'This is a nice charger but you can tell it was made cheaply in China.  When it is charging the phone, the car radio gets LOTS of static.  Not so much that I have to stop charging but like when you are near power lines and the radio station is far away.So, no RF shielding.I gave it 4 stars because it works fine for me, but if you listen to the radio, you might consider it is more like 2 or 3 stars.','2013-03-20 13:50:00','4.0',15,32),(61,'After a week only one side works','2014-07-03 14:00:00','2.0',16,32),(62,'Yo get exactly what you order in a timely fashion. And the item is just as described. Great buy if you ask me','2013-02-07 15:00:00','4.0',17,32),(63,'These fit great, maybe a little on the large side, but they’re pj’s, we wanted them a little loose n comfy!! Material is sooo soft. It’s fleece not flannel as I first thought! Design is great n vibrant too. They’ve only been washed a few times so far, but they washed n dried great!','2019-11-13 10:20:00','5.0',1,41),(64,'The pants are soft and I\'m sure will be comfy however they weren\'t even sewn up completely. See picture. There\'s a whole 2 inches not sewn up.','2018-11-27 00:00:00','2.0',2,41),(65,'Super comfy, but definitely on the larger size. My husband is usually a L, ordered him an L and he definitely would have done better with an M. Love that they have pockets. Only using for Christmas pictures so luckily the L will do! Also - they are very long. Be prepared to roll them a few times unless you’re above 6ft.','2018-11-17 01:10:00','4.0',3,41),(66,'These are awesome!!! Very soft to the skin and super comfortable. And very warm. The only negative thing I can say is that they are a little long. I am 34w/32L and got the medium. I roll up the bottom a little bit.','2017-12-08 02:00:00','4.0',4,41),(67,'Before they\'d even been washed or worn, these pants had a 4 inch hole in the inseam. It basically looks like the fabric wasn\'t lined up during the sewing process. When I looked into getting a replacement sent, Amazon indicated that I would need to return this pair to get a hole- free replacement, which I feel is a hassle customers shouldn\'t have to go through for a defective product.','2019-11-29 03:00:00','1.0',5,41),(68,'The pants came with a rip/weren’t stitched on one of the legs.','2018-11-15 04:00:00','1.0',6,41),(69,'Husband said they fit tight in the waist so I measured them up against similar ones I bought at Kohls and Penneys and these are 2 inches smaller in the waist so now I have to return. Fabric is soft but thinner than other brands of microfleece pants my husband owns. Know that going in and order a size up and they\'re okay for the price.','2017-11-14 05:00:00','3.0',7,41),(70,'I bought these for my son for Christmas and I\'m thinking about stealing them from him, lol These pants are ridiculously soft and comfortable. They\'ve been washed/dried several times now and are holding up well. Sometimes fleece gets kind of crummy after being washed and dried, but these are still awesomely soft and fuzzy. Nice pants! They seem to be a bit big though...I ordered a large and they fit more like an extra large. Otherwise, they\'re awesome!','2018-01-13 06:00:00','5.0',8,41),(71,'I bought size medium based on husbands waist size. I have to return them both because they’re too short. Medium fit his waist size, but not his height of 6’1.','2020-10-04 07:00:00','5.0',9,41),(72,'I bought these for our family photos and they were a hit! Super soft, warm, and long enough for us. And they have pockets!','2020-10-05 08:00:00','5.0',10,41),(73,'Great! I love them. Very soft and comfortable. A bit tight around the waist, but probably says more about how fat I am then about the product. Still, very satisfied and will definitely buy again.','2017-08-09 09:00:00','5.0',11,41),(74,'I ordered This for my self. I’m a femaleI . I wanted pockets In pajama pants and couldn’t find any . liked the warmth of the material , ant it’s not heavy. My husband wants a pair of them now!','2020-10-01 10:00:00','4.0',12,41),(75,'My daughter got hers for Christmas. She wouldn’t take it off. She was in fortunately killed 2 days after Christmas. She loved it so much that we had the hoodie cremated with her. RIP Faith Villanueva','2020-01-03 11:00:00','5.0',13,42),(76,'I really love this hoodie not to small not to big I got a small and it fits just right it arrived on time and the quality it good 100% satisfied','2019-07-24 12:00:00','4.0',14,42),(77,'Authentic, good quality. Bought the men’s small for my daughter. She is 5’6”, 130lbs. Good comfortable relaxed fit, as you can see.','2019-11-23 13:00:00','5.0',15,42);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sentimental_keyword`
--

DROP TABLE IF EXISTS `sentimental_keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sentimental_keyword` (
  `keyword_id` int NOT NULL AUTO_INCREMENT,
  `polarity` varchar(45) NOT NULL,
  PRIMARY KEY (`keyword_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sentimental_keyword`
--

LOCK TABLES `sentimental_keyword` WRITE;
/*!40000 ALTER TABLE `sentimental_keyword` DISABLE KEYS */;
/*!40000 ALTER TABLE `sentimental_keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(45) NOT NULL,
  `username` varchar(45) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'123','phong'),(2,'123','quang'),(3,'123','dat'),(4,'123','khanh'),(5,'123','phuc'),(6,'123','cong'),(7,'123','linh'),(8,'123','minh'),(9,'123','khoa'),(10,'123','duy'),(11,'123','ha'),(12,'123','long'),(13,'123','lam'),(14,'123','nhi'),(15,'123','nghiep'),(16,'123','hai'),(17,'123','hoa');
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

-- Dump completed on 2021-11-28 11:28:33
