export type ICounterAction = { type: 'increment' }

export interface Counter {
  count: number
}

export const counterState: Counter = {
  count: 1
}

export const counterReducer = (state = counterState, action: ICounterAction) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1
      }

    default:
      return state
  }
}

export const increment = (): ICounterAction => ({
  type: 'increment'
})
