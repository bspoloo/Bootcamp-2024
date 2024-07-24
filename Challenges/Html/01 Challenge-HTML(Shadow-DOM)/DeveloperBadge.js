class DeveloperBadge extends HTMLElement {
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        const style = `
            .badge {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 200px;
                border: 2px solid #000;
                border-radius: 10px;
                overflow: hidden;
                font-family: Arial, sans-serif;
            }
            .header {
                background-color: #000;
                color: #fff;
                font-size: 1.5em;
                padding: 10px;
                width: 100%;
                text-align: center;
            }
            .header span {
                color: red;
            }
            .image-container {
                width: 100%;
                padding: 10px;
                display: flex;
                justify-content: center;
            }
            .image-container img {
                border-radius: 50%;
                width: 80px;
                height: 80px;
            }
            .name {
                font-size: 1.2em;
                margin: 10px 0;
            }
            .title {
                background-color: red;
                color: white;
                width: 100%;
                text-align: center;
                padding: 10px 0;
                font-size: 1em;
            }
        `;
        let job = this.getAttribute('job') || 'JalaSoft';
        let image = this.getAttribute('image') || 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3a801ff6-ff38-44b3-9b4c-6d65d4c778de/dg5iz7b-12ea0285-f977-478b-8503-3d20714ebaf0.jpg/v1/fill/w_1280,h_1920,q_75,strp/anime_girl_with_cat_ears_by_instaai_dg5iz7b-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMCIsInBhdGgiOiJcL2ZcLzNhODAxZmY2LWZmMzgtNDRiMy05YjRjLTZkNjVkNGM3NzhkZVwvZGc1aXo3Yi0xMmVhMDI4NS1mOTc3LTQ3OGItODUwMy0zZDIwNzE0ZWJhZjAuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.OrItwuoiATPT1Gs2Z5fFScwAM2Wh4zyKTiusv17PVHc';
        let name = this.getAttribute('name') || 'Animetx';
        let tittle = this.getAttribute('tittle') || 'Developer';
        shadow.innerHTML = `
            <div class="badge">
                <div class="header">${job}</div>
                <div class="image-container">
                    <img src="${image}" alt="Developer Image">
                </div>
                <div class="name">${name}</div>
                <div class="title">${tittle}</div>
            </div>
            <style>${style}</style>
        `;
    }
}

customElements.define('developer-badge', DeveloperBadge);