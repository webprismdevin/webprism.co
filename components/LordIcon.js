import lottie from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import { useColorMode } from '@chakra-ui/react'

defineLordIconElement(lottie.loadAnimation);

const LordIcon = ({ trigger, src, target }) => {
  const { colorMode } = useColorMode()

  return (
  <lord-icon 
    style={{ minHeight: 128, minWidth: 128 }} 
    trigger={trigger} 
    src={src}
    colors={colorMode === 'dark' ? "primary:#ffffff,secondary:#90CDF4" : "primary:#121331,secondary:#4299e1"}
    target={target}
    />
)};

export default LordIcon;
