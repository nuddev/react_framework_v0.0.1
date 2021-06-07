import { selector } from "recoil";
import countState from "../atoms/exampleAtom";

const countSelector = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const count = get(countState);
      return count;
    },
  });

export default countSelector;