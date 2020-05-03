Vue.component('modal', {
    template: `
    <div class="modal-mask">
        <div class="modal-wrapper">
        <div class="modal-container">
            <h3>title</h3>
            <div>body</div>
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
            showModal: false    
        }
    },

    methods: {
        toggleModal(){
            this.showModal = !this.showModal
            console.log("dsd")
        }
    }
})