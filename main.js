// // Counter
// const Counter = {
//   data() {
//     return {
//       counter: 0,
//       isActive: true
//     }
//   },

//   mounted() {
//     setInterval(() => {
//       this.counter++
//     },1000);
//   }
// };

// // AttributeBinding
// const AttributeBinding = {
//   data() {
//     return {
//       message: 'You loaded this page on' + new Date().toLocaleString()
//     }
//   }
// }

// // EventHandling
// const EventHandling = {
//   data() {
//     return {
//       message: 'Hello Vue.js !!'
//     }
//   },
//   methods: {
//     reverseMessage() {
//       this.message = this.message
//         .split('') // 一文字ずつに分解
//         .reverse() // 要素の順序を反転させる
//         .join('') // 結合子なしで要素を合体させる
//     }
//   }
// }

// // TwoWayBinding
// const TwoWayBinding = {
//   data() {
//     return {
//       message: 'Hello Vue!'
//     }
//   }
// }

// // ConditionalRendering
// const ConditionalRendering = {
//   data() {
//     return {
//       seen: false
//     }
//   },
//   methods: {
//     watch() {
//       this.seen = !this.seen;
//     }
//   }
// }

// // ListRendering
// const ListRendering = {
//   data() {
//     return {
//       todos: [
//         {id: 0, text: 'Learn JavaScript'},
//         {id: 1, text: 'Learn Python'},
//         {id: 2, text: 'Learn GoLang'},
//       ]
//     }
//   }
// }

// // todoをコンポーネントに切り出す
// const app = Vue.createApp({
//   data() {
//     return { count: 4}
//   }
// });

// const vm = app.mount('#app')
// console.log(vm.count)

// // v-html
// const RenderHtmlApp = {
//   data() {
//     return {
//       rawHTML: '<span style="color: red">This should be red.</span>'
//     }
//   }
// }
// Vue.createApp(RenderHtmlApp).mount('#example');

// Vue.createApp(Counter).mount('#counter');
// Vue.createApp(AttributeBinding).mount('#bind-attribute');
// Vue.createApp(EventHandling).mount('#event-handling');
// Vue.createApp(TwoWayBinding).mount('#two-way-binding');
// Vue.createApp(ConditionalRendering).mount('#conditional-rendering');
// // Vue.createApp(ListRendering).mount('#list-rendering');
// app.mount('#todo-list-app');



const App = {
  data() {
    return {
      posts: [
        {id: 1, title: 'My Journey with Vue'},
        {id: 2, title: 'クーラー最高'},
        {id: 3, title: 'ただただ眠いのかもしれない'}
      ],
      postFontSize: 1,
      name:"",
      methods: {
        enlargeText: function(enlargeAmount) {
          this.postFontSize += enlargeAmount
          console.log('動いてます')
        }
      }
    }
  }
}

// Vueアプリケーションの作成
const app = Vue.createApp(App)

app.component('blog-post', {
  props: ['title'],
  emits: ['enlargeText'],
  template: `
    <div class="blog-post">
      <h4>{{ title }}</h4>
      <button v-on:click="enlargeText(0.1)">
        Enlarge text
      </button>
    </div>`
})

app.mount('#blog-post-demo')