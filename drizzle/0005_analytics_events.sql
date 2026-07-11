CREATE TABLE `analytics_events` (
	`id` int AUTO_INCREMENT NOT NULL,
	`session_id` varchar(64) NOT NULL,
	`event_type` varchar(64) NOT NULL,
	`entity_id` int,
	`entity_type` varchar(32),
	`page_path` varchar(255),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `analytics_events_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE INDEX `analytics_events_event_type_created_at_idx` ON `analytics_events` (`event_type`,`created_at`);
--> statement-breakpoint
CREATE INDEX `analytics_events_session_id_idx` ON `analytics_events` (`session_id`);
