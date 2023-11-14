import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import BarsExample from "./graphs/bars";

export default function App() {
  const dimensions = Dimensions.get("window");

  const width = dimensions.width;
  const height = dimensions.height;
  const r = width * 0.33;

  return (
    <View style={styles.container}>
      <Canvas style={{ width, height }}>
        <BarsExample width={width} height={height} />
      </Canvas>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
