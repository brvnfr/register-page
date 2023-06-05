import { createApp } from 'vue';
import { createStore } from 'vuex';

const app = createApp({});

app.use(createStore());

export default app;
