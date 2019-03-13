import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { NewscontentComponent } from './newscontent/newscontent.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'newscontent/:id',component:NewscontentComponent},
  //刚进来路由为空跳转的路由
  {path:'', redirectTo:'home', pathMatch:'full'},
  //匹配不到路由的时候加载的组件 或者跳转的路由 
  { path: '**', /*任意的路由*/ // component:HomeComponent 
    redirectTo:'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
