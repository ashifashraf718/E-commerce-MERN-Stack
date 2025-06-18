import { assets } from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"
import Title from "../components/Title"

const About = () => {
  return (
    <div >
      <div className=" text-2xl text-center pt-10 border-t">
        <Title text1={"ABOUT "} text2={"US"}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 "> 
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae, consequuntur architecto veniam officia repellat tenetur tempore. Impedit eos esse omnis obcaecati tenetur exercitationem aperiam, nostrum voluptate delectus labore nemo at.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora rem quia minus hic incidunt! Placeat impedit, amet, sequi dolorum nulla officia debitis nemo, at accusamus est qui explicabo itaque non.
          Eius dolorem rem harum. Eum placeat explicabo facilis iusto. Quas quia reprehenderit minus ullam ad voluptatum est eligendi laboriosam architecto ex omnis, a incidunt unde maxime id earum! Facilis, rem.</p>
          <b className="text-gray-800"> Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis autem, eveniet optio et odit voluptas doloribus eius praesentium voluptates explicabo, rem hic voluptatem minima omnis nihil illo distinctio, quibusdam totam?</p>
        </div>
      </div>
        <div className="text-2xl py-4">
          <Title text1={"WHY "} text2={"CHOOSE US"}/>

        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600
            ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gray-600
            ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium.</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Expetional Customer Service:</b>
            <p className="text-gray-600
            ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium.</p>
          </div>
        </div>
        <NewsletterBox/>
      
    </div>
  )
}

export default About
