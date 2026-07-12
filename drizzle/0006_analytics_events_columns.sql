ALTER TABLE `analytics_events` ADD `referrer` varchar(500);
--> statement-breakpoint
ALTER TABLE `analytics_events` ADD `device_type` varchar(16);
--> statement-breakpoint
ALTER TABLE `analytics_events` ADD `country` varchar(2);
