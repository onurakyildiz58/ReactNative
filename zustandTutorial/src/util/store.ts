// store.js
import { create } from 'zustand';

type CounterStore = {
    sec: number,
    min: number,
    hour: number;
    startTimer: () => void;
    stopTimer: () => void;
    resetTimer: () => void;
};

export const useCounterStore = create<CounterStore>((set) => {
    let interval: NodeJS.Timeout | null = null;

    return {
        sec: 0,
        min: 0,
        hour: 0,
        startTimer: () => {
            if (interval) {return;}
            interval = setInterval(() => {
                set((state) => {
                    let newSec = state.sec + 1;
                    let newMin = state.min;
                    let newHour = state.hour;

                    if (newSec >= 60) {
                        newSec = 0;
                        newMin += 1;
                    }

                    if (newMin >= 60) {
                        newMin = 0;
                        newHour += 1;
                    }

                    return { sec: newSec, min: newMin, hour: newHour };
                });
            }, 1000);
        },
        stopTimer: () => {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        },
        resetTimer: () => {
            set({ sec: 0, min: 0, hour: 0 });
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        },
    };
});
