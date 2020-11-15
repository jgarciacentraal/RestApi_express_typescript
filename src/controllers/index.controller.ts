import { Request, Response } from 'express';

export function indexInitial(req: Request, res: Response ): Response {
    return res.json('Hola')
}