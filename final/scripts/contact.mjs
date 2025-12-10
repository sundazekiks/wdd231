// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector(".form");

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();


//     const nameField = form.querySelector("input[type='text']");
//     const emailField = form.querySelector("input[type='email']");
//     const companyField = form.querySelector("input:nth-child(3)");

//     let errors = [];


//     form.querySelectorAll(".error").forEach((e) => e.remove());


//     if (nameField.value.trim() === "") {
//       errors.push(addError(nameField, "Name is required"));
//     }


//     if (!validateEmail(emailField.value)) {
//       errors.push(addError(emailField, "Enter a valid email"));
//     }


//     if (companyField.value.trim() === "") {
//       errors.push(addError(companyField, "Company name is required"));
//     }


//     if (errors.length > 0) return;


//     showSuccessMessage(form);
//   });
// });


// function validateEmail(email) {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email.toLowerCase());
// }


// function addError(input, message) {
//   const error = document.createElement("p");
//   error.className = "error";
//   error.style.color = "red";
//   error.style.margin = "5px 0 0 0";
//   error.style.fontSize = "0.9rem";
//   error.textContent = message;

//   input.insertAdjacentElement("afterend", error);
//   return error;
// }


// function showSuccessMessage(form) {
//   const msg = document.createElement("p");
//   msg.textContent = "Form submitted successfully!";
//   msg.style.color = "green";
//   msg.style.fontWeight = "bold";
//   msg.style.marginTop = "1rem";

//   form.appendChild(msg);

//   setTimeout(() => msg.remove(), 4000);

//   form.reset();
// }





document.querySelectorAll(".plan").forEach((plan) => {
  plan.addEventListener("mouseenter", () => {
    plan.style.transform = "scale(1.06)";
    plan.style.transition = "0.25s ease";
  });

  plan.addEventListener("mouseleave", () => {
    plan.style.transform = "scale(1)";
  });
});

document.querySelectorAll(".plan button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".plan button").forEach((btn) => {
      btn.classList.remove("active-plan");
    });

    button.classList.add("active-plan");
  });
});



const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);


document.querySelectorAll(".section, .card").forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

const handleComps = () => {
  console.log("h")
  document.querySelector(".comparisons").showModal();
}


document.querySelector(".comps").addEventListener("click", handleComps)
document.getElementById('closeBtn').addEventListener('click', () => document.querySelector(".comparisons").close())