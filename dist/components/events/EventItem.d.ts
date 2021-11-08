import { ProcessedEvent } from "../../types";
interface EventItemProps {
    event: ProcessedEvent;
    multiday: boolean;
    hasPrev?: boolean;
    hasNext?: boolean;
    showdate?: boolean;
}
declare const EventItem: {
    ({ event, multiday, hasPrev, hasNext, showdate, }: EventItemProps): any;
    defaultProps: {
        multiday: boolean;
        showdate: boolean;
    };
};
export default EventItem;
