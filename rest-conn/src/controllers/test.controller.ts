import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Test} from '../models';
import {TestRepository} from '../repositories';

export class TestController {
  constructor(
    @repository(TestRepository)
    public testRepository : TestRepository,
  ) {}

  @post('/tests', {
    responses: {
      '200': {
        description: 'Test model instance',
        content: {'application/json': {schema: {'x-ts-type': Test}}},
      },
    },
  })
  async create(@requestBody() test: Test): Promise<Test> {
    return await this.testRepository.create(test);
  }

  @get('/tests/count', {
    responses: {
      '200': {
        description: 'Test model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Test)) where?: Where,
  ): Promise<Count> {
    return await this.testRepository.count(where);
  }

  @get('/tests', {
    responses: {
      '200': {
        description: 'Array of Test model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Test}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Test)) filter?: Filter,
  ): Promise<Test[]> {
    return await this.testRepository.find(filter);
  }

  @patch('/tests', {
    responses: {
      '200': {
        description: 'Test PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() test: Test,
    @param.query.object('where', getWhereSchemaFor(Test)) where?: Where,
  ): Promise<Count> {
    return await this.testRepository.updateAll(test, where);
  }

  @get('/tests/{id}', {
    responses: {
      '200': {
        description: 'Test model instance',
        content: {'application/json': {schema: {'x-ts-type': Test}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Test> {
    return await this.testRepository.findById(id);
  }

  @patch('/tests/{id}', {
    responses: {
      '204': {
        description: 'Test PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() test: Test,
  ): Promise<void> {
    await this.testRepository.updateById(id, test);
  }

  @put('/tests/{id}', {
    responses: {
      '204': {
        description: 'Test PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() test: Test,
  ): Promise<void> {
    await this.testRepository.replaceById(id, test);
  }

  @del('/tests/{id}', {
    responses: {
      '204': {
        description: 'Test DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.testRepository.deleteById(id);
  }
}
