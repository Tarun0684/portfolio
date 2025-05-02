import React from 'react'
import Swal from 'sweetalert2'

export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "df226782-adaf-42f8-acb3-79e64fae8b7f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

    return (
        <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
          <div className="w-full max-w-2xl bg-white shadow-xl rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>
    
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                 
                  placeholder="Your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
    
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                  Number
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  required
                  placeholder="Telephone Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
    
              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  
                  placeholder="Write your message here..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
    
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-200"
              >
                Send Message
              </button>
              
            </form>
            <div className="mt-8 text-center text-gray-600">
          Or reach me at: <br />
          <span className="font-medium text-gray-800">karnwaltarunsnm@gmail.com</span>
        </div>
          </div>
        </section>



        
    )
}






  
 

