import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const SuccessStories = () => {
  return (
    <div className="p-3">
      <div className="section-title mt-2">
        <h2 className="text-ternaryTextColor">Stories</h2>
        <p className="text-primaryTextColor">Success Stories</p>
      </div>
      <div className="grid grid-cols-2 gap-3 mt-3">
        {/* Story 1 */}
        <div className="bg-white p-3 rounded-lg shadow-lg">
          <div className="flex gap-3 items-center">
            <div className="w-15 w-15">
              <Image
                width={50}
                height={50}
                src="https://bootstrapmade.com/demo/templates/Impact/assets/img/testimonials/testimonials-3.jpg"
                className="rounded-full flex-shrink-0"
                alt="avatar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div className="ml-2">
              <h3 className="text-xl font-bold text-gray-800">Matt Brandon</h3>
              <h4 className="text-xs text-gray-400 font-medium">
                Software Engineer At TechSoft Pvt Ltd
              </h4>
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
            </div>
          </div>
          <p className="font-light text-sm italic mt-4">
            <FaQuoteLeft className="text-[#4254F0] inline-block relative top-[-5px] left-[-5px]" />
            As an ambitious eighth grader, Sidharth was trying to juggle softball, golf, and school work. Unfortunately, his parents were concerned that the crowded traditional public school classroom she was attending was holding her back.

So Sidharth decided to join eduro class. Now he says small student-to-teacher ratios and the versatility to set her own online learning schedule have boosted her performance on and off the field. he also says the ability to complete work from anywhere, and learn at her own pace, has reduced the pressure of an active life.

“Say you’re going on a family vacation. You can work ahead so that you don’t have to do work while you’re there.” he explains. “And you don’t have to stress while you’re there.”
            <FaQuoteRight className="text-[#4254F0] inline-block relative top-2 right-[-5px]" />
          </p>
        </div>

        {/* Story 2 */}
        <div className="bg-white p-3 rounded-lg shadow-lg">
        <FaQuoteLeft className="text-[#4254F0] inline-block relative top-[-5px] left-[-5px]" />
        Maria shrestha  was a busy sixth grader when she started considering moving to eduro class. She was struggling to balance competitive surfing, work, online school, and traditional public school. Then COVID-19 morphed K-12 schools across the nation. As the pandemic shifted the way her public school delivered education, it made it even more difficult to manage school, work, and the sport she loves.

By moving to eduro class, Maria was able to balance her responsibilities and create a learning schedule that fits into her daily responsibilities—no matter where she decides to work. “What’s nice is for some of my assignments for Algebra I would submit on my phone and just log into Method and upload it from there,” she explains. “So it’s really nice with Method—how you can work anywhere.”

She’s also seen her grades rise, and she says Method’s self-pacing guides have had a heavy impact on her academic climb. With self-paced programs, Makayla is able to spend more time on difficult subjects or race ahead in areas she understands.

“It’s just nice being able to work at my own pace,” she explains.
<FaQuoteRight className="text-[#4254F0] inline-block relative top-2 right-[-5px]" />
          
        </div>

        <div className="bg-white p-3 rounded-lg shadow-lg">
        <FaQuoteLeft className="text-[#4254F0] inline-block relative top-[-5px] left-[-5px]" />

          
Certainly! Here's the modified text with the college name changed to "Eduro Class":

"When I first started at Eduro Class, I was a little wary about taking online classes because I knew that I would need to keep myself motivated and accountable. However, I ended up taking two online classes my first semester and really liked the convenience of it. Since my first semester at Eduro Class, I have taken about eight more online classes. I live about 45 minutes away from Eduro Class, so online classes saved me gas money and time. Along with going to school, I have a part-time job. Online classes allowed me to go to work and take care of other responsibilities while taking classes and doing homework on my own time. It was nice to have the option of taking an online class if the regular classes on campus conflicted with my schedule. Another great aspect of online classes at Eduro Class is that you can look ahead at future assignments and plan ahead for them. I found it very helpful to write down assignments in a planner to keep myself on track. It’s crucial to remember that online classes are just as important as classes on campus. It was extremely helpful to set aside as much time for my online classes as I would for classes on campus. I checked my online classes every day for upcoming readings and assignments and could usually set aside a couple of days a week to do the homework and discussions. I think Eduro Class does a great job of getting students, even online students, involved through the many clubs offered and through SAB events. Overall, I have been tremendously impressed with the online classes I have taken through Eduro Class and highly recommend them to students that are motivated to learn and willing to put in the time and effort." – Sima thapa
       
        </div>
        <FaQuoteRight className="text-[#4254F0] inline-block relative top-2 right-[-5px]" />
        
     
      </div>
    </div>
  );
};

export default SuccessStories;
