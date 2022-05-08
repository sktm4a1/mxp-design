import React from "react";
import { CSSTransition } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

type AnimationName =
  | "zoom-in-top"
  | "zoom-in-bottom"
  | "zoom-in-left"
  | "zoom-in-right";

type TransitionProps = CSSTransitionProps & {
  animation?: AnimationName;
  wrapper?: boolean;
};

export default function Transition(props: TransitionProps) {
  const {
    children,
    classNames,
    animation,
    wrapper,
    appear = true,
    unmountOnExit = true,
    ...restProps
  } = props;
  return (
    <CSSTransition
      classNames={classNames || animation}
      appear={appear}
      unmountOnExit={unmountOnExit}
      {...restProps}
    >
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  );
}
