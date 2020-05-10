
if (document) {
    attachClickEvents();
    // comment the next line out if you are not using org-mode.js 
    window.addEventListener('hashchange', attachClickEvents);
}

function attachClickEvents() {
    const images = document.querySelectorAll('img');
    images.forEach(image => {
        image.style.cursor = 'zoom-in';
        image.addEventListener('click', function(e) {
            const modal = new Modal(e.target.cloneNode());
            modal.create();
            modal.show();
        });
    });

}

function Modal(image) {
    this.image = image;
    this.wrapper = null;
}
Modal.prototype.create = function() {
    this.wrapper = document.createElement('div');
    this.wrapper.style.height = '100%';
    this.wrapper.style.width = "100%";
    this.wrapper.style.height = "100%";
    this.wrapper.style.position = "fixed";
    this.wrapper.style.top = 0;
    this.wrapper.style.bottom = 0;
    this.wrapper.style.display = "flex";
    this.wrapper.style.background = "#808080a3";
    this.wrapper.style.justifyContent = "center";
    this.wrapper.style.alignItems = "center";

    this.image.style.cursor = 'zoom-out';

    this.wrapper.addEventListener('click', this.remove);
    this.wrapper.appendChild(this.image);
};

Modal.prototype.show = function() {
    document.body.appendChild(this.wrapper);
};

Modal.prototype.remove = function() {
    document.body.removeChild(this);
};



