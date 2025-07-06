"use client";
import { useForm } from "react-hook-form";

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    alert("Form submitted!");
  };

  return (
    <section className="bg-gray-400 w-full mt-50 py-20 px-6" id="contact">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-blue-900">Contact Dr. Blake</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <input {...register("name", { required: true })}
              className="w-full border border-gray-300 p-4 rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Name" />
            {errors.name && <p className="text-red-600 text-sm mt-1">Name is required.</p>}
          </div>
          <div>
            <input {...register("phone", { required: true })}
              className="w-full border border-gray-300 p-4 rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Phone" />
            {errors.phone && <p className="text-red-600 text-sm mt-1">Phone is required.</p>}
          </div>
          <div>
            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
              className="w-full border border-gray-300 p-4 rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Email" />
            {errors.email && <p className="text-red-600 text-sm mt-1">Valid email is required.</p>}
          </div>
          <div>
            <textarea {...register("message", { required: true })}
              className="w-full border border-gray-300 p-4 rounded focus:ring-2 focus:ring-blue-400"
              placeholder="What brings you here?" />
            {errors.message && <p className="text-red-600 text-sm mt-1">This is required.</p>}
          </div>
          <div>
            <input {...register("preferredTime", { required: true })}
              className="w-full border border-gray-300 p-4 rounded focus:ring-2 focus:ring-blue-400"
              placeholder="Preferred time to reach you" />
            {errors.preferredTime && <p className="text-red-600 text-sm mt-1">This is required.</p>}
          </div>
          <div className="flex items-center">
            <input type="checkbox" {...register("agree", { required: true })} className="mr-2"/>
            <label>I agree to be contacted</label>
          </div>
          {errors.agree && <p className="text-red-600 text-sm mt-1">You must agree.</p>}
          <button type="submit" className="w-full bg-gray-600 text-white p-4 rounded hover:bg-blue-700 transition">Submit</button>
        </form>
      </div>
    </section>
  );
}
