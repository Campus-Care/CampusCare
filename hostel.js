document.addEventListener("DOMContentLoaded", () => {
  const issueSelect = document.getElementById("issueSelect");
  const logoSection = document.getElementById("logoSection");
  const formSection = document.getElementById("formSection");
  const form = formSection.querySelector("form");

  // Pre-written emails for each hostel issue
  const hostelEmails = {
    staff: {
      to: "dosw@iitr.ac.in",
      subject: "Complaint Regarding Uncooperative Behaviour of Maintenance Staff at Rajendra Bhawan",
      body: `Respected Dean of Students’ Welfare,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan. I am writing to bring to your attention an ongoing issue with the maintenance staff at our hostel.

Over the past few weeks, I, along with several other residents, have experienced repeated instances of uncooperative and discourteous behavior from the maintenance personnel. Despite lodging requests for essential maintenance and timely assistance, the staff have often responded rudely or delayed addressing the issues, making day-to-day hostel life inconvenient and stressful.

As students, we rely on the hostel staff to ensure a safe and comfortable living environment, and such behavior negatively affects our overall experience at the institute. I kindly request your intervention to address this matter and ensure that the maintenance staff act professionally and cooperate with the residents in the future.

I am happy to provide specific instances or further details if required. I sincerely hope this issue will be looked into at the earliest.

Thank you for your time and consideration.

Warm regards,`
    },
    infrastructure: {
      to: "cw-rajendra-bhawan@iitr.ac.in",
      subject: "Complaint Regarding Poor Infrastructure at Rajendra Bhawan",
      body: `Respected Chief Warden,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan. I am writing to bring to your attention the ongoing issues concerning the hostel’s infrastructure.

Several aspects of the hostel, including specific issues such as plumbing, electrical fittings, furniture, and common areas, have deteriorated significantly over time. These problems are affecting the comfort and safety of the students staying here and have made day-to-day life inconvenient. Despite raising minor complaints previously, the issues persist, indicating the need for immediate attention and proper maintenance.

I kindly request your intervention to assess the situation and take appropriate measures to improve the hostel infrastructure. Ensuring a safe and functional living environment will greatly enhance the overall experience for all residents of Rajendra Bhawan.

I am willing to provide further details or examples if required and hope for a timely resolution of these issues.

Thank you for your attention and support.

Warm regards,`
    },
    cleaning: {
      to: "cw-rajendra-bhawan@iitr.ac.in",
      subject: "Complaint Regarding Irregular Cleaning and Poor Hygiene at Rajendra Bhawan",
      body: `Respected Chief Warden,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan. I am writing to bring to your attention the persistent issues regarding the cleanliness of our hostel.

Over the past few weeks, the cleaning staff has been irregular in performing their duties, leading to unhygienic conditions in the corridors and washrooms. The lack of proper cleaning has created discomfort for the residents and poses potential health risks. Despite repeated verbal requests and reminders from students, the situation has not improved significantly.

I kindly request your intervention to ensure that the cleaning staff adhere to a proper schedule and maintain cleanliness throughout the hostel. Timely action in this regard will greatly improve the living conditions and overall well-being of the students residing in Rajendra Bhawan.

I am happy to provide specific instances or further details if required and sincerely hope that this matter will be addressed promptly.

Thank you for your time and consideration.

Warm regards,`
    },
    laundry: {
      to: "cw-rajendra-bhawan@iitr.ac.in",
      subject: "Complaint Regarding Irregularity of Laundry Services at Rajendra Bhawan",
      body: `Respected Chief Warden,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan. I am writing to bring to your attention ongoing issues with the hostel laundry services.

Several students, including myself, have experienced irregularity in laundry collection and delivery. In addition, clothes are often not washed properly, and some items are returned late or sometimes not returned at all. This has caused significant inconvenience to the residents, affecting our daily routines and overall comfort in the hostel.

I kindly request your intervention to ensure that the laundry staff perform their duties efficiently, maintain the quality of washing, and adhere to a timely schedule for collection and delivery of clothes. Addressing this matter promptly will greatly improve the living experience for all students residing in Rajendra Bhawan.

I am happy to provide specific instances or further details if required and sincerely hope for timely corrective action.

Thank you for your attention and support.

Warm regards,`
    },
    washerman: {
      to: "cw-rajendra-bhawan@iitr.ac.in",
      subject: "Complaint Regarding Irregularity and Mismanagement by Washerman at Rajendra Bhawan",
      body: `Respected Chief Warden,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan. I am writing to bring to your attention persistent issues with the hostel washerman services.

The washerman has been irregular in attending the hostel as per the announced schedule. Additionally, there have been multiple instances of clothes being misplaced or lost, causing inconvenience and frustration for the residents. This irregularity and mismanagement are affecting the students’ ability to maintain proper hygiene and manage daily routines effectively.

I kindly request your intervention to ensure that the washerman adheres to the promised schedule and takes proper care of all clothing items. Addressing this matter promptly will help maintain a smoother and more reliable laundry service for the residents of Rajendra Bhawan.

I am happy to provide specific instances or further details if required and sincerely hope for timely corrective action.

Thank you for your attention and support.

Warm regards,`
    },
    water: {
      to: "cw-rajendra-bhawan@iitr.ac.in",
      subject: "Complaint Regarding Irregular Water Supply and Issues with Water Coolers at Rajendra Bhawan",
      body: `Respected Chief Warden,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan. I am writing to bring to your attention several pressing issues regarding water supply and quality in the hostel.

Firstly, the water supply in the hostel has been highly irregular, causing inconvenience to students in carrying out daily activities. Secondly, the water from the hostel water coolers often has a bad taste, raising concerns about its quality and safety for consumption. Additionally, the water temperature from the coolers is excessively cold, which is not suitable for health given the current weather conditions. Consuming very cold water in such conditions may lead to health issues among the residents.

Moreover, for all four floors, there is only one RO purifier available, which is insufficient to meet the needs of all students. This has led to long waiting times, further aggravating the problem of clean drinking water availability.

I kindly request your intervention to ensure regular water supply, proper maintenance and quality of water in the coolers, and installation of additional RO purifiers to serve all floors adequately. Timely action on these issues will significantly improve the health and well-being of the hostel residents.

I am happy to provide further details if required and sincerely hope that this matter will be addressed promptly.

Thank you for your attention and support.

Warm regards,`
    },
    electricity: {
      to: "cw-rajendra-bhawan@iitr.ac.in",
      subject: "Complaint Regarding Irregular Electricity Supply and Short Circuits at Rajendra Bhawan",
      body: `Respected Chief Warden,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan. I am writing to bring to your attention ongoing issues regarding electricity supply in the hostel.

The electricity supply has been highly irregular, causing inconvenience to students in their academic and daily activities. Additionally, there have been instances of short circuits in some rooms, raising serious concerns about the safety of the residents. These electrical issues not only disrupt daily routines but also pose potential hazards if not addressed promptly.

I kindly request your intervention to ensure a regular and stable electricity supply in the hostel and to carry out immediate maintenance checks to prevent short circuits and ensure the safety of all residents. Timely action on this matter will significantly enhance the living conditions and safety of students at Rajendra Bhawan.

Thank you for your attention and support.

Warm regards,`
    },
    wifi: {
      to: "cw-rajendra-bhawan@iitr.ac.in",
      subject: "Complaint Regarding WiFi Issues at Rajendra Bhawan",
      body: `Respected Chief Warden,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan. I am writing to bring to your attention persistent issues with the hostel WiFi connectivity.

The WiFi often provides very low speed and frequently loses connection, which has caused significant inconvenience for the students. In today’s academic environment, stable internet access is essential, and without it, students face difficulties in accessing e-learning resources, submitting assignments, attending online classes, and carrying out research work.

I kindly request your intervention to improve the stability and speed of the WiFi network in the hostel, ensuring that all residents have reliable access to online academic resources. Timely resolution of this issue will greatly enhance the learning environment and overall experience for students residing in Rajendra Bhawan.

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
    const entry = hostelEmails[issue];

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

    // Replace placeholders for name, enrollment, room in body if needed
    const body = encodeURIComponent(entry.body + `\n\nName: ${name}\nEnrollment No: ${enrollment}\nRoom No: ${room}`);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${entry.to}&su=${encodeURIComponent(entry.subject)}&body=${body}`;

    window.open(gmailUrl, "_blank");
  });
});
