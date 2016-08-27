import {Component, ViewChild} from '@angular/core';
import {NavController, Alert, Content, Page} from 'ionic-angular';
import {ProfessionalModel} from '../professional/professional-model';
import {ClientModel} from '../client/client-model';
import {ScheduleModel} from '../schedule/schedule-model';
import {TypeWorkModel} from '../type-work/type-work-model';
import {WorkModel} from '../work/work-model';
import {RatingModel} from '../rating/rating-model';
import {ImageModel} from '../image/image-model';

@Page({
    templateUrl: 'build/pages/schedule/schedule-view.html'
})

export class ScheduleController {
    private schedule: ScheduleModel;
    private typeSchedule: string;

    constructor (private navCtrl: NavController) {
        this.navCtrl = navCtrl;
        this.schedule = this.mock();
        this.typeSchedule = 'offeredJobs';
    }

    private itemTapped(event, item): void {
        /*
        this.nav.push(ItemDetailsPage, {
            item: item
        });
        */
    }

    private mock(): ScheduleModel {
        let typeWork1: TypeWorkModel = new TypeWorkModel(1, 'Jardineiro');
        let typeWork2: TypeWorkModel = new TypeWorkModel(2, 'Pedreiro');
        let typeWork3: TypeWorkModel = new TypeWorkModel(3, 'Borracheiro');

        let rating1: RatingModel = new RatingModel(3, 2, 4,
            `
            Ultrices nulla lorem risus, feugiat condimentum augue nam senectus. Tincidunt felis libero ac mauris,
            egestas nullam vestibulum rutrum id nulla, duis pede eleifend ac quam. Suspendisse volutpat nibh diam,
            mauris lorem
            `
        );

        let rating2: RatingModel = new RatingModel(4, 4, 3,
            `
            Ultrices nulla lorem risus, feugiat condimentum augue nam senectus. Tincidunt felis libero ac mauris,
            egestas nullam vestibulum rutrum id nulla, duis pede eleifend ac quam. Suspendisse volutpat nibh diam,
            mauris lorem
            `
        );

        let rating3: RatingModel = new RatingModel(5, 5, 4,
            `
            Ultrices nulla lorem risus, feugiat condimentum augue nam senectus. Tincidunt felis libero ac mauris,
            egestas nullam vestibulum rutrum id nulla, duis pede eleifend ac quam. Suspendisse volutpat nibh diam,
            mauris lorem
            `
        );

        let rating4: RatingModel = new RatingModel(5, 5, 4,
            `
            Ultrices nulla lorem risus, feugiat condimentum augue nam senectus. Tincidunt felis libero ac mauris,
            egestas nullam vestibulum rutrum id nulla, duis pede eleifend ac quam. Suspendisse volutpat nibh diam,
            mauris lorem
            `
        );

        let rating5: RatingModel = new RatingModel(3, 3, 4,
            `
            Ultrices nulla lorem risus, feugiat condimentum augue nam senectus. Tincidunt felis libero ac mauris,
            egestas nullam vestibulum rutrum id nulla, duis pede eleifend ac quam. Suspendisse volutpat nibh diam,
            mauris lorem
            `
        );

        let image1: ImageModel = new ImageModel(
            'https://mamempreendimentos.files.wordpress.com/2015/09/casa.jpg',
            `
            Aqui é Body Builder Ipsum PORRA! Eita porra!, tá saindo da jaula o monstro!
            Eu quero esse 13 daqui a pouquinho aí. Vamo monstro! Vo derrubar tudo essas árvore do parque ibirapuera.
            Sai filho da puta! Negativa Bambam negativa.
            `
        );

        let image2: ImageModel = new ImageModel(
            'http://kingofwallpapers.com/casa/casa-001.jpg',
            `
            Ele tá olhando pra gente. AHHHHHHHHHHHHHHHHHHHHHH..., porra!
            Ó o homem ali porra!, é 13 porra! Boraaa, Hora do Show Porra. É 13 porra!
            Eu quero esse 13 daqui a pouquinho aí.
            `
        );

        let image3: ImageModel = new ImageModel(
            'http://www.donagiraffa.com/wp-content/uploads/2012/12/Fachada-de-casa-06.jpg',
            `
            Sabe o que é isso daí? Trapézio descendente é o nome disso aí.
            Não vai dá não. É 13 porra! Vo derrubar tudo essas árvore do parque ibirapuera.
            Ele tá olhando pra gente. Aqui é bodybuilder porra!
            `
        );

        let image4: ImageModel = new ImageModel(
            'http://luizcesarimoveis.com.br/wp-content/uploads/2016/04/Casa61m2.jpg',
            `
            Vamo monstro! É esse que a gente quer, é ele que nóis vamo buscar. Ele tá olhando pra gente.
            É 37 anos caralho! Aqui nóis constrói fibra, não é água com músculo. É verão o ano todo vem cumpadi.
            `
        );

        let image5: ImageModel = new ImageModel(
            'http://cdn1.valuegaia.com.br/watermark/agencies_networks/3589_67/properties/522721865_3589FC2EEB40616FADDD55BF047CC68773888A7410C396063.jpg',
            `
            Vamo monstro! Eu quero esse 13 daqui a pouquinho aí. Ele tá olhando pra gente.
            É verão o ano todo vem cumpadi. Birl! Ajuda o maluco que tá doente.
            `
        );

        let image6: ImageModel = new ImageModel(
            'https://pixabay.com/static/uploads/photo/2012/03/01/16/06/bungalow-20544_960_720.jpg',
            `
            Birl! Sabe o que é isso daí? Trapézio descendente é o nome disso aí.
            Ó o homem ali porra!, é 13 porra! Vai subir árvore é o caralho porra!
            Aqui nóis constrói fibra, não é água com músculo.
            Eu quero esse 13 daqui a pouquinho aí.
            `
        );

        let image7: ImageModel = new ImageModel(
            'http://www.grzebiela.de/Images/Bungalows/Typ%20Techentin/Techentin02.jpg',
            `
            Que não vai dá rapaiz, não vai dá essa porra. Boraaa, Hora do Show Porra.
            Eu quero esse 13 daqui a pouquinho aí. Eita porra!, tá saindo da jaula o monstro!
            Ele tá olhando pra gente. Vai subir árvore é o caralho porra!
            `
        );

        let image8: ImageModel = new ImageModel(
            'https://casaacasa.files.wordpress.com/2011/03/casa-de-madeira-3.jpg',
            `
            Não vai dá não. Bora caralho, você quer ver essa porra velho. AHHHHHHHHHHHHHHHHHHHHHH..., porra!
            Aqui nóis constrói fibra, não é água com músculo.
            Negativa Bambam negativa. Ó o homem ali porra!, é 13 porra!
            `
        );


        let professional1: ProfessionalModel = new ProfessionalModel(
            'Pedro Carlos',
            'XXX',
            'profile-image-1.jpg',
            'This is item # 1',
            [typeWork1, typeWork3],
            [],
            4,
            3,
            5,
            456,
            `
            Tincidunt fermentum, sit dolor.
            Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
            Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
            at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `
        );

        let professional2: ProfessionalModel = new ProfessionalModel(
            'Carlos Almeida',
            'XXX',
            'profile-image-2.jpg',
            'This is item # 2',
            [typeWork2, typeWork3],
            [],
            6,
            7,
            5,
            876,
            `
            Tincidunt fermentum, sit dolor.
            Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
            Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
            at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `
        );

        let professional3: ProfessionalModel = new ProfessionalModel(
            'Jael Cruel',
            'XXX',
            'profile-image-3.jpg',
            'This is item # 3',
            [typeWork1, typeWork2],
            [],
            3,
            3,
            5,
            123,
            `
            Tincidunt fermentum, sit dolor.
            Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
            Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
            at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `
        );

        let professional4: ProfessionalModel = new ProfessionalModel(
            'Ivo Almeida',
            'XXX',
            'profile-image-4.jpg',
            'This is item # 4',
            [typeWork3],
            [],
            3,
            3,
            9,
            899,
            `
            Tincidunt fermentum, sit dolor.
            Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
            Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
            at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `
        );

        let professional5: ProfessionalModel = new ProfessionalModel(
            'José Nascimento',
            'XXX',
            'profile-image-5.jpg',
            'This is item # 5',
            [typeWork1],
            [],
            4,
            3,
            5,
            456,
            `
            Tincidunt fermentum, sit dolor.
            Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
            Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
            at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `
        );

        let work1:WorkModel = new WorkModel(
            new Date(2016, 5, 30, 15, 30, 0, 0),
            rating5,
            typeWork1,
            `
            Tincidunt fermentum, sit dolor.
            Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
            Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
            at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `,
            [image1 , image2, image3, image4, image5, image6, image7, image8],
            null,
            professional1
        );

        let work2:WorkModel = new WorkModel(
            new Date(2016, 6, 25, 9, 55, 0, 0),
            rating3,
            typeWork2,
            `
            Tincidunt fermentum, sit dolor.
            Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
            Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
            at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `,
            [image1 , image2, image3, image4, image5, image6, image7, image8],
            null,
            professional2
        );

        let work3:WorkModel = new WorkModel(
            new Date(2016, 4, 28, 10, 30, 0, 0),
            rating1,
            typeWork1,
            `
            Tincidunt fermentum, sit dolor.
            Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
            Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
            at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `,
            [image1 , image2, image3, image4, image5, image6, image7, image8],
            null,
            professional3
        );

        let work4:WorkModel = new WorkModel(
            new Date(2016, 5, 26, 14, 45, 0, 0),
            rating2,
            typeWork1,
            `
            Tincidunt fermentum, sit dolor.
            Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
            Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
            at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `,
            [image1 , image2, image3, image4, image5, image6, image7, image8],
            null,
            professional4
        );

        let work5:WorkModel = new WorkModel(
            new Date(2016, 7, 20, 11, 35, 0, 0),
            rating4,
            typeWork3,
            `
            Tincidunt fermentum, sit dolor.
            Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
            Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
            at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `,
            [image1 , image2, image3, image4, image5, image6, image7, image8],
            null,
            professional5
        );

        let client1: ClientModel = new ClientModel(
            'Carlos Fonseca',
            'Rua da Solidariedade, Itinga, Joinville/SC',
            'profile-image-1.jpg'
        );

        let client2: ClientModel = new ClientModel(
            'Kevin Almeida',
            'Rua Pedro Ivo, Itinga, Joinville/SC',
            'profile-image-2.jpg'
        );

        let client3: ClientModel = new ClientModel(
            'Ivan Soares',
            'Rua Cascável, Itinga, Joinville/SC',
            'profile-image-3.jpg'
        );

        let client4: ClientModel = new ClientModel(
            'Igor Maia',
            'Rua dos Desportistas, Itinga, Joinville/SC',
            'profile-image-4.jpg'
        );

        let client5: ClientModel = new ClientModel(
            'Arthur Rodrigues',
            'Rua da Amizade, Itinga, Joinville/SC',
            'profile-image-5.jpg'
        );

        let work6:WorkModel = new WorkModel(
            new Date(2016, 5, 30, 15, 30, 0, 0),
            rating1,
            typeWork2,
            `
                Tincidunt fermentum, sit dolor.
                Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
                Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
                at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `,
            [image1 , image2, image3, image4, image5, image6, image7, image8],
            client1
        );

        let work7:WorkModel = new WorkModel(
            new Date(2016, 6, 25, 9, 55, 0, 0),
            rating1,
            typeWork1,
            `
                Tincidunt fermentum, sit dolor.
                Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
                Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
                at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `,
            [image1 , image2, image3, image4, image5, image6, image7, image8],
            client2
        );

        let work8:WorkModel = new WorkModel(
            new Date(2016, 4, 28, 10, 30, 0, 0),
            rating2,
            typeWork2,
            `
                Tincidunt fermentum, sit dolor.
                Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
                Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
                at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `,
            [image1 , image2, image3, image4, image5, image6, image7, image8],
            client3
        );

        let work9:WorkModel = new WorkModel(
            new Date(2016, 5, 26, 14, 45, 0, 0),
            rating1,
            typeWork3,
            `
                Tincidunt fermentum, sit dolor.
                Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
                Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
                at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `,
            [image1 , image2, image3, image4, image5, image6, image7, image8],
            client4
        );

        let work10:WorkModel = new WorkModel(
            new Date(2016, 7, 20, 11, 35, 0, 0),
            rating3,
            typeWork3,
            `
                Tincidunt fermentum, sit dolor.
                Risus dui metus repellendus euismod scelerisque, diam mauris ut facilisi, lacus sagittis.
                Amet felis, nibh purus massa class erat libero, necessitatibus mauris consectetuer faucibus eius,
                at vestibulum netus, egestas aliquet. Primis purus, non velit. Dignissim condimentum
            `,
            [image1 , image2, image3, image4, image5, image6, image7, image8],
            client5
        );

        let workRequested: WorkModel[] = [work1, work2, work3, work4, work5];
        let offeredJobs: WorkModel[] = [work6, work7, work8, work9, work10];
        let schedule: ScheduleModel = new ScheduleModel(offeredJobs, workRequested);

        return schedule;
    }
}
