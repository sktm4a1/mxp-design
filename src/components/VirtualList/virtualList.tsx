import { useCallback, useEffect, useRef, useState } from "react";
import "./virtualList.scss";

interface VirtualListProps {
  data: Record<string, any>[];
  height?: number;
}

const VirtualList = (props: VirtualListProps) => {
  const { data, height: itemHeight = 30 } = props;
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [visibleData, setVisibleData] = useState<
    PickValueType<VirtualListProps, "data">
  >([]);
  const virtualRef = useRef<HTMLDivElement>(null);
  const virtualContentRef = useRef<HTMLDivElement>(null);
  const firstEle = useRef(null);

  useEffect(() => {
    const count = Math.ceil(virtualRef.current!.clientHeight / itemHeight);
    setVisibleCount(count);
  }, [itemHeight]);

  useEffect(() => {
    setVisibleData(data.slice(start, start + visibleCount + 5));
  }, [visibleCount, data, start]);

  useEffect(() => {
    // 使用交叉观察器
    const io = new IntersectionObserver(
      (enteies) => {
        for (let entry of enteies) {
          const {
            intersectionRatio,
            intersectionRect,
            isIntersecting,
            target,
          } = entry;
          console.log(
            intersectionRatio,
            isIntersecting,
            intersectionRect,
            target.className
          );
          // todo: 计算start
        }
      }
      // { root: null , threshold: 0.1}
    );
    if (firstEle.current) {
      io.observe(firstEle.current);
    }
    return () => {
      firstEle.current && io.unobserve(firstEle.current); // eslint-disable-line
    };
  }, [visibleData]);

  const onHandleScroll = useCallback(() => {
    const scrollTop = virtualRef.current!.scrollTop;
    const fixedScrollTop = scrollTop - (scrollTop % itemHeight); // 例如：1213 - 13
    virtualContentRef.current!.style.transform = `translate3d(0,${fixedScrollTop}px ,0)`;
    const _start = Math.floor(scrollTop / itemHeight);
    setStart(_start);
  }, [itemHeight]);

  return (
    <div className="virtual-list" ref={virtualRef} onScroll={onHandleScroll}>
      {/* <div className="virtual-list-zhanwei" style={{height:`${data.length * itemHeight}px`}}></div> */}
      <div className="virtual-list-content" ref={virtualContentRef}>
        {visibleData.map((c, i, arr) => {
          const id =
            i === 0 ? "first" : i === arr.length - 1 ? "last" : undefined;
          return (
            <div
              id={id}
              ref={i === 0 ? firstEle : null}
              className="virtual-list-item"
              key={c.value}
            >
              数据: {c.value}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VirtualList;
