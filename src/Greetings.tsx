import React from 'react';

//#1
//REACT.FC

// type GreetingsProps = {
//     name: string;
// };

// // React.FC 를 사용하면 props 의 타입을 Generics 로 넣어서 사용
// // React.FC를 사용하면 기본적으로 props의 children이 들어가있음

// // 단점은 defaultProps가 작동하지 않음
// const Greetings: React.FC<GreetingsProps> = ({ name }) => (
//     <div>Hello, {name}</div>
// )

// export default Greetings;

// #2
//REACT.FC 생략

// type GreetingsProps = {
//     name: string;
//     mark: string;
//     //있어도 되고 없어도되고
//     optional?: string;
// }

// const Greetings = ({ name, mark, optional }: GreetingsProps) => (
//     <div>
//         Hello, {name} {mark}
//         {optional && <p>{optional}</p>}
//     </div>
// )

// Greetings.defaultProps = {
//     mark: '!'
// }

// export default Greetings;


// #3
// 특정 함수

type GreetingsProps = {
    name: string;
    mark: string;
    //있어도 되고 없어도되고
    optional?: string;
    //특정 함수
    onClick: (name: string) => void; //아무것도 리턴 x
}

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
    const handleClick = () => onClick(name);
    return (
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    )
}

Greetings.defaultProps = {
    mark: '!'
}

export default Greetings;