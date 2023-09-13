// content-box.js

(function() {
    const insertContentBoxes = () => {
        const postElements = document.querySelectorAll('.topic-post.clearfix.topic-owner.current-user-post.regular');

        for (let i = 0; i < postElements.length; i += 2) {
            const contentBoxHtml = `
                <div class="content-box">
                    <h2>Additional Content</h2>
                    <p>This is the content box between articles.</p>
                </div>
            `;
            const contentBoxElement = document.createElement('div');
            contentBoxElement.innerHTML = contentBoxHtml;

            if (i < postElements.length) {
                postElements[i].insertAdjacentElement('afterend', contentBoxElement);
            }
        }
    };

    document.addEventListener('DOMContentLoaded', insertContentBoxes);
})();
