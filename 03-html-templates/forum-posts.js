const template = document.createElement('template');
template.innerHTML = `
    <link type="text/css" rel="stylesheet" href="forum-posts.css" />
    <div class="forum-post">
        <div class="avatar-image">
        <slot class="avatar" name="avatar-image"></slot>
        </div>
        <p><slot></slot></p>
        <span class="forum-post-user-info">posted at <slot name="post-date"></slot> by <slot name="post-user"></slot>
    </div>
`;


class ForumPostElement extends HTMLElement {
    constructor() {
        super();
        let node = template.content.cloneNode(true);
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(node);
    }
}

customElements.define("forum-post", ForumPostElement);
