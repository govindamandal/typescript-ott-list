import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { APILogger } from "./logger/api.logger";
import router from './routes/index.route'


class App {
  public express: express.Application;
  public logger: APILogger;

  private options: cors.CorsOptions = {
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false,
  };

  constructor() {
    this.express = express();
    this.express.use(cors(this.options));
    this.middleware();
    this.routes();
    this.logger = new APILogger()
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.express.use(router);
  }
}

export default new App().express;