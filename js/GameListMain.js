const main = function () {
    const gameListElement = document.querySelector("#gameList");

    gameListElement.innerHTML = "";
    games.forEach(function (game) {
        const {
            title,
            desc
        } = game;
        const gameElement = document.createElement("div");
        gameElement.setAttribute("class", "grid-item hoverFocus");
        gameElement.innerHTML = `
              <p>${title}</p>
              <p>${desc}</p>
              `;

        gameListElement.appendChild(gameElement);
    });
};