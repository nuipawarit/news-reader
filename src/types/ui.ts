import { Styles, WithStyles } from '@material-ui/core/styles/withStyles';

export type ClassesProp<
  S extends string | Styles<any, any, any> = string,
> = Partial<WithStyles<S>['classes']>;
