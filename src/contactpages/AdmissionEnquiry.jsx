import React, { useState } from "react";
import {
  User,
  Users,
  GraduationCap,
  Phone,
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";

const AdmissionEnquiry = ({
  title = "Admission Enquiry",
  highlight = "Begin Your Child's Journey",
  description = "Have questions about admissions? Share your details with us and our school team will be happy to assist you.",
  whatsappNumber = "919876543210",

  classes = [
    "Nursery",
    "LKG",
    "UKG",
    "Class I",
    "Class II",
    "Class III",
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
    "Class XI",
    "Class XII",
  ],
}) => {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    className: "",
    phone: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `
*Admission Enquiry*

*Student Name:* ${formData.studentName}

*Parent Name:* ${formData.parentName}

*Class:* ${formData.className}

*Phone:* ${formData.phone}

*Email:* ${formData.email || "Not provided"}

*Message:*
${formData.message || "No additional message"}
    `.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setSubmitted(true);

    window.open(whatsappUrl, "_blank");

    setFormData({
      studentName: "",
      parentName: "",
      className: "",
      phone: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="relative overflow-hidden bg-white py-16 mt-12 sm:py-20 lg:py-24">
      {/* Decorative Elements */}
      <div className="pointer-events-none absolute left-0 top-20 h-40 w-40 bg-blue-50" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 bg-yellow-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="mx-auto mb-12 max-w-3xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600">
            <GraduationCap className="h-4 w-4" />
            Admission Enquiry
          </div>

          <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {title}{" "}
            <span className="relative inline-block text-blue-600">
              {highlight}

              <span className="absolute -bottom-1 left-0 h-1 w-full bg-yellow-400" />
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>

        {/* ================= FORM ================= */}
        <div className="mx-auto max-w-5xl">

          <div className="relative border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.07)]">

            {/* Top Accent */}
            <div className="absolute left-0 top-0 h-1 w-full bg-blue-600" />

            {/* Decorative Corner */}
            <div className="absolute right-0 top-0 h-14 w-14 border-l border-b border-yellow-300 bg-yellow-50/70" />

            <div className="p-6 sm:p-8 lg:p-10">

              <form onSubmit={handleSubmit} className="space-y-7">

                {/* ================= ROW 1 ================= */}
                <div className="grid gap-6 md:grid-cols-2">

                  {/* Student Name */}
                  <div>
                    <label
                      htmlFor="studentName"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Student Name{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-500" />

                      <input
                        id="studentName"
                        name="studentName"
                        type="text"
                        value={formData.studentName}
                        onChange={handleChange}
                        required
                        placeholder="Enter student's name"
                        className="w-full border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  {/* Parent Name */}
                  <div>
                    <label
                      htmlFor="parentName"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Parent Name{" "}
                      <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <Users className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-500" />

                      <input
                        id="parentName"
                        name="parentName"
                        type="text"
                        value={formData.parentName}
                        onChange={handleChange}
                        required
                        placeholder="Enter parent's name"
                        className="w-full border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                </div>

                {/* ================= ROW 2 ================= */}
                <div className="grid gap-6 md:grid-cols-2">

                  {/* Class */}
                  <div>
                    <label
                      htmlFor="className"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Class <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <GraduationCap className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-emerald-500" />

                      <select
                        id="className"
                        name="className"
                        value={formData.className}
                        onChange={handleChange}
                        required
                        className="w-full appearance-none border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-800 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                      >
                        <option value="">Select class</option>

                        {classes.map((classItem) => (
                          <option key={classItem} value={classItem}>
                            {classItem}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-bold text-slate-700"
                    >
                      Phone <span className="text-red-500">*</span>
                    </label>

                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-blue-500" />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Enter phone number"
                        className="w-full border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                  </div>
                </div>

                {/* ================= EMAIL ================= */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Email
                  </label>

                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-violet-500" />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className="w-full border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* ================= MESSAGE ================= */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold text-slate-700"
                  >
                    Message
                  </label>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-orange-500" />

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Write your enquiry or any questions..."
                      className="w-full resize-none border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* ================= SUBMIT ================= */}
                <div className="pt-1">

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 bg-blue-600 px-6 py-4 text-base font-bold text-white transition hover:bg-blue-700"
                  >
                    <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                    Submit Enquiry
                  </button>

                </div>

                {/* ================= SUCCESS ================= */}
                {submitted && (
                  <div className="flex items-center gap-3 border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold text-emerald-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0" />

                    Enquiry prepared successfully. WhatsApp is opening with
                    your enquiry details.
                  </div>
                )}

                {/* Bottom Note */}
                <div className="border-t border-slate-100 pt-5 text-center">
                  <p className="text-xs leading-5 text-slate-500">
                    Your enquiry details will be opened in WhatsApp for
                    sending to the school.
                  </p>
                </div>

              </form>
            </div>
          </div>

          {/* Bottom Trust Points */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-blue-500" />
              Quick Response
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-yellow-400" />
              Admission Assistance
            </span>

            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-emerald-500" />
              Easy Enquiry
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionEnquiry;