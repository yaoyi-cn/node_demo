import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
   initialState: {
     products: [
       { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
     ],
     users: [
       { name: '杭雯', age: 24, sex: '女',id:1 },
       { name: '姚毅', age: 24, sex: '男',id:2 },
       { name: '吴仕传', age: 27, sex: '男', id: 3},
       { name: '邢鹏飞', age: 25, sex: '男', id: 4},
       { name: '陈伟', age: 31, sex: '男', id: 5}
     ],
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
// 
app.model(require('./models/products'));
app.model(require('./models/users'));


// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
