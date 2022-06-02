import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/MainComponent'
import CiComponent from '@/components/CiComponent'
import FaqComponent from '@/components/FaqComponent'
import GalleryComponent from '@/components/GalleryComponent'
import HistoryComponent from '@/components/HistoryComponent'
import IntroduceComponent from '@/components/IntroduceComponent'
import LocationComponent from '@/components/LocationComponent'
import NoticeComponent from '@/components/NoticeComponent'
import ProductComponent from '@/components/ProductComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-component',
      component: MainComponent
    },
    {
      path: '/ci',
      name: 'ci-component',
      component: CiComponent
    },
    {
      path: '/faq',
      name: 'faq-component',
      component: FaqComponent
    },
    {
      path: '/gallery',
      name: 'gallery-component',
      component:GalleryComponent
    },
    {
      path: '/history',
      name: 'history-component',
      component:HistoryComponent
    },
    {
      path: '/introduce',
      name: 'introduce-component',
      component:IntroduceComponent
    },
    {
      path: '/location',
      name: 'location-component',
      component:LocationComponent
    },
    {
      path: '/notice',
      name: 'notice-component',
      component:NoticeComponent
    },
    {
      path: '/product',
      name: 'product-component',
      component:ProductComponent
    }
  ]
})
