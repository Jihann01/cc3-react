import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser} from "../redux/UserSlice";
import getusers from "./User";
import { getTaches } from "../redux/TodoSlice";


export default function ListUser() {
  const dispatch = useDispatch();
  const listuser = useSelector((state) => state.user.data).map(
    (item) => item.firstName
  );
  const selecteduser = useSelector((state) => state.user.selecteduser);

  useEffect(() => {
    dispatch(getusers());
    dispatch(getTaches());
  }, [dispatch]);
  return (
    <div>
      <select
        value={selecteduser}
        onChange={(e) => dispatch(addUser(e.target.value))}
      >
        {listuser.map((item,index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </div>
  );
}
