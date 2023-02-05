import React from "react";
import PermissionContext from "./PermissionContext";

const PermissionProvider = ({ role, children }) => {

  // This method return if the user have the permissions specified
  const hasRole = (value) => value === role;

  // This component will render its children wrapped around a PermissionContext
  // provider whose value is set to the method defined above.
  return (
    <PermissionContext.Provider value={{hasRole}}>
      {children}
    </PermissionContext.Provider>
  );
};

export default PermissionProvider;