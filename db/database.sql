CREATE TABLE IF NOT EXISTS `tickets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `description` text NOT NULL,
  `price` double NOT NULL,
  `category_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

CREATE TABLE IF NOT EXISTS `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(128) NOT NULL,
  `email` varchar(20) NOT NULL,
  `pswd` varchar(120) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

CREATE TABLE IF NOT EXISTS `tickets_categories` (
  `cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(128) NOT NULL,
  `cat_desc` text NOT NULL,
  `ticket_id` int(11) NOT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

ALTER TABLE tickets_categories
ADD FOREIGN KEY (ticket_id) REFERENCES tickets(id);

INSERT INTO members (name, email, pswd)
VALUES ("vkouk", "v.koukoutis@mc-class.gr", "vkoukmc");

INSERT INTO tickets (name, description, price, category_id)
VALUES ("PAOBC - OSFP", "Basket match betwwen PAO - OSFP", 15.00, 0);