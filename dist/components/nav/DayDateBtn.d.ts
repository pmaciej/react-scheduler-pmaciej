interface DayDateBtnProps {
    selectedDate: Date;
    onChange(value: Date, key: "selectedDate"): void;
}
declare const DayDateBtn: ({ selectedDate, onChange }: DayDateBtnProps) => any;
export { DayDateBtn };
