import { Router } from "express";
import { Database } from "sqlite3";

import type { RouteHandler } from "../types/handler";

export class Errors implements RouteHandler {
	constructor(private readonly database: Database) {}

	getHandler(): Router {
		return Router()
			.get("", (req, res) => {
            })
			.get("/:id", (req, res) => {
            });
	}
}
