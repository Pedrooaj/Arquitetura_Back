import express from "express";
import cors from "cors";
import { Express } from "express";
import path from "path"
import routes from "./router";

class App {
  public application: Express;
  private static instance: App;


  private constructor() {
    this.application = express();
    this.middlewares();
    this.router();
  }


  public static getInstance(): App {
    if (!App.instance) {
      App.instance = new App();
    }
    return App.instance;
  }

  private middlewares(): void {
    this.application.use(express.static(path.join(process.cwd(), 'public')));
    this.application.use(express.json());
    this.application.use(cors({ origin: "*" }));
  }

  private router(): void {
    this.application.use(routes);
  }
}

export default App.getInstance().application;
