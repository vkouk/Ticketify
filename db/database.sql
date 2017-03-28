CREATE TABLE IF NOT EXISTS `tickets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `price` double NOT NULL,
  `category_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `email` varchar(20) NOT NULL,
  `pswd` varchar(120) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `tickets_categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(128) NOT NULL,
  `cat_desc` text NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

ALTER TABLE tickets
ADD FOREIGN KEY (category_id) REFERENCES tickets_categories(category_id);

INSERT INTO members (name, email, pswd)
VALUES ("vkouk", "v.koukoutis@mc-class.gr", "vkoukmc");

INSERT INTO tickets_categories (cat_name, cat_desc)
VALUES ("Sports", "All Sport Tickets.");

INSERT INTO tickets_categories (cat_name, cat_desc)
VALUES ("Movies", "All Movies Tickets.");

INSERT INTO tickets (name, description, price, category_id)
VALUES ("PAOBC - OSFP", "Basket match betwwen PAO - OSFP", 15.00, 1);

INSERT INTO tickets (name, description, price, category_id)
VALUES ("Batman", "Batman vs Superman", 20.00, 2);