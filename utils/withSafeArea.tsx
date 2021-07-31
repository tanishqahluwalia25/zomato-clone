import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView, StatusBar } from "react-native";
import Colors from "../resources/Colors";

export default (WrappedComponent: any) => {
  const hocComponent = ({ ...props }) => (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={Colors.primary} />
      <WrappedComponent {...props} />
    </SafeAreaView>
  );

  hocComponent.propTypes = {};

  return hocComponent;
};
