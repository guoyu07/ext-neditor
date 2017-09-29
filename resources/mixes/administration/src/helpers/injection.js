import NEditor from '../components/NEditor.vue';

export default {
    install(instance) {
        instance.vue.component('n-editor', NEditor);
    },
};