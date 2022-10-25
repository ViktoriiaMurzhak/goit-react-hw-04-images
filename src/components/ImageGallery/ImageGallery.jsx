import { Component } from 'react';
import { Loader } from '../Loader/Loader';
import { getImage } from 'api/getDataImage';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Searchbar } from 'components/Searchbar';
import css from './ImageGallery.module.css';

const Status = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const MY_PIXABAY_KEY = '30087713-0176780a5d439b6fbf7b0e04e';
export class ImageGallery extends Component {
  state = {
    images: null,
    status: Status.INIT,
  };

  async componentDidMount() {
    this.setState({ status: Status.LOADING });

    try {
      const data = await getImage({
        q: 'cat',
        page: 1,
        key: MY_PIXABAY_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      });
      this.setState({ images: data, status: Status.SUCCESS });
      console.log('images', this.state.images);
    } catch {
      this.setState({ status: Status.ERROR });
    }
  }

  render() {
    const { status, images } = this.state;

    if (status === Status.ERROR) {
      return (
        <div>
          <p>ERROOOOOOR</p>
        </div>
      );
    }
    if (status === Status.LOADING || status === Status.INIT) {
      return <Loader />;
    }

    return (
      <>
        <Searchbar />

        <ul className={css.ImageGallery}>
          {images?.hits?.map(item => {
            return <ImageGalleryItem key={item.id} url={item.webformatURL} />;
          })}
        </ul>
      </>
    );
  }
}
