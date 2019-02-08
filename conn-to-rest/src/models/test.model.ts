import {Entity, model, property} from '@loopback/repository';

@model()
export class Test extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  constructor(data?: Partial<Test>) {
    super(data);
  }
}
