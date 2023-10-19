import HomeActionType from './action-types';

const initialState = {
  selectedCategory: 0,
  isLoading: true,
};

type HomeProps = {
  type: string;
  payload: any;
};

const HomeReducer = (state = initialState, action: HomeProps) => {
  switch (action.type) {
    case HomeActionType.SELECTED_CATEGORY: {
      return {
        ...state,
        selectedCategory: action.payload,
      };
    }
    case HomeActionType.IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    default:
      return state;
  }
};

export default HomeReducer;
