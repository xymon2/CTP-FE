import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { getOneProblem } from "../api/problem";
import CodeEditor from "../component/CodeEditor";
import ProblemDescription from "../component/ProblemDescription";

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

  useEffect(() => {
    (async () => {
      if (problemId) {
        const { data } = await getOneProblem(problemId);
        console.log(data);
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

  //   const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //     switch (e.target.value) {
  //       case "python":
  //         setCode(checkCodeInCookie("python", pySkeletonCode));
  //         break;

  //       case "javascript":
  //         setCode(checkCodeInCookie("javascript", jsSkeletonCode));
  //         break;
  //     }
  //     setLang(e.target.value);
  //   };

  return (
    <>
      <div className="test-description">
        <ProblemDescription mdString={description} />
        <br />
        {input}
      </div>
      <div className="test-body">
        <CodeEditor
          language={lang}
          code={code}
          setCode={setCodeWithLang}
          setLanguage={setLang}
        />
      </div>
    </>
  );
};

export default TestPageContainer;
