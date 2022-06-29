import React from 'react';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import ReducerSample from './ReducerSample';
import { SampleProvider } from './SampleContext';


// const App: React.FC = () => {
//   const onClick = (name: string) => {
//     console.log(`${name} says hello`);
//   };
//   return <Greetings name="Hello" onClick={onClick} />;
// };

const App = () => {
  // const onClick = (name: string) => { console.log(`${name} says hello`) };
  const onSubmit = (form: { name: string, description: string }) => {
    console.log(form);
  }
  return (
    // <Greetings name="Hello" onClick={onClick} />
    // <Counter />
    // <MyForm onSubmit={onSubmit} />
    // <ReducerSample />
    <SampleProvider>
      <ReducerSample />
    </SampleProvider>
  )
}


export default App;