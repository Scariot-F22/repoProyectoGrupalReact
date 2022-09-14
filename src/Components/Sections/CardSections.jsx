

const CardSections = ({item}) => {

    
  return (
    <div className="flex justify-center">
        <div className="w-11/12 bg-green-100 border border-gray-200 rounded-lg shadow-xl h-3/4">
                <a href="#">
                    <img className="object-cover w-full rounded-t-lg h-3/4" src={item.img} alt={item.title} />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 capitalize">{item.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-center text-gray-700 capitalize">{item.description}</p>
                </div>
            </div>
    </div>
  )
}

export default CardSections