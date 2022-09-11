<template>
    <button @click="back">Back</button>
    <div class="layout">
        <aside>
            <div v-for="chat in chats" :key="chat.id">
                <router-link :to="`/chats/${chat.id}`">{{ chat.name }}</router-link>
            </div>
        </aside>
        <article>
            <router-view/>
        </article>
    </div>
</template>

<script>
export default {
    data() {
        return {
            chats: [
                { id: 1, name: 'Jahiker' },
                { id: 2, name: 'Mafer' },
                { id: 3, name: 'Pili' },
                { id: 4, name: 'Kela' },
                { id: 5, name: 'Montserrat' },
                { id: 6, name: 'Nelson' }
            ]
        }
    },
    // watch: {
    //     '$route.params': (val) => {
    //         console.log('Update params', val)
    //     }
    // },
    created() {
        this.$watch(// Agregando un watcher de forma manual para poder acceder al objeto this de vue
            () => this.$route.params,
            (val) => {
                console.log('Update params', val)
            },
            {
                inmediate: true
            }
        )
    },
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
.layout {
    display: grid;
    grid-template-columns: 100px 1fr;
    gap: 15px;
}
.layout aside {
    background-color: #c9c9c9;
}
</style>