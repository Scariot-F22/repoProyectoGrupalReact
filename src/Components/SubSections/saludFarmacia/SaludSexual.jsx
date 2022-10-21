import axios from "axios";
import { useEffect, useState } from "react";
import CardSubSections from "../../Card/CardSubSections";
import { gridSubSections } from "../gridSubSections";
import { TYPES } from "../../../Cart/ShoppingAction";
import { useCustomizeContext } from "../../../context/Context";

const SaludSexual = () => {
  const { state, dispatch } = useCustomizeContext();
  const { saludSexual } = state;

  const requestGet = async () => {
    const url = "http://localhost:5000/saludSexual",
      res = await axios.get(url);
    dispatch({ type: TYPES.READ_STATE_PRODUCTS, payload: res.data });
  };

  useEffect(() => {
    requestGet();
  }, []);

  return (
    <div className={gridSubSections}>
      {saludSexual.map((date) => (
        <CardSubSections key={date.id} date={date} />
      ))}
    </div>
  );
};

export default SaludSexual;
