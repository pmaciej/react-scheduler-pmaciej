import { useState } from "react";
import DateProvider from "../hoc/DateProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Button } from "@mui/material";
import { format, getMonth, setMonth, parseISO } from "date-fns";
import { LocaleArrow } from "../common/LocaleArrow";
import { useAppState } from "../../hooks/useAppState";

interface MonthDateBtnProps {
  selectedDate: Date;
  onChange(value: Date, key: "selectedDate"): void;
}

const MonthDateBtn = ({ selectedDate, onChange }: MonthDateBtnProps) => {
  const { locale } = useAppState();
  const [open, setOpen] = useState(false);
  const currentMonth = getMonth(selectedDate);

  const toggleDialog = () => setOpen(!open);

  const handleChange = (e: Date | null, k?: string) => {
    onChange(e || new Date(), "selectedDate");
  };
  const handlePrev = () => {
    const prevMonth = currentMonth - 1;
    onChange(setMonth(selectedDate, prevMonth), "selectedDate");
  };
  const handleNext = () => {
    const nextMonth = currentMonth + 1;
    onChange(setMonth(selectedDate, nextMonth), "selectedDate");
  };
  return (
    <div>

    </div>
  );
};

export { MonthDateBtn };
