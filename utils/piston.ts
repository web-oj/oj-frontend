import axios from "axios";

export const piston = axios.create({
  baseURL: "https://emkc.org/api/v1/piston",
  headers: {
    "Content-Type": "application/json",
  },
});

export const runCode = async (language: string, code: string) => {
  try {
    console.log(language, code);
    const response = await piston.post("/execute", {
      language: language,
      source: code,
      files: [
        {
          name: "stdin",
          content: code,
        },
      ],
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to run code");
  }
};
