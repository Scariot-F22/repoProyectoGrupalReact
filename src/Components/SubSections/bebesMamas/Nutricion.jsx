import axios from "axios";
import { useEffect, useState } from "react";
import CardSubSections from "../../Card/CardSubSections";

const Nutricion = () => {

    const [query, setQuery] = useState([]);

    const request = async ()=>{

        const url = "http://localhost:5000/bebesMamas",
            res = await axios.get(url),
            resData = await res.data.nutricionInfantil;
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

export default Nutricion;