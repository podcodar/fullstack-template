//import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
//
//export const testimonialsTable = sqliteTable("testimonials", {
//	id: integer("id").primaryKey(),
//	name: text("name").notNull(),
//	avatarUrl: text("avatarUrl").notNull(),
//	profileUrl: text("profileUrl").notNull(),
//	description: text("description").notNull(),
//});
//
//export type InsertTestimonial = typeof testimonialsTable.$inferInsert;
//export type SelectTestimonial = typeof testimonialsTable.$inferSelect;
//
//export const membersTable = sqliteTable("members", {
//	id: integer("id").primaryKey(),
//	name: text("name").notNull(),
//	role: text("role").notNull(),
//	avatar: text("avatar").notNull(),
//	cover: text("cover").notNull(),
//	github: text("github").notNull(),
//	linkedin: text("linkedin").notNull(),
//});
//
//export type InsertMember = typeof membersTable.$inferInsert;
//export type SelectMember = typeof membersTable.$inferSelect;
