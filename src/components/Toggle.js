import { useEffect, useState } from "react";

function Toggle(props) {
  const [open, setOpen] = useState(props.open);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  return (
    <div
      className={open ? "toggle-close" : "toggle-open"}
      onClick={props.onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Toggle;
