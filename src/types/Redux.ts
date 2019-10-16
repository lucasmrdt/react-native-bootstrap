export {State} from 'src/store';

export interface Action {
  type: string;
  payload: {[key: string]: any};
}
