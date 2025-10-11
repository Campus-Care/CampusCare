document.addEventListener("DOMContentLoaded", () => {
  const issueSelect = document.getElementById("issueSelect");
  const logoSection = document.getElementById("logoSection");
  const formSection = document.getElementById("formSection");
  const form = formSection.querySelector("form");

  // Pre-written emails for each hospital issue
  const hospitalEmails = {
    "staff": {
      to: "cmo@iitr.ac.in",
      subject: "Concerning Uncooperative Behaviour of Hospital Staff at Institute Hospital, IIT Roorkee",
      body: `Respected Chief Medical Officer,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan, IIT Roorkee. I am writing to express my concern regarding the uncooperative and insensitive behaviour exhibited by certain members of the hospital staff at the Institute Hospital.

On multiple occasions, students have faced dismissive and unhelpful responses from the staff while seeking medical assistance. In some cases, students have had to wait for long periods or repeat requests for even basic guidance or treatment. Such behaviour is highly discouraging, especially when students are unwell and in genuine need of support.

This lack of cooperation not only causes unnecessary distress but also discourages students from approaching the hospital when they require medical attention. For an institution of IIT Roorkee’s stature, the campus hospital should represent care, professionalism, and compassion—values that every patient deserves to experience.

I sincerely request your kind intervention to look into this matter and take the necessary steps to ensure that the hospital staff treat all students with empathy and respect. Proper guidance, sensitivity training, and supervision could help restore students’ confidence in the institute’s healthcare system.

Thank you for your time and understanding. I am hopeful that prompt and effective action will be taken to address this concern.

Warm regards,`
    },
    "cleanliness": {
      to: "cmo@iitr.ac.in",
      subject: "Complaint Regarding Cleanliness Issues at Institute Hospital, IIT Roorkee",
      body: `Respected Chief Medical Officer,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan, IIT Roorkee. I am writing to bring to your attention concerns regarding the cleanliness and hygiene conditions at the Institute Hospital.

Several students have observed that the overall cleanliness of the hospital premises, including waiting areas, corridors, and washrooms, is not being maintained properly. Unclean surroundings in a medical facility not only create discomfort for patients and visitors but also pose serious health risks, especially for those with weakened immunity. Such conditions reflect poorly on the standards of hygiene expected from an institutional healthcare facility.

I kindly request your intervention to ensure that proper sanitation practices are followed in all parts of the hospital. Regular cleaning, timely waste disposal, and strict supervision of housekeeping staff can help maintain a clean, safe, and hygienic environment for everyone visiting the hospital.

I am happy to provide specific details or observations if required and sincerely hope that this matter will be addressed promptly.

Thank you for your attention and consideration.

Warm regards,`
    },
    "doctor": {
      to: "cmo@iitr.ac.in",
      subject: "Concern Regarding Doctor Availability at Institute Hospital, IIT Roorkee",
      body: `Respected Chief Medical Officer,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan, IIT Roorkee. I am writing to express concern regarding the limited and irregular availability of doctors at the Institute Hospital.

The official consultation hours, usually from 8:00–11:00 a.m. and 2:00–5:00 p.m., overlap almost entirely with the class timings of most students. As a result, it becomes extremely difficult for students to visit the hospital without missing lectures or practical sessions. This situation leaves many students unable to seek timely medical attention, even for urgent or genuine health issues.

Moreover, there have been several instances where some doctors arrive late or leave before their scheduled time, further reducing the already limited consultation window. Such irregularity causes additional inconvenience and delays treatment for those who manage to visit during the official hours.

I kindly request your intervention to review and revise the current system so that students have better access to medical services. Possible measures could include extending the hospital’s consultation hours, ensuring doctors adhere strictly to their schedules, and introducing a rotational duty system to make healthcare accessible throughout the day.

Ensuring consistent availability of doctors will go a long way in improving students’ health, well-being, and confidence in the Institute Hospital.

Thank you for your attention and support. I sincerely hope this issue will be addressed at the earliest.

Warm regards,`
    },
    "medicine": {
      to: "cmo@iitr.ac.in",
      subject: "Complaint Regarding Unavailability of Medicines at Institute Hospital, IIT Roorkee",
      body: `Respected Chief Medical Officer,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan, IIT Roorkee. I am writing to bring to your attention concerns regarding the frequent unavailability of prescribed medicines at the Institute Hospital.

Many students have faced situations where the hospital pharmacy does not have essential or commonly prescribed medicines in stock. This forces students to purchase medicines from outside pharmacies, which not only causes inconvenience but also delays timely treatment. The problem becomes more serious during late hours or emergencies when external medical stores are closed or far from the campus.

For a large academic institution like IIT Roorkee, it is crucial that the hospital maintains a consistent stock of essential and emergency medicines to meet students’ medical needs promptly.

I kindly request your intervention to ensure that the pharmacy inventory is reviewed regularly and replenished on time. Implementing a proper stock management system and ensuring the availability of basic medicines and first-aid supplies at all times will greatly improve the efficiency and reliability of medical services for students.

Thank you for your attention and support. I sincerely hope this matter will be addressed at the earliest.

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
    const entry = hospitalEmails[issue];

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
