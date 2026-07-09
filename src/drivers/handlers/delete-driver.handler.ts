import { Request, Response } from 'express';
import {DriversRepository} from "../repositories/drivers.repository";

const repo = new DriversRepository();

export const deleteDriverHandler = (
    req: Request, res: Response
) => {
    const id = req.params.id;
    const wasDeleted = repo.delete(id);

    if(wasDeleted) {
        res.send(204)
    } else {
        res.send(404);
    }
}