CREATE TABLE `leads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`source` varchar(100) NOT NULL DEFAULT 'lead_magnet',
	`resource_downloaded` varchar(255),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `leads_id` PRIMARY KEY(`id`),
	CONSTRAINT `leads_email_unique` UNIQUE(`email`)
);
