import local from "./localStrategy";
import FourtyTwo from "./fourtyTwoStrategy";
import { User } from "../entity/user";

export default () => {
  local();
  FourtyTwo();
};
