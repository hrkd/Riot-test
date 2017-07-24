<sample>
  <h3>{ message }</h3>
  <button onclick="{ show_count }">click</button>
  <ul>
    <li each={ techs }>{ name }</li>
  </ul>



  import App from '../app';

  this.message = 'Hello, Riot!';
  this.techs = [
    {"name": "HTML"},
    {"name": "JavaScript"},
    {"name": "CSS"}
  ];

  this.show_count = ()=>{
    console.log('aaa');
    this.techs.push({"name": "CSS"});
  };

  this.mixin(App);

  <style>
    :scope {
      font-size: 2rem
    }
    h3 {
      color: #f00;
    }
    ul {
      color: #999;
    }
  </style>
</sample>
