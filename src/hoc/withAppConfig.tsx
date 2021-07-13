import React from "react";
import '../config/i18n';
const withAppConfig = (Component: React.ComponentType) => (props: any) =>
  <Component {...props} />;
export default withAppConfig;
