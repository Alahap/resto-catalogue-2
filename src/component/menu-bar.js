class MenuBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class=menu_bar>
                <div class="header_menu">
                    <button id="menu">☰</button>
                </div>
                <div class="header_logo">
                    <a href="#/home">GORESTO</a>
                </div>
                <nav id="drawer" class="header_navigation">
                    <ul>
                        <li><a class="nav-link" href="#/home">Home</a></li>
                        <li><a class="nav-link" href="#/list">List</a></li>
                        <li><a class="nav-link" href="#/favorite">Favorite</a></li>
                    </ul>
                </nav>
            </div>
        `;
    }
}

customElements.define('menu-bar', MenuBar);