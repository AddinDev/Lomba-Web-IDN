const main = function () {
    const businessListElement = document.querySelector("#gameList");
  
    businessListElement.innerHTML = "";
    games.forEach(function (business) {
      const { title, desc } = business;
      const businessElement = document.createElement("div");  
      businessElement.setAttribute("class", "grid-item hoverFocus");
      businessElement.innerHTML = `
              <p>${title}</p>`;
  
      businessListElement.appendChild(businessElement);
    });
  };
  