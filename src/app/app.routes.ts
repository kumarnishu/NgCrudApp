import { Routes } from '@angular/router';
import { IndexComponent } from './post/index/index.component';
import { CreateComponent } from './post/create/create.component';
import { EditComponent } from './post/edit/edit.component';
import { ViewComponent } from './post/view/view.component';

export const routes: Routes = [
    {path:"posts",redirectTo:"posts/index",pathMatch:'full'},
    { path: "posts/index", component: IndexComponent },
    {path:"posts/create",component:CreateComponent},
    { path: "posts//:postId/edit", component: EditComponent },
    { path: "posts//:postId/view", component: ViewComponent },
];
