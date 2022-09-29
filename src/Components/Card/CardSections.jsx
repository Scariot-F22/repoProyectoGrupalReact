const CardSections = ({item, path}) => {

    
  return (
    <div className="flex justify-center">
        <div className={card}>
                    <img className={imgCard} src={item.img} alt={item.title} />
                <div className="p-2">
                        <h5 className={h5Card}>{item.title}</h5>
                    <p className={pCard}>{item.description}</p>
                </div>
            </div>
    </div>
  )
}

export default CardSections

const stylesCardSections ={
    card: "w-11/12 bg-green-100 border border-gray-200 rounded-lg shadow-xl hover:shadow-lg hover:shadow-slate-400 delay-200 min-h-cover mb-12",
    imgCard: "object-cover w-full rounded-t-lg min-h-cover md:h-3/4",
    h5Card: "p-2 text-md md:text-2xl font-bold tracking-tight text-center text-gray-900 capitalize",
    pCard: "p-2 text-sm md:text-md font-normal text-center text-gray-700 capitalize"
}

const {card,imgCard,h5Card,pCard} = stylesCardSections;