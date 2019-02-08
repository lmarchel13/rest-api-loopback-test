import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {RestdsDataSource} from '../datasources/restds.datasource';
import {Test} from '../models';

export interface TestService {
  //getTests(id: number): Promise<Test[]>;
  getTests(id: number): any;
}

export class TestServiceProvider implements Provider<TestService> {
  constructor(
    @inject('datasources.restds')
    protected datasource: RestdsDataSource,
  ) {}

  value(): Promise<TestService> {
    return getService(this.datasource);
  }
}
