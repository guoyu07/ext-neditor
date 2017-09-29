import NEditor from '../components/NEditor.vue';

export default {
    install(instance) {
        instance.Vue.component('n-editor', NEditor);
    },
    type: 'addon',
};