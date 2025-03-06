import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

class AI {

  async getAnswer(text:string) {
    return await generateText({
      model: openai('o3-mini'),
      prompt: text,
    });
  }
}

export default new AI()