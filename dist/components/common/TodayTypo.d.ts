interface TodayTypoProps {
    date: Date;
    onClick?(day: Date): void;
}
declare const TodayTypo: ({ date, onClick }: TodayTypoProps) => any;
export default TodayTypo;
