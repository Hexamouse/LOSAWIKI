import Image from "next/image";

const OurTeams = () => {
  return (
    <div>
      <h1 className="text-white text-4xl font-bold mt-20 mb-3 text-center">
        Our Teams
      </h1>
      <h3 className="text-white text-lg font text-center mb-10">
        These are three Information Technology students who are dedicated and full of potential. They have a vision to bring new innovations to the world of technology, continue to learn, and contribute to the common progress.
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#2A2A2A] rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden cursor-pointer">
          <Image
            src="/Teams/Dzikri.jpeg"
            alt="Team Member 1"
            width={300}
            height={100}
            className="w-full h-[400px] object-cover mb-3"
          />
          <div className="p-4 text-center">
            <h2 className="text-white text-lg font-semibold">
              Muhammad Dzikri Maulana
            </h2>
            <h3>22101152630449</h3>
            <p className="text-gray-400 text-sm mb-2">Developer</p>
            <a href="https://www.instagram.com/__zxkrm/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#08A170] inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7H8v4H5v2h3v4h8v-4h3v-2h-3z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-[#2A2A2A] rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden cursor-pointer">
          <Image
            src="/Teams/Reyhan.jpeg"
            alt="Team Member 2"
            width={300}
            height={150}
            className="w-full h-[400px] object-cover mb-3"
          />
          <div className="p-4 text-center">
            <h2 className="text-white text-lg font-semibold">
              Reyhan Maulana
            </h2>
            <h3>22101152630302</h3>
            <p className="text-gray-400 text-sm mb-2">Developer</p>
            <a href="https://www.instagram.com/rerey_150/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#08A170] inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7H8v4H5v2h3v4h8v-4h3v-2h-3z" />
              </svg>
            </a>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-[#2A2A2A] rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden cursor-pointer">
          <Image
            src="/Teams/Rino.png"
            alt="Team Member 3"
            width={300}
            height={300}
            className="w-full h-[400px] object-cover mb-3"
          />
          <div className="p-4 text-center">
            <h2 className="text-white text-lg font-semibold">Rino Febrian</h2>
            <h3>22101152630303</h3>
            <p className="text-gray-400 text-sm mb-2">Designer</p>
            <a href="https://www.instagram.com/rinooeee/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#08A170] inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7H8v4H5v2h3v4h8v-4h3v-2h-3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
