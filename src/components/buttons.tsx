import btn from "../styles/buttons.module.css";

interface ButtonProps {
  description: string;
  redirect: string;
}

export default function PurpleButton({ description, redirect }: ButtonProps) {
  return (
    <>
      <button className={`${btn.btn} ${btn.btn_purple}`}>
        <a href={redirect}>{description}</a>
      </button>
    </>
  );
}

export function LightButton({ description, redirect }: ButtonProps) {
  return (
    <>
      <button className={`${btn.btn} ${btn.btn_light}`}>
        <a href={redirect}>{description}</a>
      </button>
    </>
  );
}

export function PurpleButton2({ description, redirect }: ButtonProps) {
  return (
    <>
      <button className={`${btn.btn2} ${btn.btn_purple}`}>
        <a href={redirect}>{description}</a>
      </button>
    </>
  );
}
