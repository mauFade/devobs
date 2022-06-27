import { IError, ISuccess } from "../interfaces/responses";

class CSuccess implements ISuccess {
  constructor(public success: boolean, public data: any) {
    this.success = success;
    this.data = data;
  }
}

class CError implements IError {
  constructor(public message: string, public error: any) {
    this.message = message;
    this.error = error;
  }
}

export { CSuccess, CError };
