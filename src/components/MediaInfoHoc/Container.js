import { compose, lifecycle, withHandlers, withState } from 'recompose';

export const Container = (children) => {

}

const LANDSCAPE = 'Landscape';
const PORTRAIT = 'portrait';
export const lifecycleHooks = {
	componentDidMount() {
		if ('onorientationchange' in window) {
			window.addEventListener("orientationchange", () => {
				this.setState({
					orientation: this.orientation === LANDSCAPE ? PORTRAIT : LANDSCAPE
				})
				console.log("onorientationchange");
			}, false);
		}
	}
};

const orientation = window.innerHeight > window.innerWidth ? PORTRAIT : LANDSCAPE;
const height = window.innerHeight;
const width = window.innerWidth;

const enhance = compose(
	withState('orientation', 'setOrientation', orientation),
	withState('height', 'setHeight', height),
	withState('width', 'setWidth', width),
	withHandlers({}),
	lifecycle(lifecycleHooks),
)