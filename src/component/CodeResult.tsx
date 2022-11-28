import React, { Dispatch, FC, SetStateAction, useState } from "react";

interface CodeResultProps {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  stdout: string;
  result: string;
  run: () => Promise<void>;
  submit: () => Promise<void>;
}

const CodeResult: FC<CodeResultProps> = ({
  input,
  setInput,
  stdout,
  result,
  run,
  submit,
}) => {
  const [runDisabled, setRunDisabled] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // Only after the code returns, run button is activated.
  const handleRunBtn = async () => {
    setRunDisabled(true);
    await run();
    setRunDisabled(false);
  };

  // Only after the code returns, submit button is activated.
  const handleSubmitBtn = async () => {
    setRunDisabled(true);
    // await onSubmitBtn();
    setRunDisabled(false);
  };

  return (
    <>
      <div className="test-result-header">
        <button
          className="run-btn"
          onClick={handleRunBtn}
          disabled={runDisabled}
        >
          run
        </button>
        <button
          className="submit-btn"
          onClick={handleSubmitBtn}
          disabled={runDisabled}
        >
          submit
        </button>
      </div>
      <b>Input</b>
      <div className="test-input">
        <input
          type="text"
          className="test-text"
          name="Name"
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <b>Stdout</b>
      <div className="test-stdoutt">
        <pre className="test-text">{stdout}</pre>
      </div>
      <b>Result</b>
      <div className="test-code-result">
        <pre className="test-text">{result}</pre>
      </div>
    </>
  );
};

export default CodeResult;
