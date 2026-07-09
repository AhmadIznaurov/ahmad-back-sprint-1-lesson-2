import { Request, Response } from 'express';
import {DriversRepository} from "../repositories/drivers.repository";
import {mapDriverToOutput} from "../mappers/map-driver-to-output";

const repo = new DriversRepository();

export const getDriverListHandler = (
    req: Request, res: Response
) => {
    const list = repo.getAll().map(mapDriverToOutput);
    res.status(200).json(list)
}; 