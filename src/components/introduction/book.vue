<template>
  <div class="container">
    <div class="book">
      <img class="book-img" src="@/assets/introduction/book.jpg" alt width="160" height="210" />
      <p class="book-info">
        Java. Head First Java combines puzzles, strong visuals, mysteries, and soul-searching interviews with famous Java 
        objects to engage you in many different ways. It's fast, it's fun, and it's effective. And, despite its playful 
        appearance, Head First Java is serious stuff: a complete introduction to object-oriented programming and Java. You'll 
        learn everything from the fundamentals to advanced topics, including threads, network sockets, and distributed programming 
        with RMI. And the new. second edition focuses on Java 5.0, the latest version of the Java language and development platform.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 40px 0;
  background-color: #231f20;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
.book {
  width: 1200px;
  margin: auto;
}
.book-img {
  float: left;
}
.book-info {
  float: left;
  width: 800px;
  margin-left: 100px;
  font-size: 20px;
  font-weight: 300;
  color: #ddd;
  line-height: 30px;
  padding: 55px 0;
}
</style>
