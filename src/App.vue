<template>
        <header>
        <div class="headerplus">
        <h1><a href="index.html" class="main-link">HOMESHROOMS</a></h1>
        <form action="/search" method="get">
            <input type="text" name="query" placeholder="Найти на Homeshrooms" class="search">
        </form>
        <h3 class="cart">Корзина: </h3>
        </div>
    </header>
    <ProductList />
</template>

<script>
import ProductList from './components/ProductList.vue';

export default {
  components: {
    ProductList,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans&family=Poppins:wght@400;600;700&display=swap');
* {
    font-family: 'Fira Sans';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
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