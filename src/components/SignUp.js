// import React from "react";

// const SignUp = () => {
//   return (
//     <div className="flex w-full h-screen border border-gray-200 font-['Mona Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif]">
//       <div
//         className="w-[60%] p-5 bg-cover bg-top space-y-4"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1706821177427-26ba27bd43b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//         }}
//       >
//         <div className="px-24 py-64 space-y-4">
//           <h1 className="text-6xl font-bold text-white ">Stay Turn on </h1>
//           <h1 className="text-6xl font-bold text-white">Idea Your Reality.</h1>
//           <div className="space-x-">
//             <p className="text-white">
//               Create a free account and get ful access to all featuresnfor 30
//               days
//             </p>
//             <p className="text-white">
//               No credit card needed. Trusted by over 4,000 professionals.{" "}
//             </p>
//             {/* <span className="text-white">.5 stars</span>     */}
//             <div className="flex items-center space-x-2 text-white">
//               <div className="flex text-yellow-400 text-xl">
//                 <span>★</span>
//                 <span>★</span>
//                 <span>★</span>
//                 <span>★</span>
//                 <span>★</span>
//               </div>
//               <span>5.0</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right section - 40% width */}
//       <div className="w-[40%] h-[100%] flex flex-col  py-24  px-20  ">
//         <div className="flex flex-col space-y-4">
//           <h1 className="text-2xl font-bold">Sign Up</h1>
//           <p className="text-gray-500">Start your 30-day free trail.</p>

//           <div className="flex flex-col space-y-2">
//             <p>Name*</p>
//             <input
//               type="text"
//               placeholder="Enter your name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           <div className="flex flex-col space-y-2">
//             <p>Email*</p>
//             <input
//               type="text"
//               placeholder="Enter your Email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//           </div>

//           <div className="flex flex-col space-y-2">
//             <p>Password*</p>
//             <input
//               type="text"
//               placeholder="Enter your Password"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             />
//             <p className="text-gray-500">Must be at least 8 characters long</p>
//           </div>

//           {/* <button className="px-6 py-3 text-white bg-purple-600 rounded-lg transition duration-300 hover:bg-white hover:text-purple-600 border-2 border-purple-600 font-semibold">
//             Create Account
//           </button> */}
//           <button className="px-6 py-3 text-white bg-[#7e56da] rounded-lg transition duration-300 hover:bg-white hover:text-[#7e56da] border-2 border-[#7e56da] font-semibold">
//             Create Account
//           </button>

//           <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-semibold transition duration-300 hover:bg-gray-100">
//             <img
//               src="https://static.vecteezy.com/system/resources/previews/013/948/549/original/google-logo-on-transparent-white-background-free-vector.jpg"
//               alt="Google Logo"
//               className="w-5 h-5 mr-3"
//             />
//             Sign up with Google
//           </button>
//           <div className="flex  justify-center space-x-2">
//             <p>
//               Already have an account?{" "}
//               <span className="text-purple-[#7e56da]">Log in</span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import React from "react";

const SignUp = () => {
  return (
    <div className="flex w-full h-screen border border-gray-200 font-['Mona Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif]">
      {/* Left Section with Tinted Background */}
      <div
        className="w-[60%] p-5 bg-cover bg-top relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1706821177427-26ba27bd43b7?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-50"></div>

        <div className="relative px-24 py-64 space-y-4">
          <h1 className="text-6xl font-bold text-white">Stay Turned On</h1>
          <h1 className="text-6xl font-bold text-white">Idea Your Reality.</h1>
          <p className="text-white">
            Create a free account and get full access to all features for 30
            days.
          </p>
          <p className="text-white">
            No credit card needed. Trusted by over 4,000 professionals.
          </p>
          <div className="flex items-center space-x-2 text-white">
            <div className="flex text-yellow-400 text-xl">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span>5.0</span>
          </div>
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="w-[40%] h-full flex flex-col py-24 px-20">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold">Sign Up</h1>
          <p className="text-gray-500">Start your 30-day free trial.</p>

          <div className="flex flex-col space-y-2">
            <p>Name*</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <p>Email*</p>
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <p>Password*</p>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            <p className="text-gray-500">Must be at least 8 characters long</p>
          </div>

          <button className="px-6 py-3 text-white bg-[#7e56da] rounded-lg transition duration-300 hover:bg-white hover:text-[#7e56da] border-2 border-[#7e56da] font-semibold">
            Create Account
          </button>

          <button className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg bg-white text-gray-700 font-semibold transition duration-300 hover:bg-gray-100">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/948/549/original/google-logo-on-transparent-white-background-free-vector.jpg"
              alt="Google Logo"
              className="w-5 h-5 mr-3"
            />
            Sign up with Google
          </button>

          <div className="flex justify-center space-x-2">
            <p>
              Already have an account?{" "}
              <span className="text-[#7e56da] cursor-pointer">Log in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
