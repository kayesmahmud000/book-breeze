

import Category from '../components/Category';
import LeatestBooks from '../components/LeatestBooks';
import Slider from '../components/Slider';

const HomePage = () => {
    return (
        <div>
          <section className='container mx-auto px-4'>
            <Slider></Slider>
          </section>
          <section className='container mx-auto my-16 px-4'>
            <Category></Category>
          </section>
          <section className='container mx-auto my-16 px-4'>
            <LeatestBooks></LeatestBooks>
          </section>
        </div>
    );
};

export default HomePage;