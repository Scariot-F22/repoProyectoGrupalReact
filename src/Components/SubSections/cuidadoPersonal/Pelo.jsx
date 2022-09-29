import axios from "axios";
import { useEffect, useState } from "react";
import CardSubSections from "../../Card/CardSubSections";

const Cabello = () => {

    const [query, setQuery] = useState([]);

    const request = async ()=>{

        const url = "http://localhost:5000/cuidadoPersonal",
            res = await axios.get(url),
            resData = await res.data.cabello;
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

export default Cabello;