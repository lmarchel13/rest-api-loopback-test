import {repository} from '@loopback/repository';
import {post, param, get, requestBody, HttpErrors} from '@loopback/rest';

import {TestService} from '../services/test.service';
import {inject} from '@loopback/core';

export class TestController {
  constructor(
    @inject('services.TestService')
    public test: TestService,
  ) {}

  @get('/lucas/{id}', {
    responses: {
      '200': {
        description: 'Testing REST connection',
        content: {
          'application/json': {
            schema: {
              type: 'array',
            },
          },
        },
      },
    },
  })
  async testing(@param.path.number('id') id: number) {
    return this.test.getTests(id);
  }
}
