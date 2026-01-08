import {
  GiPaintBrush,
  GiPiercedBody,
  GiCuckooClock,
  GiReceiveMoney,
  GiEyelashes,
} from "react-icons/gi";
import { BsFillEraserFill } from "react-icons/bs";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaWalking } from "react-icons/fa";
import { IconType } from "react-icons";

export const iconMap: { [key: string]: IconType } = {
  paintBrush: GiPaintBrush,
  piercedBody: GiPiercedBody,
  eraser: BsFillEraserFill,
  pmu: GiEyelashes,
  shieldCheckmark: IoShieldCheckmarkSharp,
  cuckooClock: GiCuckooClock,
  walkingIn: FaWalking,
  receiveMoney: GiReceiveMoney,
};
