import { Router } from "express";

export interface RouteHandler {
    getHandler(): Router;
}
