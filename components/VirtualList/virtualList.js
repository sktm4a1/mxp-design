var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import "./virtualList.scss";
var VirtualList = function (props) {
    var data = props.data, _a = props.height, itemHeight = _a === void 0 ? 30 : _a;
    var _b = useState(0), start = _b[0], setStart = _b[1];
    var _c = useState(0), visibleCount = _c[0], setVisibleCount = _c[1];
    var _d = useState([]), visibleData = _d[0], setVisibleData = _d[1];
    var virtualRef = useRef(null);
    var virtualContentRef = useRef(null);
    var firstEle = useRef(null);
    useEffect(function () {
        var count = Math.ceil(virtualRef.current.clientHeight / itemHeight);
        setVisibleCount(count);
    }, [itemHeight]);
    useEffect(function () {
        setVisibleData(data.slice(start, start + visibleCount + 5));
    }, [visibleCount, data, start]);
    useEffect(function () {
        // 使用交叉观察器
        var io = new IntersectionObserver(function (enteies) {
            for (var _i = 0, enteies_1 = enteies; _i < enteies_1.length; _i++) {
                var entry = enteies_1[_i];
                var intersectionRatio = entry.intersectionRatio, intersectionRect = entry.intersectionRect, isIntersecting = entry.isIntersecting, target = entry.target;
                console.log(intersectionRatio, isIntersecting, intersectionRect, target.className);
                // todo: 计算start
            }
        }
        // { root: null , threshold: 0.1}
        );
        if (firstEle.current) {
            io.observe(firstEle.current);
        }
        return function () {
            firstEle.current && io.unobserve(firstEle.current); // eslint-disable-line
        };
    }, [visibleData]);
    var onHandleScroll = useCallback(function () {
        var scrollTop = virtualRef.current.scrollTop;
        var fixedScrollTop = scrollTop - (scrollTop % itemHeight); // 例如：1213 - 13
        virtualContentRef.current.style.transform = "translate3d(0,".concat(fixedScrollTop, "px ,0)");
        var _start = Math.floor(scrollTop / itemHeight);
        setStart(_start);
    }, [itemHeight]);
    return (_jsx("div", __assign({ className: "virtual-list", ref: virtualRef, onScroll: onHandleScroll }, { children: _jsx("div", __assign({ className: "virtual-list-content", ref: virtualContentRef }, { children: visibleData.map(function (c, i, arr) {
                var id = i === 0 ? "first" : i === arr.length - 1 ? "last" : undefined;
                return (_jsxs("div", __assign({ id: id, ref: i === 0 ? firstEle : null, className: "virtual-list-item" }, { children: ["\u6570\u636E: ", c.value] }), c.value));
            }) })) })));
};
export default VirtualList;
