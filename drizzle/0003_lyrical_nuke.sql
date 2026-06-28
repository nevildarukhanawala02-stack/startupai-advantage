CREATE TABLE `blog_posts` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(500) NOT NULL,
	`slug` varchar(255) NOT NULL,
	`body` text NOT NULL,
	`excerpt` text,
	`type` varchar(50) NOT NULL DEFAULT 'article',
	`author` varchar(255) NOT NULL DEFAULT 'Nevil Darukhanawala',
	`header_image_url` text,
	`series` varchar(255),
	`brand_pillar` varchar(255),
	`publish_order` int,
	`published_at` bigint NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `blog_posts_id` PRIMARY KEY(`id`),
	CONSTRAINT `blog_posts_slug_unique` UNIQUE(`slug`)
);
