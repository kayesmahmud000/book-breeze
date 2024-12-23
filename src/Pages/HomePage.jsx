

import Category from '../components/Category';
import Slider from '../components/Slider';

const HomePage = () => {
    return (
        <div>
          <section className='container mx-auto px-4'>
            <Slider></Slider>
          </section>
          <section className='container mx-auto my-10 px-4'>
            <Category></Category>
          </section>
        </div>
    );
};

export default HomePage;