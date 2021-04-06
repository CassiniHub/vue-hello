function init() {
    
    new Vue({

        el: '#app',

        data: {

            'title': 'Hello Vue!',
            'img': 'assets/img/06_04_2021.png'
        }
    });
}


document.addEventListener("DOMContentLoaded", init);
