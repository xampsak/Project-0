import Footer from '../Components/Footer';

const team = [
  { role: 'Managing Director', name: 'Mehak Tarik', img: '/logo.png' },
  { role: 'Business Partner', name: 'Danial Manzor', img: '/logo.png' },
  { role: 'Web Developer', name: 'M. Waleed', img: '/logo.png' },
  { role: 'Backend Developer', name: 'M. Mazz', img: '/logo.png' },
  { role: 'Logo & UI Design', name: 'M. Jamal', img: '/logo.png' },
];

export default function About() {
  return (
    <>
      <div className="bg-[#f5f5f5] py-12 px-4 text-center text-gray-800">
        {/* Team Section using Flex */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 mb-10">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center lg:w-36  md:w-32 w-36">
              <img src={member.img} alt={member.role} className="w-[130px] h-[130px] border-[10px] border-[#504e4f] rounded-full mb-1" />
              <p className="font-semibold text-sm text-center pb-3">{member.role}</p>
              <p className="text-sm text-center bg-[#e1d8cf] px-5 py-2 rounded-full">{member.name}</p>
            </div>
          ))}
        </div>

        {/* Message Section */}
        <div className="max-w-3xl mx-auto text-left space-y-4 text-sm leading-relaxed">
          <h3 className="text-base font-bold">Message From Managing Director:</h3>
          <p>
            Dear valued fashion enthusiasts,
            <br />
            Exciting news awaits you as we are thrilled to introduce our brand-new clothing venture - Elisha! We are on the verge of launching an online fashion emporium that will redefine your style, elegance, and individuality.
          </p>

          <p>
            At Elisha, we believe that fashion is more than just clothing; it's a form of self-expression and an art of embracing one's uniqueness. Our carefully curated collection will cater to all your fashion desires, ensuring you step into the spotlight wherever you go.
          </p>

          <p>
            Our team has worked tirelessly to bring you a diverse range of high-quality apparel and accessories that embody the latest trends and timeless classics. From casual wear to sophisticated formal ensembles, we have something special in store for every occasion and every taste.
          </p>

          <h3 className="text-base font-bold">Meet the Mastermind</h3>
          <p>
            Allow me to introduce myself, Mehak Tarik, the Managing Director of Elisha. With an unwavering passion for fashion and a vision to bring forth a brand that resonates with the modern generation, I am delighted to embark on this sartorial journey with you.
          </p>

          <h3 className="text-base font-bold">Stay Connected</h3>
          <p>
            As the launch of our online store approaches rapidly, we encourage you to stay connected with us. Bookmark our website domain - elisha.com - and be the first to explore our exclusive collection. Additionally, you can reach out to us through the provided contact details for any inquiries or to join our mailing list.
          </p>

          <h3 className="text-base font-bold">Visit Our Office</h3>
          <p>
            For our patrons in Lahore, Pakistan, we invite you to our office located at Landmark Plaza, Jail Road. Come and get a sneak peek into the world of Elisha while we prepare for our official launch.
          </p>

          <h3 className="text-base font-bold">Get Ready</h3>
          <p>
            We are counting down the days until our grand opening, and we cannot wait to share the Elisha experience with all of you. Your unwavering support will be our guiding light as we embark on this exciting journey together.
          </p>

          <p>
            Together with our customers – the future belongs to Elisha! Be a part of this captivating venture, and let’s redefine fashion in Pakistan and beyond.
          </p>

          <div className="pt-4">
            <p className="font-semibold">With fashionable regards,</p>
            <p>Mehak Tarik</p>
            <p>Managing Director, Elisha</p>
            <p>Contact: +92 306 4313804</p>
            <p>Email: info@theelisha.com</p>
          </div>
        </div>
      </div>

      {/* Uncomment below when Footer is needed */}
      <Footer />
    </>
  );
}
