
//  @ : src 디렉터리를 의미
import VuetifyComponent from '@/components/practice/VuetifyComponent'
import ModelingComponent from '@/components/practice/ModelingComponent'
import ConditionalComponent from '@/components/practice/ConditionalComponent'
import HooksComponent from '@/components/practice/HooksComponent'
import WatchUpdateComponent from '@/components/practice/WatchUpdateComponent'
import AxiosTestComponent from '@/components/practice/AxiosTestComponent'
import RouterTestComponent from '@/components/practice/RouterTestComponent'
import StoreTestComponent from '@/components/practice/StoreTestComponent.vue'
import MyTest from '@/views/MyTest.vue'

export const practiceRouter = [
    {
        path: '/practice/vuetify',
        name: 'VuetifyComponent',
        component: VuetifyComponent
    },
    {
        path: '/practice/modeling',
        name: 'ModelingComponent',
        component: ModelingComponent
    },
    {
        path: '/practice/conditional',
        name: 'ConditionalComponent',
        component: ConditionalComponent
    },
    {
        path: '/practice/hooks',
        name: 'HooksComponent',
        component: HooksComponent
    },
    {
        path: '/practice/hooks-watch-update',
        name: 'WatchUpdateComponentComponent',
        component: WatchUpdateComponent
    },
    {
        path: '/practice/axiostest',
        name: 'AxiosTestComponent',
        component: AxiosTestComponent
    },
    {
        path: '/practice/routertest',
        name: 'RouterTestComponent',
        component: RouterTestComponent
    },
    {
        path: '/practice/storetest',
        name: 'StoreTestComponent',
        component: StoreTestComponent
    },
    {
        path: '/practice/mytest',
        name: 'MyTest',
        component: MyTest
    },
]

