<template>
      <div class="card">
        <div class="image-container">
          <img :src="product.image" alt="Картинка">
        </div>
            <h3 class="title">{{ truncateTitle(product.title, 12, 60) }}</h3>
            <div class="buy">
            <span class="price">{{ product.price }}$</span>
            <button class="add-to-cart">В корзину</button>
            </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['product'],
  methods: {
    truncateTitle(title, wordCount, charLimit) {
      const words = title.split(' ');
      const truncatedWords = words.slice(0, wordCount);
      let truncatedTitle = truncatedWords.join(' ');
      if (truncatedTitle.length > charLimit) {
        const lastSpaceIndex = truncatedTitle.lastIndexOf(' ', charLimit);
        truncatedTitle = truncatedTitle.slice(0, lastSpaceIndex);
        truncatedTitle += '...';
      }
      return truncatedTitle;
    },
  },
};
  </script>
  
  <style scoped>
.card {
  border: 1px solid #797979;
  border-radius: 8px;
  width: 220px;
  height: 420px;
  margin-top: 40px;
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;
  transition: transform 0.3s ease;
  position: relative;
}
.card:hover {
  transform: scale(1.1);
}
.card:hover .add-to-cart {
  opacity: 1;
}
.image-container {
    width: 219px;
    height: 295px;
    display: flex;
    border-bottom: 1px solid #636363;
    justify-content: center;
    align-items: center;
}
.image-container img {
  max-width: 95%;
  max-height: 95%;
}
.title {
  width: 218px;
  height: 80px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.price {
  color: #e44d26;
  font-weight: bold;
  font-size: 25px;
  margin-right: 10px;
} 
.add-to-cart {
  background-color: rgb(51, 151, 68);
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.buy {
  position: absolute;
  bottom: 10px;
  width: 100%;
}
  </style>