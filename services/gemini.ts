
import { GoogleGenAI } from "@google/genai";

const VILLAGE_CONTEXT = `
Tu es l'assistant IA officiel du village d'Iguersafene. 
Iguersafene est un village situé en Kabylie, en Algérie. 
Il est connu pour son organisation sociale exemplaire (Tajmaât), sa propreté et ses initiatives écologiques.
Tu dois répondre aux questions des résidents et des visiteurs avec courtoisie, en français, en t'appuyant sur les valeurs de solidarité et de respect du village.
Si tu ne connais pas une information spécifique sur la mairie actuelle ou des dates précises qui ne sont pas dans tes connaissances générales, invite l'utilisateur à contacter la mairie via le formulaire de contact.
`;

export const getVillageAssistantResponse = async (userPrompt: string) => {
  if (!process.env.API_KEY) {
    throw new Error("API Key missing");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: VILLAGE_CONTEXT,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Désolé, je rencontre une difficulté technique pour répondre à votre question. Veuillez essayer plus tard.";
  }
};
