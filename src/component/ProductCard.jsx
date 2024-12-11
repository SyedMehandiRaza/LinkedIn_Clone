const ProductCard = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition duration-500">
        
        
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFwcGxlJTIwaXBob25lfGVufDB8fDB8fHww"
            alt="Apple iPhone"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
            Featured
          </div>
        </div>


        <div className="p-6">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Apple iPhone 14 Pro Max
          </h2>
          <p className="text-gray-600 mt-3">
            Discover innovation at its finest with the latest iPhone. Unmatched performance, design, and camera quality for the tech-savvy.
          </p>


          <div className="flex justify-between items-center mt-6">
            <span className="text-2xl font-bold text-pink-600">$1,099</span>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:opacity-90 hover:shadow-2xl transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;