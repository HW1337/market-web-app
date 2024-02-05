<template>
    <header>
    <div class="headerplus">
    <div><a href="index.html" class="main-link">HOMESHROOMS</a></div>
    <div class="input-container">
    <input v-model="searchTerm" @input="searchMethod" type="text" name="query" placeholder="Найти на Homeshrooms" class="search">
    <button class="cart">🛒</button>
    </div>
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
    searchMethod() {
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
justify-content: center;
}
.main-link {
color: #ffffff;
text-decoration: none;
font-size: 32px;
font-weight: bold;
}
.input-container {
  position: relative;
  display: flex;
  align-items: center;
}
.cart {
  cursor: pointer;
  font-size: 32px;
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  margin-right: 5px;
  margin-bottom: 5px;
}
.cart:hover {
  transform: scale(1.2);
}
.cart:active {
  animation: shake 0.1s ease;
}
.main-link:hover {
color: #000;
}
.search {
font-size: 20px;
width: 50vw;
line-height: 2.5;
margin-left: 5vw;
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