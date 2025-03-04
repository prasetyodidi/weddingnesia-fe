import React from "react";
import Text from "./Text";
import { textStyle } from "@/utils/enum";

export default function TitleBorder({ className, children }) {
  return (
    <Text
      style={textStyle.smalltitle}
      className={`${className} font-bold text-center mb-3 py-3 border-y`}
    >
      {children}
    </Text>
  );
}
