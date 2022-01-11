import lottie from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

defineLordIconElement(lottie.loadAnimation);

const LordIcon = ({ trigger, src, target }) => (
  <lord-icon 
    style={{ minHeight: 128, minWidth: 128 }} 
    trigger={trigger} 
    src={src}
    colors="primary:#121331,secondary:#4299e1"
    target={target}
    />
);

export default LordIcon;
