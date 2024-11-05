<template>
    <div class="sidebar">
        <div class="icons-block">
            <div
                :class="{'not-allowed': !icon.allowed}"
                class="icon"
                v-for="icon in icons.slice(0, 3)"
                :key="icon.name"
                @click="icon.allowed && handleSelectFolder(icon)">
                <div
                    class="icon-image"
                    :class="{active: icon.selected}"
                    v-html="icon.svg"></div>
                <span class="icon-name">{{ icon.description }}</span>
            </div>
        </div>

        <div class="icons-block">
            <template v-for="(icon, index) in icons.slice(3)" :key="icon.name">
                <div
                    :class="{'not-allowed': !icon.allowed}"
                    class="icon"
                    @click="icon.allowed && handleSelectFolder(icon)">
                    <div class="icon-image" v-html="icon.svg"></div>

                    <span class="icon-name" style="white-space: nowrap">{{
                        icon.description
                    }}</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const emit = defineEmits(['selectedFolder'])
const props = defineProps({
    defaultFolder: {
        type: String,
        default: null,
    },
})

console.log(props.defaultFolder)
const folderSvg = `<svg width="24" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.81 4.805.75 3.5a3 3 0 0 1 3-3h5.508a3 3 0 0 1 2.12.879l1.243 1.242a3 3 0 0 0 2.12.879h5.974a3 3 0 0 1 2.988 3.271l-.956 10.5A3 3 0 0 1 19.761 20H4.239a3 3 0 0 1-2.987-2.729l-.955-10.5A2.985 2.985 0 0 1 .81 4.806v-.001ZM3.285 5A1.5 1.5 0 0 0 1.79 6.635l.955 10.5A1.5 1.5 0 0 0 4.24 18.5H19.76a1.5 1.5 0 0 0 1.492-1.365l.956-10.5A1.499 1.499 0 0 0 20.715 5H3.285Zm7.035-2.56A1.5 1.5 0 0 0 9.258 2H3.75a1.5 1.5 0 0 0-1.5 1.471l.009.209c.32-.117.666-.18 1.026-.18h8.094l-1.06-1.06Z" fill="#5F5F5F"/></svg>
  
  `

const icons = ref([
    {
        name: 'my-templates',

        allowed: false,

        description: 'Мои шаблоны',

        selected: false,

        svg: folderSvg,
    },

    {
        name: 'shared',

        allowed: true,

        description: 'Шаблоны компании',

        selected: false,

        svg: folderSvg,
    },

    {
        name: 'favorites',

        allowed: true,

        description: 'Избранные',

        selected: false,

        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="26" height="22" viewBox="0 0 24 24">
  
      <path fill="currentColor" d="M21.919 10.127a1 1 0 0 0-.845-1.136l-5.651-.826l-2.526-5.147a1.037 1.037 0 0 0-1.795.001L8.577 8.165l-5.651.826a1 1 0 0 0-.556 1.704l4.093 4.013l-.966 5.664a1.002 1.002 0 0 0 1.453 1.052l5.05-2.67l5.049 2.669a1 1 0 0 0 1.454-1.05l-.966-5.665l4.094-4.014a1 1 0 0 0 .288-.567m-5.269 4.05a.5.5 0 0 0-.143.441l1.01 5.921l-5.284-2.793a.5.5 0 0 0-.466 0L6.483 20.54l1.01-5.922a.5.5 0 0 0-.143-.441L3.07 9.98l5.912-.864a.5.5 0 0 0 .377-.275L12 3.46l2.64 5.382a.5.5 0 0 0 .378.275l5.913.863z" />
  
  </svg>`,
    },

    {
        name: 'checking',

        allowed: false,

        description: 'На проверке',

        selected: false,

        svg: folderSvg,
    },

    {
        name: 'edit',

        allowed: false,

        description: 'Настроить',

        selected: false,

        svg: `<svg width="24" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.313 14.625a5.688 5.688 0 1 0 0 11.375h11.375a5.688 5.688 0 1 0 0-11.375H6.313Zm11.375 9.75a4.062 4.062 0 1 1 0-8.125 4.062 4.062 0 0 1 0 8.125ZM6.313 1.625a4.062 4.062 0 1 0 0 8.125 4.062 4.062 0 0 0 0-8.125Zm3.98 0a5.687 5.687 0 0 1 0 8.125h7.395a4.062 4.062 0 1 0 0-8.125h-7.394ZM6.314 0h11.375a5.688 5.688 0 0 1 0 11.375H6.313A5.687 5.687 0 1 1 6.313 0Z" fill="#5F5F5F"/></svg>`,
    },
])

const handleSelectFolder = (folder) => {
    console.log(folder)
    emit('selectedFolder', folder.name)
}
</script>

<style scoped>
.sidebar {
    width: 150px;

    background-color: var(--secondary-color);

    max-height: 627px;

    padding: 11px 5px 10px 10px;

    display: flex;

    flex-direction: column;

    justify-content: space-between;

    align-items: center;
}

.icons-block {
    display: flex;

    flex-direction: column;

    gap: 16px;

    margin-top: 10px;
}

.icon {
    cursor: pointer;

    display: flex;

    flex-direction: column;

    align-items: center;

    width: 60px;

    height: 50px;
}

.active {
    background-color: var(--accent-color);

    border-radius: 100%;
}

.active::before {
    content: '';

    position: absolute;

    top: -4px;

    left: -4px;

    right: -4px;

    bottom: -4px;

    background-color: var(--accent-color);

    border-radius: 100%;

    z-index: -1;
}

.icon-name {
    font-size: 10px;

    text-align: center;

    position: relative;

    z-index: 1;
}

.not-allowed {
    cursor: not-allowed;
}

.icon-image {
    position: relative;

    z-index: 1;

    padding: 4px;
}

.icon-image:hover {
    transition: all 0.3s ease;

    background-color: var(--accent-color);

    border-radius: 100%;

    outline: 4px solid var(--accent-color);
}

.separator {
    width: 66%;

    margin: 0 auto;

    height: 1px;

    background-color: var(--tertiary-color);
}
</style>
