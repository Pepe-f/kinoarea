import {
  ButtonHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  memo
} from 'react';
import cn from 'classnames';
import styles from './ButtonBase.module.scss';

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  animationDuration?: number;
}

export const ButtonBase = memo<PropsWithChildren<ButtonBaseProps>>(
  ({
    className,
    startIcon = null,
    endIcon = null,
    animationDuration = 500,
    children,
    ...props
  }) => {
    return (
      <button className={cn(styles.btn, className)} {...props}>
        {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
        {children}
        {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
      </button>
    );
  }
);

ButtonBase.displayName = 'ButtonBase';
