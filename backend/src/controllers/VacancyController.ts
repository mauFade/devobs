import { Request, Response } from "express";

import { CSuccess, CError } from "../classes/responses";

class VacancyController {
  async create(request: Request, response: Response): Promise<any> {
    try {
      const { token } = request["query"];

      return response.status(200).send(new CSuccess(true, token));
    } catch (error) {
      return response.status(500).send(new CError("Error at method create.", error));
    }
  }
}

export default new VacancyController();
