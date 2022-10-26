import axios from "axios";
import { useEffect } from "react";
import CardSubSections from "../../Card/CardSubSections";
import { gridSubSections } from "../gridSubSections";
import { TYPES } from "../../../Cart/ShoppingAction";
import { useCustomizeContext } from "../../../context/Context";

const CuidadoOral = () => {
  const {state, dispatch} = useCustomizeContext();
  const { cuidadoOral } = state;
  
  const requestGet = async () => {
    const url = "http://localhost:5000/cuidadoOral",
      res = await axios.get(url);
    dispatch({ type: TYPES.READ_STATE_PRODUCTS, payload: res.data });//desde CuidadoOral
  };

  useEffect(() => {
    requestGet();
  }, []);

  return (
    <div className={gridSubSections}>
      {cuidadoOral.map((date) => (
        <CardSubSections key={date.id} date={date} />
      ))}
    </div>
  );
};

export default CuidadoOral;
