import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {DEFAULT_ROUTER_FEATURENAME, routerReducer, RouterReducerState} from '@ngrx/router-store';

export interface State {
  [DEFAULT_ROUTER_FEATURENAME]: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  [DEFAULT_ROUTER_FEATURENAME]: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
