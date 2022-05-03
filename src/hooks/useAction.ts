import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionCreaters from "../store/action-creater/forecast"
export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreaters, dispatch);
};
