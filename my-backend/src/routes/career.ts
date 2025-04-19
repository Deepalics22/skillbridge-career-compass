
import express, { Request, Response } from "express";
import fetch from "node-fetch";

interface Suggestion {
  title: string;
  description: string;
  skills: string[];
}

const router = express.Router();

router.post("/suggestions", async (req: Request, res: Response): Promise<void> => {
  const userInput = req.body;

  const prompt = `
You are a career advisor helping people navigate AI-safe job roles. Based on the following profile, suggest 3 possible career paths with:
- title
- short description
- 4 recommended skills

Return only a JSON array (no markdown, no explanations), like this:

[
  {
    "title": "Example",
    "description": "Short desc",
    "skills": ["skill1", "skill2", "skill3", "skill4"]
  }
]

User Profile:
${JSON.stringify(userInput, null, 2)}
`;

  try {
    if (!process.env.CLAUDE_API_KEY) {
      res.status(500).json({ message: "Claude API key not configured" });
      return;
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.CLAUDE_API_KEY,
        "Content-Type": "application/json",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-sonnet-20240229",
        max_tokens: 1000,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    const data = await response.json();
    
    // Extract the first block of type 'text' from Claude response
    const textBlock = data?.content?.find((block: any) => block.type === "text");
    const rawText = textBlock?.text;

    if (typeof rawText === "string") {
      try {
        // Clean markdown if any and parse JSON
        const cleaned = rawText.replace(/```json|```/g, "").trim();
        const suggestions: Suggestion[] = JSON.parse(cleaned);
        res.status(200).json({ suggestions });
      } catch (parseError) {
        console.error("Failed to parse Claude response as JSON:", rawText);
        res.status(200).json({ rawText, error: "Failed to parse response as JSON." });
      }
    } else {
      console.warn("No valid text block found in response content:", data.content);
      res.status(200).json({ error: "No valid text block found in Claude response", data });
    }
  } catch (err) {
    console.error("Claude API Error:", err);
    res.status(500).json({ error: "Error generating suggestions from Claude." });
  }
});

export default router;
