import { createMachine, assign } from 'xstate'

export const temperatureMachine = createMachine({
  initial: 'active',
  context: {
    C: undefined,
    F: undefined,
  },
  states: {
    active: {
      on: {
        CELCIUS: {
          actions: assign({
            C: (_, event) => event.value,
            F: (_, event) =>
              event.value.length ? +event.value * (9 / 5) + 32 : '',
          }),
        },
        FARENHEIT: {
          C: (_, event) =>
            event.value.length ? (+event.value - 32) * (5 / 9) : '',
          F: (_, event) => event.value,
        },
      },
    },
  },
})
