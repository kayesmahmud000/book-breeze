

import Category from '../components/Category';
import ClintReview from '../components/ClintReview';
import LeatestBooks from '../components/LeatestBooks';
import Slider from '../components/Slider';
import TitleHelmet from '../components/TitleHelmet';

const HomePage = () => {
    return (
        <div>
            <TitleHelmet title={'Home'}></TitleHelmet>
          <section className='container mx-auto px-4'>
            <Slider></Slider>
          </section>
          <section className='container mx-auto my-16 px-4'>
            <Category></Category>
          </section>
          <section className='container mx-auto my-16 px-4'>
            <LeatestBooks></LeatestBooks>
          </section>
          <section className='container mx-auto my-16 px-4'>
            <ClintReview></ClintReview>
          </section>
        </div>
    );
};

export default HomePage;