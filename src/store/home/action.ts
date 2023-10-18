import HomeActionType from './action-types';

export const selectedCategory = (payload: {}) => ({
  type: HomeActionType.SELECTED_CATEGORY,
  payload: payload,
});
