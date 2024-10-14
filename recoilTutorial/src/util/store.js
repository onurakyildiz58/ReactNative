import { atom, selector } from 'recoil';

export const counterState = atom({
    key: 'counterState',
    default: 0,
});

export const incrementCounter = selector({
    key: 'incrementCounter',
    get: ({ get }) => {
        const currentCount = get(counterState);
        return currentCount;
    },
    set: ({ get, set }) => {
        const currentCount = get(counterState);
        set(counterState, currentCount + 1);
    },
});

export const decrementCounter = selector({
    key: 'decrementCounter',
    get: ({ get }) => {
        const currentCount = get(counterState);
        return currentCount;
    },
    set: ({ get, set }) => {
        const currentCount = get(counterState);
        set(counterState, currentCount - 1);
    },
});

export const resetCounter = selector({
    key: 'resetCounter',
    get: ({ get }) => {
        const currentCount = get(counterState);
        return currentCount;
    },
    set: ({ set }) => {
        set(counterState, 0);
    },
});
