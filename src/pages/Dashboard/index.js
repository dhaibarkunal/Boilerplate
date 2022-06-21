import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { useGetTodoByIdQuery } from "../../redux/apis/fakeApi";

import appSlice, { getAPIResponse, selectFormattedUserData, selectUserData } from "../../redux/slices/appSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData); //basic selector
  const formattedUserData = useSelector(selectFormattedUserData); //memoized selectors with formatting function
  const { data: apiData /* isLoading, isFetching, isSuccess, isError, error, refetch */ } = useGetTodoByIdQuery(1); // get cached api query data stored in reducer
  // const [addNewPost, { isLoading }] = useAddNewPostMutation() //api mutation example

  useEffect(() => {
    dispatch(appSlice.actions.login({ userData: "User data" })); //action call
    dispatch(getAPIResponse()); //thunk action call
  }, []);

  console.log(userData);
  console.log(formattedUserData);
  console.log(apiData);
  return (
    <div>
      Dashboard page - <Outlet />
    </div>
  );
}

export default Dashboard;
