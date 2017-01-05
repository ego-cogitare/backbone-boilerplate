import TodosRouter from './todos';
import HomeRouter from './home';

export default class {
  constructor() {
    new TodosRouter();
    new HomeRouter();
  }
}
