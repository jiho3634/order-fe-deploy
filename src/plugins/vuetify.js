import 'vuetify/styles'
import {createVuetify} from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {mdi} from 'vuetify/iconsets/mdi'

export default createVuetify({
    // UI 컴포넌트
    components, 

    //  HTML 요소에 행동 부여
    directives,
    icons: {
        defaultSet: 'mdi',
        sets: {
            mdi,
        }
    }
})