import fs from "fs";
import path from "path";
import express from "express";
import { html, renderToString } from "fuco/server";

import "./hello-app";

const app = express();

app.use("/dist", express.static("./dist"));

app.get("/", (_, res) => {
  const htmlPath = path.resolve(__dirname, "../public/index.html");
  fs.readFile(htmlPath, "utf8", (err, data) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }
    const appHtml = renderToString(
      html`
        <hello-app name="SSR"></hello-app>
      `,
      { hydrate: true }
    );
    return res.send(data.replace("<hello-app></hello-app>", appHtml));
  });
});

app.listen(3000, () => console.log("listen http://localhost:3000"));
