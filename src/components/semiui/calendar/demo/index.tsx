import React, { CSSProperties, useEffect } from "react";
import { Calendar } from "@douyinfe/semi-ui";
const allDayStyle = {
  borderRadius: "3px",
  boxSizing: "border-box",
  border: "var(--semi-color-bg-1) 1px solid",
  padding: "2px 4px",
  backgroundColor: "var(--semi-color-primary-light-active)",
  height: "100%",
  overflow: "hidden",
} as CSSProperties;
import { dateFns } from "../foundation";
const SemiCalendar = () => {
  const displayValue = new Date();
  const events = [
    {
      key: "1",
      start: new Date(2022, 8, 1, 12, 0, 0),
      end: new Date(2022, 8, 1, 18, 0, 0),
      children: <div style={allDayStyle}>9月1日测试文字</div>,
    },
    {
      key: "2",
      start: new Date(2022, 8, 5, 12, 0, 0),
      end: new Date(2022, 8, 5, 22, 0, 0),
      children: <div style={allDayStyle}>9月5日测试文字</div>,
    },
  ];

  useEffect(() => {
    dateFns();
  }, []);

  return (
    <>
      <Calendar
        displayValue={displayValue}
        events={events}
        mode="month"
        weekStartsOn={1}
      />
    </>
  );
};

export default SemiCalendar;
