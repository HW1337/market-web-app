<template>
    <header>
    <div class="headerplus">
    <h1><a href="index.html" class="main-link">HOMESHROOMS</a></h1>
    <input v-model="searchTerm" @input="search" type="text" name="query" placeholder="Найти на Homeshrooms" class="search">
    </div>
</header>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: '',
        }
    },
    methods: {
    search() {
      this.$emit('search', this.searchTerm);
    },
  },
};
</script>

<style>
header {
background: #1ead3d;
padding: 15px;
position: fixed;
width: 100%;
z-index: 1000;
}
.headerplus {
display: flex;
align-items: center;
margin-left: 13vw;
}
.main-link {
color: #ffffff;
text-decoration: none;
}
.cart {
color: #ffffff;
}
.main-link:hover {
color: #000;
}
.search {
font-size: 20px;
width: 50vw;
line-height: 2.5;
margin-left: 5vw;
margin-right: 5vw;
}
.search::placeholder {
color: #acacac;
font-family: 'Fira Sans';
}
input {
padding-left: 20px;
border-radius: 15px;
border-width: 0px;
}
</style>