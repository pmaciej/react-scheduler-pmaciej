import { ProcessedEvent } from "../../types";
interface TodayEventsProps {
    todayEvents: ProcessedEvent[];
    today: Date;
    startHour: number;
    step: number;
    minuteHeight: number;
    cellHeight: number;
    direction: string;
}
declare const TodayEvents: ({ todayEvents, today, startHour, step, minuteHeight, cellHeight, direction, }: TodayEventsProps) => any;
export default TodayEvents;
