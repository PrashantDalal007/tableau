import { BadgeCheck } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

type KPIDescriptionProps = {
  kpi: {
    title: string;
    summaryDate: string;
    summaryValue: string;
    currency: boolean;
    rangeLow: string;
    rangeHigh: string;
    trendInsight?: string;
  };
};

// Utility to highlight words/phrases inside a string
function highlightPhrases(
  text: string,
  phrases: { phrase: string; className: string }[]
) {
  let parts: (string | React.ReactNode)[] = [text];
  phrases.forEach(({ phrase, className }) => {
    parts = parts.flatMap((part) =>
      typeof part === "string" && part.includes(phrase)
        ? part.split(phrase).flatMap((t, i, arr) =>
            i < arr.length - 1
              ? [
                  t,
                  <Text className={className} key={phrase + i}>
                    {phrase}
                  </Text>,
                ]
              : [t]
          )
        : [part]
    );
  });
  return parts;
}

const KPIDescription: React.FC<KPIDescriptionProps> = ({ kpi }) => (
  <View className="flex-col gap-y-1 mb-1 max-w-screen-xl">
    <View className="flex-row items-start gap-2">
      <BadgeCheck size={24} color="#666" className="mt-0.5 mr-1" />
      <Text className="text-lg text-gray-900 flex-1 flex-wrap leading-relaxed">
        <Text className="font-bold">{kpi.title}</Text>
        {" on "}
        <Text className="font-medium">{kpi.summaryDate}</Text>
        {" was "}
        <Text className="font-semibold">{kpi.summaryValue}</Text>
        {" and was "}
        <Text className="font-semibold text-green-700">
          within the expected range
        </Text>
        {" of "}
        <Text className={kpi.currency ? "font-mono" : ""}>{kpi.rangeLow}</Text>
        {" to "}
        <Text className={kpi.currency ? "font-mono" : ""}>{kpi.rangeHigh}</Text>
        {"."}
      </Text>
    </View>
    {kpi.trendInsight && (
      <Text className="text-lg text-gray-700 mt-1 ml-8">
        {highlightPhrases(kpi.trendInsight, [
          { phrase: "unfavorable", className: "font-semibold text-red-800" },
          { phrase: "favorable", className: "font-semibold text-green-800" },
          { phrase: "steepened", className: "font-semibold" },
          { phrase: "detected", className: "font-semibold" },
          // Add more keywords to highlight as you want
        ])}
      </Text>
    )}
  </View>
);

export default KPIDescription;
