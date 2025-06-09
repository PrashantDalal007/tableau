// src/components/AlertBox.tsx

import React from "react";
import { View, Text } from "react-native";
import {
  AlertTriangle,
  Info,
  CheckCircle2,
  AlertOctagon,
} from "lucide-react-native";

type AlertType = "info" | "warning" | "success" | "error";

const alertStyles = {
  info: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    Icon: Info,
    label: "Info",
    iconColor: "#2563eb",
  },
  warning: {
    bg: "bg-yellow-50",
    border: "border-yellow-200",
    text: "text-yellow-800",
    Icon: AlertTriangle,
    label: "Warning",
    iconColor: "#eab308",
  },
  success: {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-800",
    Icon: CheckCircle2,
    label: "Success",
    iconColor: "#22c55e",
  },
  error: {
    bg: "bg-red-50",
    border: "border-red-200",
    text: "text-red-800",
    Icon: AlertOctagon,
    label: "Error",
    iconColor: "#ef4444",
  },
};

type AlertBoxProps = {
  type?: AlertType;
  message: string;
  title?: string;
};

const AlertBox: React.FC<AlertBoxProps> = ({
  type = "info",
  message,
  title,
}) => {
  const { bg, border, text, Icon, label, iconColor } = alertStyles[type];
  return (
    <View
      className={`w-full max-w-xl flex-row items-start ${bg} ${border} border rounded-2xl p-4 mb-4 gap-x-3`}
    >
      <View className="mt-1">
        <Icon size={22} color={iconColor} strokeWidth={2.2} />
      </View>
      <View className="flex-1">
        <Text className={`font-bold ${text} text-2xl mb-2`}>
          {title || label}
        </Text>
        <Text className={`text-md ${text}`}>{message}</Text>
      </View>
    </View>
  );
};

export default AlertBox;
