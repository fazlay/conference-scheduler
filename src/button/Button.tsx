type IButtonProps = {
  btnClass?: string;
  children: string;
  animate?: boolean;
};

import styles from "./button.module.css";

const StyledButton = (props: IButtonProps) => {
  const { btnClass, animate = false } = props;
  return (
    <div className={`relative ${btnClass}`}>
      <button className={`mr-6 text-black ${styles.outer_button}`}>
        {props.children}
      </button>
      <button
        className={`${animate ? `animate-ping` : ""} ${
          styles.outer_button_transparent
        } bg-blue  mr-6 absolute top-0 left-0 text-transparent`}
      >
        Contact
      </button>
    </div>
  );
};

export { StyledButton };
