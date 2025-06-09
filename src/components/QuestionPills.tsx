import React from "react";
import { View, Text, Pressable } from "react-native";

// You can pass the questions as a prop or just hardcode for now
const SUGGESTED_QUESTIONS = [
  "Which Product Name increased the most?",
  "Which Product Name decreased the most?",
  "Which Product Type increased the most?",
];

const QuestionPills = ({
  questions = SUGGESTED_QUESTIONS,
  onSelect,
}: {
  questions?: string[];
  onSelect?: (question: string) => void;
}) => (
  <View className="flex-row flex-wrap justify-center gap-3 mt-6 mb-2">
    {questions.map((q, idx) => (
      <Pressable
        key={q}
        onPress={() => onSelect && onSelect(q)}
        className={`
          bg-blue-50 border border-blue-200
          rounded-full
          px-5 py-2
          shadow-sm
          transition
          active:bg-blue-100
          hover:bg-blue-100
        `}
        style={{ minWidth: 180 }}
      >
        <Text className="text-md font-semibold text-blue-700 text-center">
          {q}
        </Text>
      </Pressable>
    ))}
  </View>
);

export default QuestionPills;
