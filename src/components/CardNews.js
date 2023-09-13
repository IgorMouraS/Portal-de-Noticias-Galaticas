class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("link-image");
        newsImage.alt = "Foto da notícia";

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        cardRight.appendChild(newsImage);

        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `

            .card {
                width: 100%;
                background-color: #ffffff;
                box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.3),
                    1px 1px 4px 2px rgba(224, 224, 224, 0.5) inset;
                -webkit-box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.3),
                    1px 1px 4px 2px rgba(224, 224, 224, 0.5) inset;
                -moz-box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.3),
                    1px 1px 4px 2px rgba(224, 224, 224, 0.5) inset;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            
            .card_left {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: .825rem;
                width: 60%;
            }
            
            .card_left>span {
                font-weight: 400;
            }
            
            .card_left>a {
                margin-top: 1rem;
                font-size: 1.625rem;
                text-decoration: none;
                color: black;
                font-weight: bold;
            }
            
            .card_left>p {
                color: gray;
            }
            
            .card_right>img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        `;

        return style;
    }
}

customElements.define("card-news", CardNews);