import React from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is Manipur Edu?",
      answer:
        "Manipur Edu is an online platform connecting students to scholarship opportunities through data-based matching. Our comprehensive database includes Manipur Edu-exclusive scholarships and scholarships from leading non-profits, companies, etc.",
    },
    {
      question: "How will Manipur Edu help me?",
      answer:
        "Manipur Edu helps students save time and money in the process of paying for college by matching you to relevant scholarships that are currently accepting applications.",
    },
    {
      question: "Is Manipur Edu really free?",
      answer: "Manipur Edu is 100% free for students.",
    },
    {
      question: "Is Manipur Edu open to international students?",
      answer:
        "No, Manipur Edu app matches students in India to relevant scholarship opportunities. We also offer some resources for international students, including a guide to studying in India and a list of vetted scholarships.",
    },
  ];

  return (
    <div className=" p-8">
      <div className="inline-block relative px-2 mb-6 py-1">
        <span className="absolute inset-0 bg-[#FDFF87] h-[13px] mt-auto rounded"></span>
        <h1 className="relative text-2xl font-bold z-10 text-[#13375B] text-[35px]">FAQ</h1>
      </div>
      <dl className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="md:flex md:justify-between border-b border-[#DAEAFF] pb-4"
          >
            <dt className="text-2xl w-[50%] text-[#13375B] font-bold">
              {faq.question}
            </dt>
            <dd className="mt-2 w-[50%] md:mt-0 md:ml-4 text-base text-[#00227A]">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
export default FAQ;
