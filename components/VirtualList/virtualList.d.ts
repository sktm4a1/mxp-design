/// <reference types="react" />
import "./virtualList.scss";
interface VirtualListProps {
    data: Record<string, any>[];
    height?: number;
}
declare const VirtualList: (props: VirtualListProps) => JSX.Element;
export default VirtualList;
