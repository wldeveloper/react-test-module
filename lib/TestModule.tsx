import { useState, useCallback, ChangeEventHandler } from 'react';

import './TestModule.css';

interface IProps {
  name: string;
  age?: number;
};

const TestModule: React.FC<IProps> = ({ age = 29 }) => {
  const [desc, setDesc] = useState<string>('xixixi');
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(e => setDesc(e.target.value), []);
  return (
    <div className="test-module-main">
      {`hello my name is ${name}, age: ${age}, desc: ${desc}`}
      <br />
      <textarea
        className="test-module-textarea"
        cols={30}
        rows={10}
        value={desc}
        onChange={onChange}
      />
    </div>
  )
}

export default TestModule;
