Vue.component('project', {
    props: ['project'],
    template: `
    <div class="projects__box projects__page-box">
        <div class="projects__box-img"><a target="_blank" :href=" project.link "><img :src="'img/projects/' + project.img +  '.png'" alt="project image" loading="lazy"></a></div>
        <div class="projects__box-info">
            <div class="projects__box-title">{{project.title}}</div>
            <a target="_blank" :href=" project.link " class="projects__box-link">На сторінку</a>
        </div>
    </div>
`
})

const app = new Vue({
	// router
	data: {
		projects: [
			{ title: 'Empress Academy', img: 'empress', link: 'https://agentdmitro.github.io/Empress-Academy/', },
			{ title: 'RitmStyle', img: 'ritm', link: 'https://agentdmitro.github.io/RitmStyle/', },
			{ title: 'Курс по сборке ПК', img: 'course', link: 'https://agentdmitro.github.io/Course/', },
			{ title: 'IT-Meteor', img: 'meteor', link: 'https://it-meteor.ru/',},
			{ title: 'skinTrade', img: 'skintrade', link: 'https://agentdmitro.github.io/SkinTrade/',  },
			{ title: 'Gravity', img: 'gravity', link: 'https://agentdmitro.github.io/Gravity',  },
			{ title: 'I-Lights', img: 'iLights', link: 'https://agentdmitro.github.io/I-Lights',  },
			{ title: 'instaBot', img: 'instaBot', link: 'https://agentdmitro.github.io/InstaBOT',  },
			{ title: 'LaslesVPN', img: 'lasles', link: 'https://agentdmitro.github.io/LaslesVPN',  },
			{ title: 'AllBirds', img: 'allbirds', link: 'https://agentdmitro.github.io/AllBirds',  },
			{ title: 'Crappo', img: 'crappo', link: 'https://agentdmitro.github.io/CRAPPO/',  },
			{ title: 'SushiBox', img: 'suchibox', link: 'https://agentdmitro.github.io/SuchiBox',  },
			{ title: 'Mafia', img: 'mafia', link: 'https://agentdmitro.github.io/mafia',  },
			{ title: 'Design agency', img: 'designAgency', link: 'https://agentdmitro.github.io/DesignAgency',  },

		]
	}
}).$mount('#app')

