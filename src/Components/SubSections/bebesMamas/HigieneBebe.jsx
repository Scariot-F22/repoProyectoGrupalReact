import axios from "axios";
import { useEffect, useState } from "react";
import { useCustomizeContext } from "../../../context/Context";
import CardSubSections from "../../Card/CardSubSections";
import { gridSubSections } from "../gridSubSections";
import { TYPES } from "../../../Cart/ShoppingAction";

const HigieneBebe = () => {
  const { state, dispatch } = useCustomizeContext();
  const { higieneBebe } = state;

  const requestGet = async () => {
    const url = "http://localhost:5000/higieneBebe",
      res = await axios.get(url);
    dispatch({ type: TYPES.READ_STATE_PRODUCTS, payload: res.data });
  };

  useEffect(() => {
    requestGet();
  }, []);

  return (
    <div className={gridSubSections}>
      {higieneBebe.map((date) => (
        <CardSubSections key={date.id} date={date} />
      ))}
    </div>
  );
};

export default HigieneBebe;
