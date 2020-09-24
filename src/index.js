import Image from 'assets/images/webpack.png';
import ImageLoader from 'components/ImageLoader';

const root = document.getElementById('root');

const imageLoader = ImageLoader(Image);

root.appendChild(imageLoader);
