const updateTemplates = async (event) => {
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

  const logoFile = companyLogo;
  const logo = await imageUpload(logoFile);
  console.log(logo);

  const templateImgFile = templateImage;
  const templateImg = await imageUpload(templateImgFile);
  console.log(templateImg);

  // hosting image

  const templates = document.querySelectorAll(".template");
  const secondaryBg = document.querySelectorAll(".secondaryBg");
  const secondaryTextColors = document.querySelectorAll(".secondaryColor");
  templates.forEach((template) => {
    template.style.backgroundColor = primaryColor;
    template.style.color = secondaryColor;

    secondaryBg.forEach((ele) => (ele.style.backgroundColor = secondaryColor));

    secondaryTextColors.forEach((ele) => (ele.style.color = secondaryColor));

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
    templateImageElem.src = templateImg;
    templateLogo.src = logo;
  });
};
