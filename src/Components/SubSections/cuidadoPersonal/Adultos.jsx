import axios from "axios";
import { useEffect, useState } from "react";
import CardSubSections from "../../Card/CardSubSections";

const Adultos = () => {

    const [query, setQuery] = useState([]);

    const request = async ()=>{

        const url = "http://localhost:5000/cuidadoPersonal",
            res = await axios.get(url),
            resData = await res.data.adultos;
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

export default Adultos;