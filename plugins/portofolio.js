import Vue from 'vue'
Vue.mixin({
    methods: {
        moveTo(event,sectionId) {
			let offsetTop = document.querySelector(`#${sectionId}`).offsetTop
			let frame = 0;
			let frames = 200;
			let start = window.scrollY;
			let distance = offsetTop - window.scrollY;
			
			let interval = setInterval(() => {
				let steps = frames;
				window.scrollTo(0, this.getQuinticEase(frame, start, distance, steps))
				frame++;
				console.log(frame)
				if(frame >= frames) clearInterval(interval)
			}, 1);
			
		},
		getQuinticEase(currentProgress, start, distance, steps) {
			currentProgress /= steps/2;
			if (currentProgress < 1) {
				return (distance/2)*(Math.pow(currentProgress, 5)) + start;
			}
			currentProgress -= 2;
			return distance/2*(Math.pow(currentProgress, 5) + 2) + start;
		}
    }
})