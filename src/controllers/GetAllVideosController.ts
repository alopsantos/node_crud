import { Request, Response } from "express";
import { GetAllVideosService } from "../services/GetAllVideosService";

export class GetAllVideosController {
  async handle(request: Request, response: Response) {
    const repo = new GetAllVideosService();

    const videos = await repo.execute();
    return response.json(videos);
  }
}
