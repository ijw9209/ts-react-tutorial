import React, { createContext, useReducer, useContext, Dispatch } from 'react';


//필요한 타입들을 미리 선언

type Color = 'red' | 'orange' | 'yellow';

// 상태를 위한 타입
type State = {
    count: number;
    text: string;
    color: Color;
    isGood: boolean;
};

// 모든 액션들을 위한 타입
type Action =
    | { type: 'SET_COUNT'; count: number }
    | { type: 'SET_TEXT'; text: string }
    | { type: 'SET_COLOR'; color: Color }
    | { type: 'TOGGLE_GOOD' };

// 디스패치를 위한 타입 (Dispatch를 리액트에서 불러올 수 있음) 액션들의 타입을 Dispatch 의 Generics로 설정

type SampleDispatch = Dispatch<Action>;

// Context 만들기

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);


// 리듀서

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'SET_COUNT':
            return {
                ...state,
                count: action.count //count 자동완성, number
            }
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text //text 자동완성, string
            }
        case 'SET_COLOR':
            return {
                ...state,
                color: action.color //color 자동완성, color
            }
        case 'TOGGLE_GOOD':
            return {
                ...state,
                isGood: !state.isGood //isGood 자동완성,
            }
        default:
            throw new Error('Unhandled ACTION');
    }
}

// SampleProvider 에서 useReducer 를 사용하고
// SampleStateContext.Provider 와 SampleDispatchContext.Provider로 children을 감싸서 반환

export function SampleProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(reducer, {
        count: 0,
        text: 'hello',
        color: 'red',
        isGood: true
    });
    return (
        <SampleStateContext.Provider value={state}>
            <SampleDispatchContext.Provider value={dispatch}>
                {children}
            </SampleDispatchContext.Provider>
        </SampleStateContext.Provider>
    )
}


export function useSampleState() {
    const state = useContext(SampleStateContext);
    if (!state) throw new Error('Cannot find SampleProvider');
    return state;
}

export function useSampleDispatch() {
    const dispatch = useContext(SampleDispatchContext);
    if (!dispatch) throw new Error('Cannot find SampleProvider');
    return dispatch
}