import axios from "axios";
import { SUCCESS,FAIL } from "../constants/restConstants";

export const restList = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/restaurants.json')
        dispatch(
            {
                payload:data.restaurants,
                type:SUCCESS
            }
        )
    }
    catch(error) {
        dispatch(
            {
                payload:error,
                type:FAIL
            }
        )

    }
}



