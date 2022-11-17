import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { getOneProblem, postRunCode } from "../api/problem";
import CodeEditor from "../component/CodeEditor";
import CodeResult from "../component/CodeResult";
import ProblemDescription from "../component/ProblemDescription";
import { LoginState } from "../recoil-state/userState";

export interface CodeInfo {
  javascript: string;
  python: string;
  java: string;
}

interface SkCode {
  id: number;
  language: keyof CodeInfo;
  code: string;
}

const emptyCode = {
  javascript: "",
  python: "",
  java: "",
};

const TestPageContainer = () => {
  let { problemId } = useParams();

  const [description, setDescription] = useState<string>("");
  const [code, setCode] = useState<CodeInfo>(emptyCode);
  const [lang, setLang] = useState<keyof CodeInfo>("javascript");
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState("");
  const [stdout, setStdout] = useState("");
  const setLoggedIn = useSetRecoilState<boolean>(LoginState);

  useEffect(() => {
    (async () => {
      if (problemId) {
        const { data } = await getOneProblem(problemId);
        const skeletonCodes = {
          ...emptyCode,
        };

        for (const skCode of data.skeletonCodeList as SkCode[]) {
          skeletonCodes[skCode.language] = skCode.code;
        }
        setCode(skeletonCodes);
        setDescription(data.description);
        setInput(data.sampleInput);
      }
    })();
  }, [problemId]);

  const setCodeWithLang = (lang: keyof CodeInfo, newCode: string) => {
    const newCodes = { ...code };
    newCodes[lang] = newCode;
    setCode(newCodes);
  };

  const runCode = async () => {
    try {
      const res = await postRunCode(problemId || "", lang, code[lang], input);
      setResult(res.data.output);
    } catch (e: any) {
      if (e.response.status === 500) {
        setStdout("");
        setResult("Server Error");
      } else if (e.response.status === 403 || e.response.status === 401) {
        setLoggedIn(false);
      }
    }
  };

  const submitCode = async () => {};

  return (
    <>
      <div className="test-description">
        <ProblemDescription mdString={description} />
      </div>
      <div className="test-editor-body">
        <CodeEditor
          language={lang}
          code={code}
          setCode={setCodeWithLang}
          setLanguage={setLang}
        />
        <div className="test-result">
          <CodeResult
            input={input}
            setInput={setInput}
            stdout={stdout}
            result={result}
            run={runCode}
            submit={submitCode}
          />
        </div>
      </div>
    </>
  );
};

export default TestPageContainer;
