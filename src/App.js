// import './App.css';
// import NavigationBar from './Components/NavigationBar';
// // import SelectOption from './Components/SelectOption';
// import React from 'react'
// import { Form, Checkbox } from 'semantic-ui-react'

// function App() {
//   const [value, setValue] = React.useState('question')
//   return (
//     <div className="App">
//       <NavigationBar/>
      
    
//     <div className='form'>

//     <Form>
//       <Form.Field>
//         Selected value: 
//       </Form.Field>
//       <Form.Field>
//         <Checkbox
//           radio
//           label='Question'
//           name='checkboxRadioGroup'
//           value='Question'
//           checked={value === 'question'}
//           onChange={(e, data) => setValue(data.value)}
//         />
//       </Form.Field>
//       <Form.Field>
//         <Checkbox
//           radio
//           label='Article'
//           name='checkboxRadioGroup'
//           value='Article '
//           checked={value === 'article'}
//           onChange={(e, data) => setValue(data.value)}
//         />
//       </Form.Field>
//     </Form>
    
//   </div>

//     { value === "Question"  ? (
//       <>
//       <h1> HELLLO </h1>
//       </>

//     ) : (
//       <>
      
// <h1> BEWAKOOF </h1>
//       </>
//     )}
//     {/* <SelectOption/> */}
//     </div>
//   );
// }

// export default App;



import './App.css';
import NavigationBar from './Components/NavigationBar';
import React, { useState } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';
import QuestionForm from './Components/QuestionForm';
import ArticleForm from './Components/ArticleForm';

function App() {
  const [value, setValue] = useState('question');

  return (
    <div className="App">
      <NavigationBar />
      <div className='form'>
        <Form>
          <Form.Field className='value'>
            Selected value:
          </Form.Field>
          <Form.Field className='form'>
            <Checkbox
            className='box'
              radio
              label='Question'
              name='checkboxRadioGroup'
              value='question'
              checked={value === 'question'}
              onChange={(e, data) => setValue(data.value)}
            />
          </Form.Field>
          <Form.Field className='form'>
            <Checkbox
            className='box'
              radio
              label='Article'
              name='checkboxRadioGroup'
              value='article'
              checked={value === 'article'}
              onChange={(e, data) => setValue(data.value)}
            />
          </Form.Field>
        </Form>
      </div>

      {value === 'question' ? (
        <QuestionForm />
      ) : (
        // <div>
        // <ArticleForm/>
        // </div>

        <ArticleForm/>
      )}
    </div>
  );
}

export default App;
