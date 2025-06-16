// /src/api/questions.ts

// DEMO MOCK DATA
const DEMO_QUESTIONS: Record<string, string[]> = {
  aov: [
    "Which product category had the highest AOV last month?",
    "What campaigns impacted AOV the most?",
    "Did bundled offers increase average order value?",
  ],
  css: [
    "What resolved the most customer complaints?",
    "Which region has the lowest satisfaction score?",
    "How did delivery impact CSAT?",
  ],
  "units-sold": [
    "Which product had the highest units sold?",
    "What caused the recent dip in units sold?",
    "Are any categories trending upwards?",
  ],
  "total-revenue": [
    "Which channel contributed most to revenue?",
    "Did upsell offers affect total revenue?",
    "Which segment outperformed forecasts?",
  ],
  "cart-abandon": [
    "Why did cart abandonment spike?",
    "Which devices see more abandonment?",
    "What payment issues were reported?",
  ],
  "new-customers": [
    "Which channel brought the most new customers?",
    "Why did new customer acquisition drop?",
    "Did referrals increase or decrease?",
  ],
  "conversion-rate": [
    "Which page had the highest conversion?",
    "What optimizations boosted conversion rate?",
    "Did email campaigns help conversions?",
  ],
  "refund-rate": [
    "Which products saw most refunds?",
    "What caused the refund rate to decrease?",
    "Are refund reasons changing over time?",
  ],
  "active-users": [
    "What drove the increase in active users?",
    "Which age group is most engaged?",
    "Did gamification impact usage?",
  ],
};

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

export async function fetchQuestionsByKPIId(id: string): Promise<string[]> {
  // MOCKED API

  await delay(800); // Simulate API delay
  // Simulate error for unknown IDs
  if (!DEMO_QUESTIONS[id]) throw new Error("No questions found for this KPI.");
  return DEMO_QUESTIONS[id];

  //   // Replace with your real API URL:
  //   const url = `https://your-api-domain.com/getQuestions/${id}`;
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) throw new Error("Failed to fetch questions");
  //     const data = await response.json();
  //     // Expecting: { questions: string[] }
  //     return data.questions || [];
  //   } catch (error) {
  //     console.error("Error fetching questions:", error);
  //     return [];
  //   }
}
