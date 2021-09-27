var reg = $("#register");

reg.validate({
  rules: {
    Username: {
      required: true,
      minlength: 4,
    },
    Place: {
      required: true,
    },
    gender: {
      required: true,
    },
    email: {
      required: true,
    },
    phone: {
      required: true,
      digits: true,
      maxlength: 10,
      minlength: 10,
    },
    employment_status: {
      required: true,
    },
    education: {
      required: true,
    },
    college_name: {
      required: true,
    },
    graduation_year: {
      required: true,
    },
    bio: {
      required: true,
    },
    why_you_join: {
      required: true,
    },
    what_motive: {
      required: true,
    },
    learn_about_sps: {
      required: true,
    },
    faq_agree: {
      required: true,
    },
  },

  messages: {
    username: {
      required: "This field is required.",
    },
  },

  submitHandler: function (form) {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbx1rtbtvDtdM3fTZqUd7TF5Js4n2bhf7VnPjACD/exec",
      data: $("#register").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully");
        window.location.reload();
        // window.location.href = "index.html";
      },
      error: function (err) {
        alert("Something Error");
      },
    });
  },
});