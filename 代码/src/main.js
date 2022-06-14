// import './cover'; //静态依赖，表示该模块需要合并到主打包结果中
import { getMovies } from "./api/movie";
import './global.less'
import ('./movie'); //动态依赖，表示该模块可以动态加载，最终的结果会导致该模块形成的独立的包



getMovies(1 , 10).then((resp) => {
    console.log(resp);
});
