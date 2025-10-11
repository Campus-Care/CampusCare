document.addEventListener("DOMContentLoaded", () => {
  const issueSelect = document.getElementById("issueSelect");
  const logoSection = document.getElementById("logoSection");
  const formSection = document.getElementById("formSection");
  const form = formSection.querySelector("form");

  // Pre-written emails for each campus issue
  const campusEmails = {
    "cleanliness": {
      to: "estate@iitr.ac.in",
      subject: "Complaint Regarding Sanitation Issues in IIT Roorkee Campus",
      body: `Respected Officer, Sanitation Section – Estate Office,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan, IIT Roorkee. I am writing to bring to your attention several sanitation-related concerns within the campus premises.

In many areas of the campus, including pathways, hostel surroundings, and common spaces, cleanliness standards are not being properly maintained. Accumulation of litter, irregular cleaning of public dustbins, and unclean surroundings not only affect the beauty of the campus but also raise health and hygiene concerns among students.

I kindly request your intervention to ensure regular cleaning and proper waste management across the campus. Increasing the frequency of sanitation rounds, timely disposal of waste, and monitoring of cleaning staff can help maintain a clean and healthy environment for everyone.

I am happy to provide specific details or locations if required and sincerely hope for timely corrective action.

Thank you for your attention and support.

Warm regards,`
    },
    "security": {
      to: "security@iitr.ac.in",
      subject: "Complaint Regarding Safety Concerns Inside IIT Roorkee Campus",
      body: `Respected Security Officer,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan, IIT Roorkee. I am writing to bring to your attention certain safety concerns faced by students, particularly during nighttime within the campus.

Several students have observed insufficient lighting in some areas and limited patrolling during late hours, which creates a sense of insecurity while moving around the campus. These issues not only cause discomfort but also raise genuine concerns about personal safety, especially for students returning from hostels or attending late academic or extracurricular activities.

I kindly request your intervention to enhance security measures within the campus. This may include increasing night patrols, ensuring adequate lighting in all pathways, and implementing other safety protocols to ensure a secure environment for all students. Timely action in this regard will significantly improve the safety and confidence of the campus community.

I am happy to provide further details or specific instances if required and sincerely hope that this matter will be addressed promptly.

Thank you for your attention and support.

Warm regards,`
    },
    "transport": {
      to: "transport-support@iitr.ac.in",
      subject: "Complaint Regarding Transportation Issues at IIT Roorkee",
      body: `Respected Jr. Assistant, Transportation Section,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan, IIT Roorkee. I am writing to bring to your attention ongoing issues related to transportation within the campus.

Several students have faced difficulties due to insufficient number of e-rickshaws during peak hours, and delays in transportation schedules. These issues often lead to students being late for classes, labs, or other academic activities, causing inconvenience and affecting our daily routines.

I kindly request your intervention to improve the reliability and frequency of campus transportation services. Ensuring timely and sufficient transportation options will greatly benefit students and contribute to smoother academic and campus life.

I am happy to provide specific instances or further details if required and sincerely hope that this matter will be addressed promptly.

Thank you for your attention and support.

Warm regards,`
    }
  };

  // Show form when issue is selected
  issueSelect.addEventListener("change", () => {
    if (issueSelect.value) {
      logoSection.classList.add("hidden");
      formSection.classList.remove("hidden");
    } else {
      logoSection.classList.remove("hidden");
      formSection.classList.add("hidden");
    }
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const issue = issueSelect.value;
    const entry = campusEmails[issue];

    if (!entry) {
      alert("⚠️ Please select a valid issue.");
      return;
    }

    const name = document.getElementById("name").value.trim();
    const enrollment = document.getElementById("enrollment").value.trim();
    const room = document.getElementById("room").value.trim();

    if (!name || !enrollment || !room) {
      alert("⚠️ Please fill in all fields.");
      return;
    }

    // Add student details to email body
    const body = encodeURIComponent(entry.body + `\n\nName: ${name}\nEnrollment No: ${enrollment}\nRoom No: ${room}`);

    // Gmail compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${entry.to}&su=${encodeURIComponent(entry.subject)}&body=${body}`;

    window.open(gmailUrl, "_blank");
  });
});
