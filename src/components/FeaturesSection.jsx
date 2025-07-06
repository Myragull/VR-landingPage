import { features } from "../constants"

function FeaturesSection() {
  return (
    <div className="relative mt-20   min-h-[800px]">
  <div className="text-center">
    <span className="bg-neutral-900 text-orange-500 rounded-b-full h-6 text-sm font-medium px-2 py-1 uppercase">feature</span>
    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
      Easily build
      <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> your code</span>
    </h2>
  </div>

  {/* ✅ WRAP THE GRID IN A CONTAINER */}
  <div className="max-w-7xl mx-auto flex flex-wrap mt-10 lg:mt-20">
  {features.map((feature, index) => (
    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-6">
      <div className="flex items-start">
        {/* ICON */}
        <div className="flex h-12 w-12 shrink-0 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
          {feature.icon}
        </div>
        {/* TEXT */}
        <div className="ml-4">
          <h5 className="text-lg font-semibold mb-2 text-white">{feature.text}</h5>
          <p className="text-sm text-neutral-400">{feature.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>
</div>

  )
}    

export default FeaturesSection