document.addEventListener("DOMContentLoaded", () => {
  const issueSelect = document.getElementById("issueSelect");
  const logoSection = document.getElementById("logoSection");
  const formSection = document.getElementById("formSection");
  const form = formSection.querySelector("form");

  // Pre-written emails for each mess issue
  const messEmails = {
    "food-quality": {
      to: "cw-rajendra-bhawan@iitr.ac.in",
      subject: "Complaint Regarding Quality of Food at Rajendra Bhawan Mess",
      body: `Respected Chief Warden,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan. I am writing to bring to your attention ongoing concerns regarding the quality of food served in the hostel mess.

Several students, including myself, have noticed issues such as inconsistent taste, undercooked or overcooked items and lack of variety. These problems have affected the overall dining experience and, in some cases, have even caused mild health discomfort among the residents.

I kindly request your intervention to ensure that the food served in the mess is of good quality, nutritious, hygienic, and consistent. Measures such as regular inspection of food preparation, feedback collection from students, and better management of mess operations can greatly improve the overall dining experience for all residents.

I am happy to provide further details or specific examples if required and sincerely hope for timely action to address these concerns.

Thank you for your attention and support.

Warm regards,`
    },
    "hygiene": {
      to: "cw-rajendra-bhawan@iitr.ac.in",
      subject: "Complaint Regarding Hygiene Conditions at Rajendra Bhawan Mess",
      body: `Respected Chief Warden,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan. I am writing to bring to your attention concerns regarding the hygiene conditions in the hostel mess.

Several students, including myself, have observed that the cleanliness standards in the mess are not being maintained properly. Issues include unclean dining tables, utensils, and floors, as well as improper handling and storage of food. These conditions not only affect the overall dining experience but also pose potential health risks to students.

I kindly request your intervention to ensure strict hygiene practices are followed in the mess, including regular cleaning of dining areas and utensils, proper food handling, and monitoring of mess staff. Improving these conditions will greatly contribute to the health, safety, and well-being of all residents of Rajendra Bhawan.

I am happy to provide further details or specific examples if required and sincerely hope for timely action to address these concerns.

Thank you for your attention and support.

Warm regards,`
    },
    "staff": {
      to: "cw-rajendra-bhawan@iitr.ac.in",
      subject: "Complaint Regarding Uncooperative Behavior of Mess Staff at Rajendra Bhawan",
      body: `Respected Chief Warden,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan. I am writing to bring to your attention ongoing issues regarding the behavior and professionalism of the mess staff.

Several students, including myself, have experienced instances of uncooperative and discourteous behavior from the mess staff. This includes reluctance to address complaints, dismissive responses to feedback, and delays in providing necessary services. Such behavior not only affects the overall dining experience but also creates a stressful environment for the students.

I kindly request your intervention to ensure that the mess staff act professionally, courteously, and cooperatively while interacting with students. Implementing measures such as better supervision, training, and clear accountability can help improve the overall functioning and atmosphere of the mess.

I am happy to provide specific examples or further details if required and sincerely hope for timely corrective action.

Thank you for your attention and support.

Warm regards,`
    },
    "timing": {
      to: "cw-rajendra-bhawan@iitr.ac.in",
      subject: "Complaint Regarding Mess Timings at Rajendra Bhawan",
      body: `Respected Chief Warden,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan. I am writing to bring to your attention concerns regarding the timings of the hostel mess.

The current breakfast timing often overlaps with the schedule of morning classes, leaving students with very little time to have their meals. Additionally, there have been instances where the mess closes earlier than the scheduled time, causing inconvenience for students who rely on it for timely meals. These issues affect not only the daily routine but also the overall well-being and concentration of students in academic activities.

I kindly request your intervention to review and adjust the mess timings to better align with students’ class schedules and ensure that the mess operates strictly according to the announced schedule. Properly timed meals will greatly improve the comfort and daily functioning of students residing in Rajendra Bhawan.

I am happy to provide further details or specific examples if required and sincerely hope for timely corrective action.

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
    const entry = messEmails[issue];

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
