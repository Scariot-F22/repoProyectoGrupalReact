import axios from "axios";
import { useEffect, useState } from "react";
import CardSubSections from "../../Card/CardSubSections";
import { gridSubSections } from "../gridSubSections";
import { TYPES } from "../../../Cart/ShoppingAction";
import { useCustomizeContext } from "../../../context/Context";

const ElectroSalud = () => {
  const { state, dispatch } = useCustomizeContext();
  const { electroSalud } = state;

  const requestGet = async () => {
    const url = "http://localhost:5000/electroSalud",
      res = await axios.get(url);
    dispatch({ type: TYPES.READ_STATE_PRODUCTS, payload: res.data });
  };

  useEffect(() => {
    requestGet();
  }, []);

  return (
    <div className={gridSubSections}>
      {electroSalud.map((date) => (
        <CardSubSections key={date.id} date={date} />
      ))}
    </div>
  );
};

export default ElectroSalud;
