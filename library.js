document.addEventListener("DOMContentLoaded", () => {
  const issueSelect = document.getElementById("issueSelect");
  const logoSection = document.getElementById("logoSection");
  const formSection = document.getElementById("formSection");
  const form = formSection.querySelector("form");

  // Pre-written emails for each library issue
  const libraryEmails = {
    "unavailability": {
      to: "library@iitr.ac.in",
      subject: "Complaint Regarding Unavailability and Mismanagement of Books at MGCL, IIT Roorkee",
      body: `Respected Librarian,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan, IIT Roorkee, and I wish to bring to your attention some concerns regarding the unavailability and mismanagement of books at Mahatma Gandhi Central Library (MGCL).

On several occasions, students have faced difficulties in finding the reference books suggested by professors, as many of them are either not available in the library or have very limited copies. This issue becomes particularly critical during examination periods when students rely heavily on these resources for preparation. Additionally, it has been observed that some students intentionally place books in incorrect locations or hide them, making it difficult for others to locate and access them when needed.

Such practices not only disrupt the fair use of library resources but also create unnecessary inconvenience for sincere students who depend on these materials for academic work.

I sincerely request that appropriate measures be taken to ensure:

1. Adequate copies of important and frequently referenced books are made available, especially during exam seasons.
2. Regular checks are conducted to ensure books are properly shelved.
3. A monitoring or reporting system is implemented to prevent deliberate misplacement of books.

Your attention to this matter will greatly help improve the accessibility and efficiency of library services for all students.

Thank you for your understanding and kind cooperation.

Warm regards,`
    },
    "timing": {
      to: "library@iitr.ac.in",
      subject: "Request to Review Book Issue and Return Timings at MGCL, IIT Roorkee",
      body: `Respected Librarian,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan, IIT Roorkee, and I would like to bring to your attention a concern regarding the current book issue and return timings at Mahatma Gandhi Central Library (MGCL).

The existing schedule for issuing and returning books coincides largely with students’ academic hours, as most classes are conducted between 10 a.m. and 7 p.m. During the short breaks between classes, students often have to manage lunch, attend tutorials, or prepare for upcoming lectures. As a result, it becomes very difficult for many students to visit the library within the allotted time to issue or return books.

This timing constraint particularly affects first-year students who have tightly packed schedules and limited flexibility. Consequently, several students end up missing deadlines for book returns, which sometimes leads to unnecessary fines or delays in accessing required materials.

I kindly request that the library administration consider extending or adjusting the issue/return timings—perhaps by opening the counters earlier in the morning or keeping them operational for a while in the evening—to better accommodate students’ academic commitments. Such a measure would greatly enhance convenience and accessibility for all.

Thank you for your time and understanding. I hope this concern will be addressed at the earliest for the benefit of the student community.

Warm regards,`
    },
    "wifi": {
      to: "library@iitr.ac.in",
      subject: "Complaint Regarding Slow and Unstable WiFi Connectivity at MGCL, IIT Roorkee",
      body: `Respected Librarian,

I hope this message finds you well. I am a first-year student residing in Rajendra Bhawan, IIT Roorkee, and I would like to bring to your attention an issue regarding the WiFi connectivity at Mahatma Gandhi Central Library (MGCL).

Many students, including myself, have been facing persistent problems with slow internet speed and frequent disconnections while using the library’s WiFi. These interruptions occur quite often and make it difficult to access online learning platforms, research papers, and digital study materials. Since a major part of academic work and reference resources are now available digitally, such network issues significantly hinder students’ ability to study and make effective use of library facilities.

I kindly request that the network infrastructure be reviewed and necessary steps be taken to improve the stability and speed of the WiFi connection within the library premises. Ensuring a reliable internet connection will greatly enhance the learning experience and productivity of students.

Thank you for your time and understanding. I hope this issue will be resolved soon for the benefit of all users of the library.

Warm regards,`
    }
  };

  // Show form when an issue is selected
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
    const entry = libraryEmails[issue];

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
