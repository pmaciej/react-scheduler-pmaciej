import { MouseEvent } from "react";
interface LocaleArrowProps {
    type: "prev" | "next";
    onClick?(e?: MouseEvent): void;
}
declare const LocaleArrow: ({ type, onClick }: LocaleArrowProps) => any;
export { LocaleArrow };
