
//  중괄호 {}
//  1. import 하는 요소가 여러 개 있을 때
//  2. 파일 내부에 export default가 없을 때
import { createRouter, createWebHistory} from "vue-router"
import { practiceRouter } from "./practiceRouter";
import { memberRouter } from "./memberRouter";
import { productRouter } from "./productRouter";
import { orderRouter } from "./orderRouter";

const routes = [
    //  routes에 배열이 있다고 가정하면, spread 문볍(...) 을 사용하여 routes와 practiceRouter를 합쳐준다.
    ...practiceRouter,
    ...memberRouter,
    ...productRouter,
    ...orderRouter
]

const router = createRouter({
    //  vue router는 내부적으로 두가지 방식의 히스토리 관리를 제공
    //  1. createWebHistory : /home (대부분 이거 사용)
    //  2. WebHistory : #/home
    history: createWebHistory(),
    routes
});

export default router;