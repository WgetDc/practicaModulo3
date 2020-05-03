Vue.component('modal', {
    props: ['title'],
    template: `
    <div class="modal-mask">
        <div class="modal-wrapper">
        <div class="modal-container">
            <h3>{{title}}</h3>
            <div>
                <slot name="body"></slot>
            </div>
            <footer>
            <button v-on:click="cerrarModal">Cerrar</button>
            </footer>
        </div>
        </div>
    </div>
    `
    ,
    methods: {
        cerrarModal(){
            this.$emit('cerrar-modal')
        }
    }
}
)

new Vue({
    el: '#app',

    data(){
        return{
            showModal: false,
            title: 'Este es el titulo del modal' 
        }
    },

    methods: {
        toggleModal(){
            this.showModal = !this.showModal
            console.log("dsd")
        }
    }
})