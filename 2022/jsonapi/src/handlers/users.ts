import { Router } from "express";
import { Database } from "sqlite3";

import { Just, Nothing } from "../util/guards";
import { ResponseSuccess } from "../util/api/ResponseSuccess";
import { ResponseFail } from "../util/api/ResponseFail";
import { ResponseMeta } from "../util/api/ResponseMeta";
import { ResponseMessage } from "../util/api/ResponseMessage";

import type { RouteHandler } from "../types/handler";

export class Users implements RouteHandler {
	constructor(private readonly database: Database) {}

	getHandler(): Router {
		return Router()
			.get("/", (req, res) => {
				this.database.all(
					"SELECT * FROM users",
					(err: Maybe<Error>, rows: UserEntity[]) => {
						if (Just(err)) {
							return res.json(
								new ResponseFail(
									new ResponseMeta(
										500,
										"qmk-1",
										"error",
										new ResponseMessage(
											"Internal Server error"
										)
									),
									[err]
								)
							);
						}
						res.json(
							new ResponseSuccess(
								new ResponseMeta(
									200,
									"suc-1",
									"user",
									new ResponseMessage(
										"Successfully retreived users list",
										["You can see the users lit now"]
									)
								),
								rows
							)
						);
					}
				);
			})
			.get("/:id", (req, res) => {
				this.database.get(
					"SELECT * FROM users WHERE id = ?",
					[req.params.id],
					(err: Maybe<Error>, row: Maybe<UserEntity>) => {
						if (Just(err)) {
							res.json(
								new ResponseFail(
									new ResponseMeta(
										500,
										"qmk-2",
										"error",
										new ResponseMessage(
											"Internal Server Error"
										)
									),
									[err]
								)
							);
							return;
						} else if (Nothing(row)) {
							this.database.get(
								"SELECT * FROM errors_catalog WHERE id = ?",
								["qmk-2"],
								(_: unknown, error: ErrorEntity) => {
									res.json(
										new ResponseFail(
											new ResponseMeta(
												404,
												error.id,
												"error",
												new ResponseMessage(
													error.title,
													error.detail.split("@@@")
												)
											),
											[{ instance: 111 }]
										)
									);
								}
							);
							return;
						}
						res.json(
							new ResponseSuccess(
								new ResponseMeta(
									200,
									"suc-1",
									"user",
									new ResponseMessage(
										"User found successfully",
										["You can see your desired user"]
									)
								),
								[row]
							)
						);
					}
				);
			})
			.post("/", () => {})
			.put("/:id", () => {})
			.delete("/:id", () => {});
	}
}
