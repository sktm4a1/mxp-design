import { CSSTransition } from "react-transition-group"; // 动画
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
    wrapper, // 解决多个transition彼此覆盖的问题
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
