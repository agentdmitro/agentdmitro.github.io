// jQuery(window).scroll(function(){
//             var $sections = $('section');
// 	$sections.each(function(i,el){
//         var top  = $(el).offset().top-100;
//         var bottom = top +$(el).height();
//         var scroll = $(window).scrollTop();
//         var id = $(el).attr('id');
//     	if( scroll > top && scroll < bottom){
//             $('a.active').removeClass('active');
// 			$('a[href="#'+id+'"]').addClass('active');

//         }
//     })
// });

    
//   плавный скролл к якорям
$(".sidebar__list").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),
        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 400);
});

// smooth scrolling 

SmoothScroll({
    // Время скролла 400 = 0.4 секунды
    animationTime    : 600,
    // Размер шага в пикселях 
    stepSize         : 100,

    // Дополнительные настройки:
    
    // Ускорение 
    accelerationDelta : 30,  
    // Максимальное ускорение
    accelerationMax   : 1,   

    // Поддержка клавиатуры
    keyboardSupport   : true,  
    // Шаг скролла стрелками на клавиатуре в пикселях
    arrowScroll       : 50,

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Поддержка тачпада
    touchpadSupport   : true,
});




Vue.component('project', {
	props: ['project'],
	template: `
    <a :href=" project.link " class="projects__box" target="_blank">
        <div class="projects__box-img"><img :src="'img/projects/' + project.img + '.png'" :alt="project.title" loading="lazy"></div>
        <div class="projects__box-info">
            <div class="projects__box-title">{{ project.title }}</div>
        </div>
    </a>
    `
})


const app = new Vue({
	data: {
		projects: [
			{ title: 'Курс по сборке ПК', img: 'course', type: 'Лендинг', link: 'https://agentdmitro.github.io/Course/' },
			{ title: 'IT-Meteor', img: 'meteor', type: 'e-commerce', link: 'https://it-meteor.ru/' },
			{ title: 'skinTrade', img: 'skintrade', type: 'Лендинг', link: 'https://agentdmitro.github.io/SkinTrade/' },
			{ title: 'Gravity', img: 'gravity', type: 'Лендинг', link: 'https://agentdmitro.github.io/Gravity' },
			{ title: 'I-Lights', img: 'iLights', type: 'Интернет-магазин', link: 'https://agentdmitro.github.io/I-Lights' },
			{ title: 'instaBot', img: 'instaBot', type: 'Лендинг', link: 'https://agentdmitro.github.io/InstaBOT' },
			{ title: 'LaslesVPN', img: 'lasles', type: 'лендинг', link: 'https://agentdmitro.github.io/LaslesVPN' },
			{ title: 'AllBirds', img: 'allbirds', type: 'лендинг', link: 'https://agentdmitro.github.io/AllBirds' },
			{ title: 'Crappo', img: 'crappo', type: 'лендинг', link: 'https://agentdmitro.github.io/Crappo' },
			{ title: 'SushiBox', img: 'suchibox', type: 'интернет-магазин', link: 'https://agentdmitro.github.io/SuchiBox' },
			{ title: 'Mafia', img: 'mafia', type: 'интернет-магазин', link: 'https://agentdmitro.github.io/mafia' },
			{ title: 'Design agency', img: 'designAgency', type: 'лендинг', link: 'https://agentdmitro.github.io/DesignAgency' },
		]
	}
}).$mount('#projects-container')