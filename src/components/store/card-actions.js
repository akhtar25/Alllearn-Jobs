import { cardSliceActions } from "./card-slice";

const fetchCardData = () => {
  return async (dispatch) => {
    console.log("inside fetchCardData1");
    const fetchData = async () => {
      const response = await fetch(
        "https://alllearnreview-pr-255.herokuapp.com/jobsFilteredList"
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      //   console.log("inside cardDAta", cartData);
      dispatch(cardSliceActions.replaceCard(cartData));
    } catch (error) {
      console.log(error);
    }
    //
  };
};

export default fetchCardData;
