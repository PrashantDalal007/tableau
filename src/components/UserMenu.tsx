import { useNavigation } from "@react-navigation/native";
import { CircleUserRound } from "lucide-react-native"; // Use your icon
import React, { useRef, useState } from "react";
import {
  Modal,
  Platform,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Portal from "../utils/Portal";

const UserMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation<any>();
  const avatarRef = useRef<HTMLDivElement>(null);
  const [avatarPosition, setAvatarPosition] = useState<{
    left: number;
    bottom: number;
  } | null>(null);

  const openMenu = () => {
    if (avatarRef.current) {
      const rect = avatarRef.current.getBoundingClientRect();
      setAvatarPosition({ left: rect.left, bottom: rect.bottom });
    }
    setOpen(true);
  };

  const handleLogout = () => {
    setOpen(false);
    navigation.navigate("Logout");
  };

  if (Platform.OS === "web") {
    return (
      <View className="relative flex items-center">
        <div
          ref={avatarRef}
          onClick={openMenu}
          className="inline-block cursor-pointer bg-gray-500 rounded-full hover:bg-black transition-colors"
        >
          <CircleUserRound size={32} strokeWidth={1.5} color="white" />
        </div>
        {open && avatarPosition && (
          <Portal>
            <div
              className="
                fixed
                z-50
                min-w-[120px]
                bg-white
                rounded-xl
                shadow-lg
                border
                border-gray-200
                px-6
                py-3
                transition-all
                animate-fade-in
              "
              style={{
                left: avatarPosition.left,
                top: avatarPosition.bottom + 6, // Only position is still inline
              }}
              onClick={handleLogout}
            >
              <span className="text-base text-gray-900">Logout</span>
            </div>
          </Portal>
        )}
      </View>
    );
  }

  // Mobile: Modal action sheet
  return (
    <View>
      <Pressable onPress={() => setOpen(true)}>
        <Text className="text-white bg-gray-500 rounded-full hover:bg-black transition-colors">
          <CircleUserRound size={32} strokeWidth={1.5} />
        </Text>
      </Pressable>
      <Modal
        transparent
        animationType="fade"
        visible={open}
        onRequestClose={() => setOpen(false)}
      >
        <TouchableWithoutFeedback onPress={() => setOpen(false)}>
          <View className="flex-1 bg-black/30 justify-end">
            <TouchableWithoutFeedback>
              <View className="bg-white p-6 rounded-t-2xl border-t border-gray-200">
                <TouchableOpacity className="py-4" onPress={handleLogout}>
                  <Text className="text-base text-red-600 font-medium text-center">
                    Logout
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setOpen(false)}>
                  <Text className="text-base text-gray-500 text-center mt-2">
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default UserMenu;
// UserMenu.tsx
// This component provides a user menu with a logout option.
