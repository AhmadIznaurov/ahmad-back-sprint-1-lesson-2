import {DriversRepository} from "../repositories/drivers.repository";
import {CreateBlogInput} from "../dto/driver.input";
import { Request, Response } from 'express';
import {mapDriverToOutput} from "../mappers/map-driver-to-output";


const repo = new DriversRepository();

export const createDriverHandler = async (
    req: Request, res: Response
) => {
    const data: CreateBlogInput = req.body;
    const created = repo.create(data);
    const output = mapDriverToOutput(created)
    res.status(201).json(output)
};
