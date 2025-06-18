import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const Contact = () => {
  return (
    <div>
      <div className=" text-2xl text-center pt-10 border-t">
        <Title text1={"CONTACT "} text2={"US"}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[450px]" src={assets.contact_img} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">54709 Willms Station<br />Suite 350, Washington, USA</p>
          <p className="text-gray-500">Phone :+1-221-333-556 <br /> email: admin@gmail.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
          <p>Learn more about our team and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore jobs</button>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact
