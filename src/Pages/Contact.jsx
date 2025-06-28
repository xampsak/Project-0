import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row bg-white min-h-screen items-center justify-center px-6 py-12 gap-10">
      {/* Left: Logo */}
      <div className="md:w-1/2 flex justify-center">
        <img src="/logo.png" alt="Elisha Logo" className="w-64" />
      </div>

      {/* Right: Contact Form */}
      <div className="md:w-1/2 border-2 border-gray-400 p-6 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Contact us</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border-b-2 border-gray-500 outline-none px-1 py-2"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input
              type="email"
              className="w-full border-b-2 border-gray-500 outline-none px-1 py-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="3"
              className="w-full border-b-2 border-gray-500 outline-none px-1 py-2"
              placeholder="Write your message"
            ></textarea>
          </div>

          <div className='flex gap-6'>
            
          <button
            type="submit"
            className="bg-[#4a4a4a] text-white px-6 py-2 rounded-full text-sm"
          >
            Contact us :
          </button>

          {/* Social Icons */}
          <div className="flex justify-start items-center  gap-4  text-gray-700 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-black" />
            <FaTiktok className="cursor-pointer hover:text-black" />
            <FaInstagram className="cursor-pointer hover:text-black" />
          </div>
          </div>

        </form>
      </div>
    </div>
  );
}
