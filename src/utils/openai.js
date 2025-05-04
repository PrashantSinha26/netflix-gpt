import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openAI = new OpenAI({
  apiKey: OPENAI_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

export default openAI;
