import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { CadastroProjetoComponent } from './cadastro-projeto/cadastro-projeto.component';
import { ListaProjetoComponent } from './lista-projeto/lista-projeto.component';
import { EditarProjetoComponent } from './editar-projeto/editar-projeto.component';
import { MembroProjetoComponent } from './membro-projeto/membro-projeto.component';


const ROUTES: Routes = [
    {path: '', component: ListaProjetoComponent },
    {path: 'listar-projetos', component: ListaProjetoComponent },
    {      
        path: ':id', component: CadastroProjetoComponent, children: [
            { path: '', redirectTo:'editar', component: EditarProjetoComponent },
            { path: 'editar', component: EditarProjetoComponent },
            { path: 'membros', component: MembroProjetoComponent },
        ]
    }
]


@NgModule({
    declarations: [
        CadastroProjetoComponent,
        ListaProjetoComponent,
        EditarProjetoComponent,
        MembroProjetoComponent 
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]

})
export class ProjetoModule { }