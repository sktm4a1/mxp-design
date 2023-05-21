import React, { useCallback, useEffect, useRef, useState } from "react";
import "./virtualList.scss";

interface VirtualListProps {
  data: Record<string, any>[];
}

const VirtualList = (props: VirtualListProps) => {
  const { data } = props;
  const itemHeight = 30;
  const [start, setStart] = useState(0);
  const [visibleCount, setVisibleCount] = useState<number>(0);
  const [visibleData, setVisibleData] = useState<
    PickValueType<VirtualListProps, "data">
  >([]);
  const virtualRef = useRef<HTMLDivElement>(null);
  const virtualContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const count = Math.ceil(virtualRef.current!.clientHeight / itemHeight);
    setVisibleCount(count);
    setVisibleData(data.slice(start, start + count + 5));
    //  使用交叉观察器
    const io = new IntersectionObserver(
      (enteies) => {
        for (let entry of enteies) {
          const { intersectionRatio, intersectionRect, isIntersecting } = entry;
          if (intersectionRatio > 0) {
            console.log(intersectionRatio, isIntersecting, intersectionRect);
          }
        }
      },
      { root: document.querySelector(".virtual-list") }
    );
    io.observe(document.querySelector(".virtual-list-content")!);
    return () => {
      io.disconnect();
    };
  }, []); // eslint-disable-line

  const onHandleScroll = useCallback(() => {
    const scrollTop = virtualRef.current!.scrollTop;
    const fixedScrollTop = scrollTop - (scrollTop % itemHeight); // 1213 - 13
    virtualContentRef.current!.style.transform = `translate3d(0,${fixedScrollTop}px ,0)`;
    const _start = Math.floor(scrollTop / itemHeight);
    setStart(_start);
    setVisibleData(data.slice(_start, _start + visibleCount + 5));
  }, [visibleCount, data]);

  return (
    <div className="virtual-list" ref={virtualRef} onScroll={onHandleScroll}>
      {/* <div className="virtual-list-zhanwei" style={{height:`${data.length * itemHeight}px`}}></div> */}
      <div className="virtual-list-content" ref={virtualContentRef}>
        {visibleData.map((c) => (
          <div className="virtual-list-item" key={c.value}>
            数据: {c.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VirtualList;
