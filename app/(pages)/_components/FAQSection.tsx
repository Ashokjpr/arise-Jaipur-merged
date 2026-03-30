'use client';
import Link from "next/link";

import { useState } from "react";

const faqs = [
  {
    q: "What courses does Arise Medical Academy Jaipur offer?",
    a: "Arise Medical Academy Jaipur offers Regular Offline Batches, Online Batches, Vacation Batches, Revision Programs, and Infinity Batches.",
  },
  {
    q: "How are the classes conducted?",
    a: "Two modes we have to conduct our Classes i.e Offline & Online.",
  },
  {
    q: "How many branches does Arise have?",
    a: "Arise has 5 branches in Jaipur, Delhi, Hyderabad, Kerala, and Chennai.",
  },
  {
    q: "How can I communicate with the Arise Jaipur team?",
    a: (
      <>
        You can communicate with us through our social media channels or reach
        out directly at{" "}
        <Link
          href="tel:+919929113115"
          className="text-blue-600 font-semibold hover:underline"
        >
          +91 9929113115
        </Link>
        {" "}or{" "}
        <Link
          href="https://wa.me/919929113115"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          WhatsApp
        </Link>
        .
      </>
    ),
  },
  {
    q: "How can I enroll in a course?",
    a: (
      <>
        You can enroll by visiting our website and filling out the 
        <a 
          href="https://registerjaipur.arisemedicalacademy.com/"
          className="text-blue-600 font-semibold hover:underline"
          > Enrollment form</a>, or contact us directly at{" "}
        <a
          href="tel:+919929113115"
          className="text-blue-600 font-semibold hover:underline"
        >
          +91 9929113115
        </a>
        .
        <br />
        <Link
          href="https://wa.me/919929113115"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
        >
          Enquire on WhatsApp.
        </Link>
      </>
    ),
  },
  {
    q: "What is included in the study material?",
    a: "Our study material includes detailed workbooks, an extensive question bank, previous year questions, image-based learning resources, and up-to-date exam information.",
  },
  {
    q: "What makes Arise Medical Academy Jaipur different from other institutes?",
    a: "Arise Jaipur is situated at a peaceful Placem & easy accommodation, easy  transportation, and budget-friendly living. That’s why it is suitable for All students from different states.",
  },
  {
    q: "Can I access the study material and classes online?",
    a: "Yes, our app provides access to all study materials, classes, and additional resources online, allowing you to study anytime, anywhere.",
  },
  {
    q:"Is a library facility available at the institute?",
    a:"Yes, We have library available 24x7 in the campus provides.",
  }
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-10 md:mt-15 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 my-4 text-center">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-900 hover:bg-blue-60 transition"
              >
                <span>
                  {index + 1}. {faq.q}
                </span>

                <span className="text-xl">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-700 text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}