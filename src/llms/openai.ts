import { OpenAI } from 'langchain/llms/openai'

const model = new OpenAI({
  temperature: 0.9,
  openAIApiKey: process.env.OPENAI_API_KEY
})

const res = await model.call(
  "Hello, I'm a chatbot",
)

console.log({ res })
