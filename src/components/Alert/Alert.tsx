import React, { useState, useEffect } from "react";
import classes from "../../styles/Alert.module.css";
import classNames from "classnames";

export const types = ["success", "info", "warning", "error"] as const;
type AlertType = typeof types[number];

interface AlertProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
  duration?: number;
}

const Alert: React.FC<AlertProps> = ({
  type,
  message,
  onClose,
  duration,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if(!duration) return;
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  const handleClose = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const getAlertClass = (): string => {
    switch (type) {
      case "success":
        return "alert-success";
      case "info":
        return "alert-info";
      case "warning":
        return "alert-warning";
      case "error":
        return "alert-error";
      default:
        return "";
    }
  };

  return (
    <div
      className={classNames(
        classes.alert,
        classes[getAlertClass()],
        visible ? "" : classes["alert-hidden"]
      )}
    >
      <span className={classes["alert-message"]}>{message}</span>
      {onClose && (
        <button className={classes["alert-close"]} onClick={handleClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Alert;
