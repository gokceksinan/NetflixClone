import { ActionTypes } from "../reducers/actionTypes";
import api from "../../utils/api";

export const getPopular = () => (dispatch) => {
  dispatch({
    type: ActionTypes.MOVİES_LOADİNG,
  });

  const params = {
    region: "TUR",
  };

  api
    .get("/movie/popular", { params })
    .then((res) =>
      dispatch({
        type: ActionTypes.MOVİES_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ActionTypes.MOVİES_ERROR,
        payload: err.message,
      })
    );
};
