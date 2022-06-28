import {createRouter, createWebHistory} from 'vue-router'
import PageHome from "@/views/pages/PageHome";
import PageTarget from "@/views/pages/PageTarget";
import PageEducationProgram from "@/views/pages/PageEducationProgram";
import PageCalc from "@/views/pages/PageCalc";
import PagePaidEducation from '@/views/pages/PagePaidEducation'
import PageGrants from "@/views/pages/PageGrants";
import PageInternational from "@/views/pages/PageInternational";
import PageSeats from "@/views/pages/PageSeats";
import PageReceptionDocuments from "@/views/pages/PageReceptionDocuments";
import NotFound from "@/views/NotFound";
import PageScale from "@/views/pages/PageScale"
import PageRegDocuments from "@/views/pages/PageRegDocuments"
import PageEducationProgramSPOZI from "@/views/pages/EducationProgram/SPO/PageEducationProgramSPOZI"
import PageEducationProgramSPOPD from "@/views/pages/EducationProgram/SPO/PageEducationProgramSPOPD"
import PageEducationProgramSPOIS from "@/views/pages/EducationProgram/SPO/PageEducationProgramSPOIS";
import PageEducationProgramSPOE from "@/views/pages/EducationProgram/SPO/PageEducationProgramSPOE";
import PageEducationProgramSPOF from "@/views/pages/EducationProgram/SPO/PageEducationProgramSPOF";
import PageEducationProgramBachelorPed from "@/views/pages/EducationProgram/Bachelor/PageEducationProgramBachelorPed";
import PageEducationProgramBachelorPI from "@/views/pages/EducationProgram/Bachelor/PageEducationProgramBachelorPI";
import PageEducationProgramBachelorYris from "@/views/pages/EducationProgram/Bachelor/PageEducationProgramBachelorYris";
import PageEducationProgramBachelorReklama
    from "@/views/pages/EducationProgram/Bachelor/PageEducationProgramBachelorReklama";
import PageEducationProgramBachelorEconomika
    from "@/views/pages/EducationProgram/Bachelor/PageEducationProgramBachelorEconomika";
import PageEducationProgramBachelorPsich
    from "@/views/pages/EducationProgram/Bachelor/PageEducationProgramBachelorPsich";
import PageEducationProgramBachelorGMU from "@/views/pages/EducationProgram/Bachelor/PageEducationProgramBachelorGMU";
import PageTest from "@/views/pages/PageTest";
import PageQuestions from "@/views/pages/PageQuestions";
import PagePrikaz from "@/views/pages/PagePrikaz";
import PageBackQuestion from "@/views/pages/PageBackQuestion";

const routes = [
    {
        path: '/',
        component: PageHome
    },
    {
        path: '/target',
        component: PageTarget
    },
    {
        path: '/educationprogram',
        component: PageEducationProgram
    },
    {
        path: '/educationprogram/spo/zi',
        component: PageEducationProgramSPOZI
    },
    {
        path: '/educationprogram/spo/pd',
        component: PageEducationProgramSPOPD
    },
    {
        path: '/educationprogram/spo/is',
        component: PageEducationProgramSPOIS
    },
    {
        path: '/educationprogram/spo/e',
        component: PageEducationProgramSPOE
    },
    {
        path: '/educationprogram/spo/f',
        component: PageEducationProgramSPOF
    },
    {
        path: '/educationprogram/bachelor/ped',
        component: PageEducationProgramBachelorPed
    },
    {
        path: '/educationprogram/bachelor/pi',
        component: PageEducationProgramBachelorPI
    },
    {
        path: '/educationprogram/bachelor/yris',
        component: PageEducationProgramBachelorYris
    },
    {
        path: '/educationprogram/bachelor/reklama',
        component: PageEducationProgramBachelorReklama
    },
    {
        path: '/educationprogram/bachelor/econom',
        component: PageEducationProgramBachelorEconomika
    },
    {
        path: '/educationprogram/bachelor/psich',
        component: PageEducationProgramBachelorPsich
    },
    {
        path: '/educationprogram/bachelor/gmu',
        component: PageEducationProgramBachelorGMU
    },
    {
        path: '/questions',
        component: PageQuestions
    },
    {
        path: '/calc',
        component: PageCalc
    },
    {
        path: '/test',
        component: PageTest
    },
    {
        path: '/paidedu',
        component: PagePaidEducation
    },
    {
        path: '/backquestion',
        component: PageBackQuestion
    },
    {
        path: '/grants',
        component: PageGrants
    },
    {
      path: '/prikaz',
      component: PagePrikaz
    },    {
        path: '/inter',
        component: PageInternational
    },
    {
        path: '/seats',
        component: PageSeats
    },
    {
        path: '/receptiondocuments',
        component: PageReceptionDocuments
    },
    {
      path: '/calc',
      component: PageCalc
    },
    {
        path: '/points',
        component: PageScale
    },
    {
      path: '/regdocuments',
      component: PageRegDocuments
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    },

]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory('/'),
    routes, // short for `routes: routes`
})

export default router
