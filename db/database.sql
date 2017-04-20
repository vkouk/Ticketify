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

CREATE TABLE IF NOT EXISTS `member_session` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `session_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `tickets_categories` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(128) NOT NULL,
  `cat_desc` text NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `tickets_cart` (
  `cart_id` int(11) NOT NULL AUTO_INCREMENT,
  `ticket_name` varchar(128) NOT NULL,
  `ticket_description` varchar(128) NOT NULL,
  `ticket_id` int(11) NOT NULL,
  `cat_id` int(11) NOT NULL,
  PRIMARY KEY (`cart_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1;

ALTER TABLE tickets
ADD FOREIGN KEY (category_id) REFERENCES tickets_categories(category_id);

ALTER TABLE tickets_cart
ADD FOREIGN KEY (ticket_id) REFERENCES tickets(id);

ALTER TABLE tickets_cart
ADD FOREIGN KEY (cat_id) REFERENCES tickets_categories(category_id);

ALTER TABLE member_session
ADD FOREIGN KEY (user_id) REFERENCES members(id);

INSERT INTO members (name, email, pswd)
VALUES ("vkouk", "v.koukoutis@mc-class.gr", "vkoukmc");