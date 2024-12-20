import { LinearContainer } from "@/components/ui";
import { Button, Input } from "@nextui-org/react";
import { Cancel01Icon } from "hugeicons-react";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    testcases: {
        input: string;
        output: string;
    }[];
    setTestcases: (testcases: {
        input: string;
        output: string;
    }[]) => void;
}

export default function AddTestcases(props: Props) {
    const { testcases, setTestcases, ...rest } = props;

    const addTestcase = () => {
      const newTestcase = { input: "", output: "" };
      const isDuplicate = testcases.some(
        (testcase) =>
          testcase.input === newTestcase.input &&
          testcase.output === newTestcase.output
      );
  
      if (!isDuplicate) {
        setTestcases([...testcases, newTestcase]);
      } else {
        console.warn("Duplicate test case");
      }
    };
  
    const removeTestcase = (index: number) => {
      const newTestcases = testcases.filter((_, i) => i !== index);
      setTestcases(newTestcases);
    };

    const handleTestcaseChange = (
        index: number,
        key: "input" | "output",
        value: string
      ) => {
        const newTestcases = testcases.map((testcase, i) => {
          if (i === index) {
            return { ...testcase, [key]: value };
          }
          return testcase;
        });
    
        setTestcases(newTestcases);
      };
      
    return (
        <LinearContainer
            fullwidth
            direction="column"
            label="Testcases"
            {...rest}
        >
            {testcases.map((testcase, index) => (
                <LinearContainer
                    key={index}
                    direction="row"
                    fullwidth
                >
                    <Input
                        placeholder="Input"
                        value={testcase.input}
                        classNames={{
                            inputWrapper: "bg-foreground-50",
                        }}
                        onChange={(e) =>
                            handleTestcaseChange(index, "input", e.target.value)
                        }
                    />
                    <Input
                        placeholder="Output"
                        value={testcase.output}
                        classNames={{
                            inputWrapper: "bg-foreground-50",
                        }}
                        onChange={(e) =>
                            handleTestcaseChange(index, "output", e.target.value)
                        }
                    />
                    <Button
                        color="danger"
                        isIconOnly
                        radius="full"
                        onClick={() => removeTestcase(index)}
                    >
                        <Cancel01Icon />
                    </Button>
                </LinearContainer>
            ))}
            <Button
                color="secondary"
                radius="full"
                onClick={addTestcase}
            >
                Add Testcase
            </Button>
        </LinearContainer>
    );
}