import { GoogleGenAI } from "@google/genai";
import { topics } from "../data/content";

const API_KEY = process.env.GEMINI_API_KEY;

export class AIService {
  private ai: GoogleGenAI;
  private model: any;

  constructor() {
    if (!API_KEY) {
      throw new Error("GEMINI_API_KEY is not defined in environment variables.");
    }
    this.ai = new GoogleGenAI({ apiKey: API_KEY });
  }

  async askAboutTopics(question: string, currentTopicId?: string) {
    const topicContext = topics.map(t => `Topic ${t.id}: ${t.title}\nSummary: ${t.summary}\nContent: ${t.content.replace(/<[^>]*>/g, '')}`).join("\n\n");
    
    const currentTopic = currentTopicId ? topics.find(t => t.id === currentTopicId) : null;
    const currentTopicContext = currentTopic ? `User is currently viewing: ${currentTopic.title}\n` : "";

    const systemInstruction = `
      Bạn là một trợ lý ảo chuyên gia về lịch sử Đảng Cộng sản Việt Nam và Kinh tế chính trị Mác - Lênin.
      Dưới đây là nội dung của 9 chủ đề chính trong ứng dụng:
      
      ${topicContext}
      
      ${currentTopicContext}
      
      Nhiệm vụ của bạn:
      1. Trả lời các câu hỏi của người dùng dựa trên nội dung 9 chủ đề trên.
      2. Nếu câu hỏi không liên quan đến 9 chủ đề này, hãy lịch sự từ chối và nhắc người dùng rằng bạn chỉ hỗ trợ giải đáp về các chủ đề này.
      3. Trả lời bằng tiếng Việt, giọng văn trang trọng, học thuật nhưng dễ hiểu.
      4. Nếu người dùng hỏi về một chủ đề cụ thể, hãy tập trung vào nội dung của chủ đề đó.
      5. Khuyến khích người dùng tìm hiểu thêm bằng cách đặt các câu hỏi gợi mở liên quan đến các chủ đề khác.
    `;

    try {
      const response = await this.ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: [{ parts: [{ text: question }] }],
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      return response.text;
    } catch (error) {
      console.error("AI Service Error:", error);
      return "Xin lỗi, tôi gặp lỗi khi xử lý câu hỏi của bạn. Vui lòng thử lại sau.";
    }
  }
}

export const aiService = new AIService();
