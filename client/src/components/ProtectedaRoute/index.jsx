import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRole } from "../../app/selectors/userSelector";

export default function ProtectedRoute({
  children,
  allowedRoles,
  navigateTo = "/",
}) {
  let isAccess = false;
  const userRole = useSelector(selectRole);

  userRole.forEach((role) => {
    if (allowedRoles.includes(role)) {
      isAccess = true;
    }
  });

  if (isAccess) return children;
  return <Navigate to={navigateTo} replace />;
}
