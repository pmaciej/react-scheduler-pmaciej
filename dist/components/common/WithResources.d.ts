import { ReactChild } from "react";
import { DefaultRecourse } from "../../types";
interface WithResourcesProps {
    span?: number;
    renderChildren(resource: DefaultRecourse): ReactChild;
}
declare const WithResources: {
    ({ span, renderChildren }: WithResourcesProps): any;
    defaultProps: {
        span: number;
    };
};
export { WithResources };
