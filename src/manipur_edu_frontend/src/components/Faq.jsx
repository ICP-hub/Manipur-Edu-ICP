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
    <>
      {/* Web-tablet-Faqs */}
      <div className="p-8 hidden sm1:block">
        <div className="inline-block relative px-2 mb-6 py-1">
          <span className="absolute inset-0 bg-[#FDFF87] h-[13px] mt-auto rounded"></span>
          <h1 className="relative text-2xl font-bold z-10 text-[#13375B] text-[35px]">
            FAQ
          </h1>
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

      {/* mobile-faqs */}
      <div className="block sm1:hidden">
        {/* wrapper */}
        <div className="flex flex-col justify-center items-center gap-2">
          <img src="Faqs.svg" alt="faqs-header" className="h-[45px] w-[85px]" />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-[#A7AAE4] bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                  <h2 className="font-medium">{faq.question}</h2>
                  <span className="relative size-5 shrink-0">
                    <img
                      src="ArrowUp.svg"
                      alt="arrow-up"
                      className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                    />
                    <img
                      src="ArrowDown.svg"
                      className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                      alt="arrow-down"
                    />
                  </span>
                </summary>
                <hr className="bg-[#CBDAFF] mt-4" />

                <p className="mt-4 leading-relaxed text-gray-700">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default FAQ;
