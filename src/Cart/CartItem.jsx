import { HiPlus, HiTrash } from "react-icons/hi";

const CartItem = (data, delFromCart, addToCart) => {
  let { id, name, price, quantity, image, description } = data.data;
  console.log(data, "carrito en Cart");
  return (
    <div className="flex justify-center md:justify-end">
      {/* <img src={image} alt="" />
        <h4>{name}</h4>
        <h5>${price} x {quantity} = ${price * quantity}</h5>
        <button onClick={() => delFromCart(id)}>Eliminar Uno</button>
        <br />
        <button onClick={() => delFromCart(id, true)}>Eliminar Todos</button> */}

      <div className="flex flex-col items-center justify-center rounded-lg border shadow-md md:flex-row md:justify-between md:max-w-4xl m-12 h-screen md:h-full hover:bg-green-50">
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={image}
          alt="imagen de producto"
        />
        <div className="flex flex-col justify-evenly text-center md:text-start md:justify-between items-center md:items-start p-4 leading-normal h-48 ">
          <div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 uppercase">
              {name}
            </h2>
            <h4 className="mb-3 font-normal text-gray-700">{description}</h4>
          </div>

          <button onClick={() => delFromCart(id, true)} className="text-sm underline">
            Eliminar todos los productos
          </button>
        </div>
        <div className="border-x border-y border-black flex justify-between w-28 p-1 text-lg items-center rounded-md">
          <button onClick={() => delFromCart(id)}>
            <HiTrash  className='hover:text-green-500'/>
          </button>
          <p>{quantity}</p>
          <button >
            <HiPlus className='hover:text-green-500'/>
          </button>
         
        </div>
        <div className="flex flex-col items-center p-0 md:p-4">
          <span className=" text-2xl font-bold">$ {price}</span>
          <span className="pb-2">Total: ${price * quantity}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
