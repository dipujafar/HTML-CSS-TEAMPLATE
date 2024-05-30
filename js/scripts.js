const updateTemplates = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  const heading = formData.get("heading");
  const subheading = formData.get("subheading");
  const actionButton = formData.get("actionButton");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const companyName = formData.get("companyName");
  const companyLogo = formData.get("companyLogo");
  const templateImage = formData.get("templateImage");
  const primaryColor = formData.get("primaryColor");
  const secondaryColor = formData.get("secondaryColor");

  const templates = document.querySelectorAll(".template");
  templates.forEach((template) => {
    template.style.backgroundColor = primaryColor;
    template.style.color = secondaryColor;

    const templateHeading = template.querySelector(".template-heading");
    const templateSubheading = template.querySelector(".template-subheading");
    const templateButton = template.querySelector(".template-button");
    const templateEmail = template.querySelector(".template-email");
    const templatePhone = template.querySelector(".template-phone");
    const templateCompanyName = template.querySelector(".company-name");
    const templateImageElem = template.querySelector(".template-image");
    const templateLogo = template.querySelector(".company-logo");

    templateHeading.textContent = heading;
    templateSubheading.textContent = subheading;
    templateButton.textContent = actionButton;
    templateEmail.textContent = `Email: ${email}`;
    templatePhone.textContent = `Phone: ${phone}`;
    templateCompanyName.textContent = companyName;
    templateImageElem.src = templateImage;
    templateLogo.src = companyLogo;
  });
};
