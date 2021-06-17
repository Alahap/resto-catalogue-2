class FooterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="footer">
            <p>All data obtained from <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">Dicoding's Restaurant-api</a></p>
        </div>
        `;
    }
}

customElements.define('footer-bar', FooterBar);