import { Request, Response } from 'express';
import { DriversRepository } from '../repositories/drivers.repository';
import { UpdateDriverInput } from '../dto/driver.input';

const repo = new DriversRepository();

export const updateDriverHandler = (
    req: Request,
    res: Response
) => {
    const id = req.params.id;

    // Проверка перед обновлением
    const existingDriver = repo.findById(id);
    if (!existingDriver) {
        return res.sendStatus(404);
    }

    const data: UpdateDriverInput = req.body;

    const isUpdated = repo.update(id, data);

    if (isUpdated) {
        res.sendStatus(204);
    } else {
        res.sendStatus(500);
    }
};