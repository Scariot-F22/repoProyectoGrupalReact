import axios from "axios";
import { useEffect } from "react";
import { useCustomizeContext } from "../../../context/Context";
import CardSubSections from "../../Card/CardSubSections";
import { gridSubSections } from "../gridSubSections";
import { TYPES } from "../../../Cart/ShoppingAction";

const AccesoriosBebe = () => {
  const {state, dispatch} = useCustomizeContext();
  const { accesoriosBebes } = state;
  console.log(accesoriosBebes)

  const requestGet = async () => {
    const url = "http://localhost:5000/accesoriosBebes",
      res = await axios.get(url);
      dispatch({type: TYPES.READ_STATE_PRODUCTS, payload: res.data})
      console.log(res.data)
  };

  useEffect(() => {
    requestGet();
  }, []);

  return (
    <div className={gridSubSections}>
      {accesoriosBebes.map((date) => (
        <CardSubSections key={date.id} date={date} />
      ))}
    </div>
  );
};

export default AccesoriosBebe;
