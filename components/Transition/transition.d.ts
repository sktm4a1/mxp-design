/// <reference types="react" />
import { CSSTransitionProps } from "react-transition-group/CSSTransition";
type AnimationName = "zoom-in-top" | "zoom-in-bottom" | "zoom-in-left" | "zoom-in-right";
type TransitionProps = CSSTransitionProps & {
    animation?: AnimationName;
    wrapper?: boolean;
};
export default function Transition(props: TransitionProps): JSX.Element;
export {};
