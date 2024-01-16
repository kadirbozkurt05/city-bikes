import Header from "../generic/Header";

export default function Pricing(){
    return (
        <> 
        <Header />       
        <div className="container mx-auto mt-8">
          <h1 className="text-3xl font-semibold mb-6">Pricing Plans</h1>
    
          <div className="flex flex-wrap -mx-4 text-center">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="border border-gray-300 p-6 rounded-md bg-white">
                <h2 className="text-xl font-semibold mb-4">Basic Plan</h2>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="text-2xl font-bold text-blue-500 mb-4">€19/month</div>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">Select Plan</button>
              </div>
            </div>
    
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="border border-gray-300 p-6 rounded-md bg-white">
                <h2 className="text-xl font-semibold mb-4">Standard Plan</h2>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="text-2xl font-bold text-blue-500 mb-4">€39/month</div>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">Select Plan</button>
              </div>
            </div>
    
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
              <div className="border border-gray-300 p-6 rounded-md bg-white">
                <h2 className="text-xl font-semibold mb-4">Premium Plan</h2>
                <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="text-2xl font-bold text-blue-500 mb-4">€79/month</div>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">Select Plan</button>
              </div>
            </div>
          </div>
        </div>
        </>

      );
}