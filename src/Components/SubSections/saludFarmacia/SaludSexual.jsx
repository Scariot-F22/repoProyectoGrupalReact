import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CardSubSections from "../../Card/CardSubSections";

const SaludSexual = () => {
  

    const [query, setQuery] = useState([]);

    const request = async ()=>{

        const url = "http://localhost:5000/saludFarm",
            res = await axios.get(url),
            resData = await res.data.saludSexual;
        setQuery(resData);
    };
    

    useEffect(() => {
      request()
    }, [])
    

  return (
    <div>
        {query.map(date => <CardSubSections key={date.id} date={date}/>)}
    </div>
  )
}

export default SaludSexual;