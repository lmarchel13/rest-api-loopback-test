import {RestConnApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {RestConnApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new RestConnApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
