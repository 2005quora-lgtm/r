const Createcard = ({ card }) => {
  return (
      <div className={`${card.booked? "bg-gray-800 text-white m-5 rounded-md border border-yellow-500 overflow-hidden text-center transition-all duration-300 transform hover:scale-105 hover:bg-red-600":"bg-gray-800 text-white m-5 rounded-md border border-yellow-500 overflow-hidden text-center transition-all duration-300 transform hover:scale-105 hover:bg-green-600"}`}>
        <figure>
          <img src={card.image} alt={card.name} className="w-full h-48 object-cover" />
        </figure>
        <h2 className="text-xl font-bold mt-2">{card.name}</h2>
        <div className="text-gray-300">{card.location}</div>
        <b className="text-gray-400">{card.price}</b>
        <p
  className={`p-2 border rounded-sm ${card.booked ? "bg-red-600" : "bg-green-600"} text-white`}
>
  {card.booked ? "Booked" : "Available"}
</p>

      </div>
  )
}

export default Createcard