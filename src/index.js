import Header from 'components/Header';
import Content from 'components/Content';

import ImageLoader from 'components/ImageLoader';
import WebpackImage from 'assets/images/webpack.png';

const header = new Header().render();
const content = new Content().render(ImageLoader(WebpackImage));
